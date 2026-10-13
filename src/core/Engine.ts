import * as THREE from 'three';
import { EffectComposer } from 'postprocessing';
import { Heightfield, SPAWN } from '../world/heightfield';
import { createTerrain } from '../world/Terrain';
import { SkyEnv } from '../world/SkyEnv';
import { createGrass } from '../world/Grass';
import { createForest, Collider } from '../world/Trees';
import { createRocks, createLogs, Motes } from '../world/Details';
import { createLandmarks } from '../world/Landmarks';
import { Drone } from '../world/Drone';
import { FirstPersonController } from '../player/FirstPersonController';
import { createComposer } from '../fx/PostProcessing';
import { AudioSystem } from '../audio/AudioSystem';
import { shared } from './uniforms';
import { ArenaMap, DOOR1_POS, DOOR2_POS, CUP_POS, P1_SPAWN, P2_SPAWN } from '../world/ArenaMap';
import { ScrollQuizUI } from '../ui/ScrollQuiz';
import { Minimap } from '../ui/Minimap';
import { HandGestureController } from '../input/HandGestureController';
import { SpeedBoostController } from '../ui/SpeedBoostController';

type Progress = (fraction: number, label: string) => void;

interface QualityPreset {
  grassCount: number;
  shadowMapSize: number;
  pixelRatioCap: number;
}

const PRESETS: Record<string, QualityPreset> = {
  low: { grassCount: 45000, shadowMapSize: 2048, pixelRatioCap: 1.25 },
  med: { grassCount: 130000, shadowMapSize: 3072, pixelRatioCap: 1.6 },
  high: { grassCount: 220000, shadowMapSize: 4096, pixelRatioCap: 2 }
};

const tick = () => new Promise<void>((r) => setTimeout(r, 0));

export class Engine {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  private readonly clock = new THREE.Clock();

  private field!: Heightfield;
  private sky!: SkyEnv;
  private controller!: FirstPersonController;
  private composer!: EffectComposer;
  private motes!: Motes;
  private audio!: AudioSystem;
  private drone!: Drone;
  private forestUpdate!: (camPos: THREE.Vector3) => void;
  private arenaMap!: ArenaMap;
  private scrollQuiz!: ScrollQuizUI;
  private minimap!: Minimap;
  private handGesture?: HandGestureController;
  private speedBoost!: SpeedBoostController;
  selectedPlayer: 1 | 2 = 1;
  private readonly quality: QualityPreset;

  constructor(container: HTMLElement) {
    const q = new URLSearchParams(location.search).get('q') ?? 'med';
    this.quality = PRESETS[q] ?? PRESETS.med;

    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.quality.pixelRatioCap));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer?.setSize(window.innerWidth, window.innerHeight);
    });
  }

  /** Construye el mundo por pasos, cediendo al DOM para actualizar la barra de carga. */
  async build(progress: Progress): Promise<void> {
    progress(0.05, 'Modelando el terreno…');
    await tick();
    this.field = new Heightfield();

    progress(0.25, 'Iluminando el cielo…');
    await tick();
    this.sky = new SkyEnv(this.renderer, this.scene, this.quality.shadowMapSize);

    progress(0.4, 'Extendiendo la ladera…');
    await tick();
    this.scene.add(await createTerrain(this.field));

    progress(0.55, 'Sembrando el pasto…');
    await tick();
    this.scene.add(createGrass(this.field, this.quality.grassCount));

    progress(0.72, 'Plantando el bosque…');
    await tick();
    const forest = createForest(this.field, this.scene);
    const colliders = forest.colliders;
    this.forestUpdate = forest.update;

    progress(0.85, 'Construyendo senderos de piedra y puertas…');
    await tick();
    createRocks(this.field, this.scene, colliders);
    createLogs(this.field, this.scene, colliders);
    await createLandmarks(this.field, this.scene, colliders);

    this.arenaMap = new ArenaMap(this.scene, colliders);
    this.scrollQuiz = new ScrollQuizUI();
    this.minimap = new Minimap();
    this.drone = new Drone(this.scene, this.field);
    this.motes = new Motes(this.scene);

    progress(0.93, 'Afinando la luz…');
    await tick();
    const spawnPos = P1_SPAWN;
    this.controller = new FirstPersonController(this.camera, this.field, colliders, spawnPos);
    this.controller.teleport(spawnPos, -Math.PI / 2);
    this.controller.arenaMap = this.arenaMap;
    this.speedBoost = new SpeedBoostController(this.controller);
    this.handGesture = new HandGestureController(
      this.controller,
      () => this.tryInteractDoor(),
      this.scrollQuiz,
      this.speedBoost
    );
    this.audio = new AudioSystem(this.field, this.controller);
    this.composer = createComposer(this.renderer, this.scene, this.camera);

    // Reparto inicial de LOD del bosque y precompilación de shaders.
    this.forestUpdate(this.controller.position);
    this.sky.followPlayer(this.controller.position);
    await this.renderer.compileAsync(this.scene, this.camera);
    this.composer.render(0);

    progress(1, 'Listo');
  }

  setPlayer(player: 1 | 2): void {
    this.selectedPlayer = player;
    if (this.controller) {
      const spawnPos = player === 1 ? P1_SPAWN : P2_SPAWN;
      this.controller.teleport(spawnPos, player === 1 ? -Math.PI / 2 : Math.PI / 2);
    }
  }

  setPlaying(playing: boolean): void {
    this.controller.enabled = playing;
    this.audio.setMenu(!playing);
  }

  /** Arranca el audio; debe invocarse desde un gesto del usuario (clic). */
  startAudio(): void {
    this.audio.start();
  }

  start(): void {
    this.clock.getDelta();
    this.renderer.setAnimationLoop(() => this.update());
  }

  private update(): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = shared.uTime.value + dt;
    shared.uTime.value = t;

    // Solo mover con teclado si el pergamino de preguntas no está abierto
    if (!this.scrollQuiz.isQuizActive) {
      this.controller.update(dt);
    }

    const p = this.controller.position;
    shared.uPlayer.value.set(p.x, p.z);
    this.sky.followPlayer(p);
    this.forestUpdate(p);
    this.arenaMap.update(dt, t);
    this.minimap.update(
      p,
      this.controller.rotationYaw,
      this.arenaMap.isDoorUnlocked(1),
      this.arenaMap.isDoorUnlocked(2)
    );
    this.drone.update(dt, t, p);
    this.motes.update(t, p, this.field);
    this.audio.update(dt, t);
    this.speedBoost.update(dt);

    // Detección de proximidad: Puerta 1
    if (!this.arenaMap.isDoorUnlocked(1) && !this.scrollQuiz.isQuizActive) {
      const d1 = p.distanceTo(DOOR1_POS);
      if (d1 < 3.4 && Math.abs(p.x - DOOR1_POS.x) < 2.0 && p.z > DOOR1_POS.z) {
        document.exitPointerLock?.();
        this.scrollQuiz.showQuiz(1, (doorId) => {
          this.arenaMap.unlockDoor(doorId);
          this.renderer.domElement.requestPointerLock?.();
        });
      }
    }

    // Detección de proximidad: Copa Final (Destino)
    if (!this.arenaMap.isVictory) {
      const dCup = p.distanceTo(CUP_POS);
      if (dCup < 2.8) {
        this.arenaMap.claimCup();
        document.exitPointerLock?.();
        this.scrollQuiz.showVictory();
        this.audio.stopBgm();
      }
    }

    this.composer.render(dt);
  }

  private tryInteractDoor(): void {
    if (this.scrollQuiz.isQuizActive) return;
    const p = this.controller.position;
    // Check Door 1 proximity (interaction radius 5m for Player 1)
    if (!this.arenaMap.isDoorUnlocked(1)) {
      const d1 = p.distanceTo(DOOR1_POS);
      if (d1 < 5.0) {
        document.exitPointerLock?.();
        this.scrollQuiz.showQuiz(1, (doorId) => {
          this.arenaMap.unlockDoor(doorId);
          this.renderer.domElement.requestPointerLock?.();
        });
        return;
      }
    }
  }
}
