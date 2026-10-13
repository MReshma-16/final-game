import * as THREE from 'three';
import { Heightfield } from '../world/heightfield';
import { Collider } from '../world/Trees';
import { ArenaMap } from '../world/ArenaMap';

const EYE_HEIGHT = 1.68;
const WALK_SPEED = 4.0;
const SPRINT_MULT = 1.85;
const GRAVITY = 22;
const JUMP_SPEED = 5.2;
export const BOOST_MULTIPLIER = 2.0;

/**
 * Controlador en primera persona: pointer lock + WASD, gravedad,
 * colisión con el terreno (muestreo del heightfield) y con árboles/rocas,
 * restricción estricta a senderos de piedra, sprint y head-bob sutil.
 */
export class FirstPersonController {
  readonly position: THREE.Vector3;
  enabled = false;
  arenaMap: ArenaMap | null = null;
  /** Velocidad de caída con la que se tocó el suelo este frame (0 si no hubo aterrizaje). */
  landingSpeed = 0;

  /** Estado del acelerador de velocidad (multiplicador x2.0) */
  speedBoostActive = false;

  private yaw = Math.PI; // mirando hacia -Z... (yaw 0 mira a -Z; PI mira a +Z)
  private pitch = 0;
  private readonly velocity = new THREE.Vector3();
  private grounded = true;
  private readonly keys = new Set<string>();
  private bobTime = 0;
  private bobAmount = 0;

  constructor(
    private readonly camera: THREE.PerspectiveCamera,
    private readonly field: Heightfield,
    private readonly colliders: Collider[],
    spawn: THREE.Vector3
  ) {
    this.position = spawn.clone();
    this.position.y = field.sampleHeight(spawn.x, spawn.z) + EYE_HEIGHT;
    this.yaw = 0; // three: yaw 0 => cámara mira hacia -Z
    this.pitch = 0.02;

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') e.preventDefault();
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        e.preventDefault();
        return;
      }
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        e.preventDefault();
        return;
      }
      this.keys.delete(e.code);
    });
    window.addEventListener('mousemove', (e) => {
      if (!this.enabled) return;
      this.yaw -= e.movementX * 0.0021;
      this.pitch -= e.movementY * 0.0021;
      const lim = Math.PI / 2 - 0.06;
      this.pitch = THREE.MathUtils.clamp(this.pitch, -lim, lim);
    });

    this.syncCamera(0);
  }

  get isGrounded(): boolean {
    return this.grounded;
  }

  get rotationYaw(): number {
    return this.yaw;
  }

  teleport(pos: THREE.Vector3, yaw = 0): void {
    this.position.copy(pos);
    const rawH = this.field.sampleHeight(pos.x, pos.z);
    const surfaceH = this.arenaMap ? this.arenaMap.getWalkSurfaceHeight(pos.x, pos.z, rawH) : rawH;
    this.position.y = surfaceH + EYE_HEIGHT;
    this.velocity.set(0, 0, 0);
    this.yaw = yaw;
    this.pitch = 0.02;
    this.syncCamera(0);
  }

  // Hand Gesture Inputs
  gestureForward = false;
  gestureTurnLeft = false;
  gestureTurnRight = false;
  gestureJumpRequested = false;

  triggerJump(): void {
    if (this.enabled && this.grounded) {
      this.velocity.y = JUMP_SPEED;
      this.grounded = false;
    }
  }

  stopAllMovement(): void {
    this.velocity.x = 0;
    this.velocity.z = 0;
    this.gestureForward = false;
    this.gestureTurnLeft = false;
    this.gestureTurnRight = false;
  }

  update(dt: number): void {
    this.landingSpeed = 0;

    // Gesture turning
    if (this.enabled) {
      if (this.gestureTurnLeft) {
        this.yaw += 1.8 * dt; // Turn left
      }
      if (this.gestureTurnRight) {
        this.yaw -= 1.8 * dt; // Turn right
      }
    }

    // Dirección de movimiento en el plano XZ según el yaw.
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(-forward.z, 0, forward.x);

    const input = new THREE.Vector3();
    if (this.enabled) {
      if (this.keys.has('KeyW') || this.keys.has('ArrowUp') || this.gestureForward) input.add(forward);
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) input.sub(forward);
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) input.add(right);
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) input.sub(right);
    }

    const sprinting = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
    const boostMult = this.speedBoostActive ? BOOST_MULTIPLIER : 1.0;
    const targetSpeed = input.lengthSq() > 0 ? WALK_SPEED * (sprinting ? SPRINT_MULT : 1) * boostMult : 0;
    if (input.lengthSq() > 0) input.normalize();

    // Aceleración/fricción horizontales.
    const accel = this.grounded ? 30 : 8;
    this.velocity.x = THREE.MathUtils.damp(this.velocity.x, input.x * targetSpeed, accel * 0.35, dt);
    this.velocity.z = THREE.MathUtils.damp(this.velocity.z, input.z * targetSpeed, accel * 0.35, dt);

    // Gravedad y salto (teclado Espacio o gesto Thumbs Up).
    if (this.enabled && this.grounded && (this.keys.has('Space') || this.gestureJumpRequested)) {
      this.velocity.y = JUMP_SPEED;
      this.grounded = false;
      this.gestureJumpRequested = false;
    }
    if (!this.grounded) this.velocity.y -= GRAVITY * dt;

    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;

    // RESTRICCIÓN ESTRICTA AL SENDERO: Los jugadores solo se mueven en los caminos de piedra, NO en el pasto.
    if (this.arenaMap) {
      this.arenaMap.clampPlayerToPath(this.position, 0.35);
    }

    // Colisión con árboles y rocas: empuje horizontal.
    for (const c of this.colliders) {
      const dx = this.position.x - c.x;
      const dz = this.position.z - c.z;
      const rr = c.r + 0.42;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 1e-6) {
        const d = Math.sqrt(d2);
        this.position.x = c.x + (dx / d) * rr;
        this.position.z = c.z + (dz / d) * rr;
      }
    }

    // Colisión con la superficie caminable (terreno o plataforma/escaleras de la arena).
    const rawH = this.field.sampleHeight(this.position.x, this.position.z);
    const surfaceH = this.arenaMap ? this.arenaMap.getWalkSurfaceHeight(this.position.x, this.position.z, rawH) : rawH;
    const groundY = surfaceH + EYE_HEIGHT;

    if (this.position.y <= groundY) {
      if (!this.grounded && this.velocity.y < -3) this.landingSpeed = -this.velocity.y;
      this.position.y = groundY;
      this.velocity.y = 0;
      this.grounded = true;
    } else if (this.position.y > groundY + 0.05) {
      this.grounded = false;
    }

    // Head-bob proporcional a la velocidad horizontal.
    const hSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    const target = this.grounded ? THREE.MathUtils.clamp(hSpeed / WALK_SPEED, 0, 1.8) : 0;
    this.bobAmount = THREE.MathUtils.damp(this.bobAmount, target, 6, dt);
    this.bobTime += dt * (4.6 + hSpeed * 0.9);

    this.syncCamera(dt);
  }

  private syncCamera(_dt: number): void {
    const bobY = Math.sin(this.bobTime * 2) * 0.032 * this.bobAmount;
    const bobX = Math.cos(this.bobTime) * 0.02 * this.bobAmount;

    this.camera.position.set(
      this.position.x + bobX * Math.cos(this.yaw),
      this.position.y + bobY,
      this.position.z - bobX * Math.sin(this.yaw)
    );
    this.camera.quaternion.setFromEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
  }
}
