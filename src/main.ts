import { Engine } from './core/Engine';

const overlay = document.getElementById('overlay')!;
const playBtn = document.getElementById('play') as HTMLButtonElement;
const loadFill = document.getElementById('loadfill')!;
const loadText = document.getElementById('loadtext')!;

async function boot(): Promise<void> {
  const engine = new Engine(document.getElementById('app')!);

  await engine.build((fraction, label) => {
    loadFill.style.width = `${Math.round(fraction * 100)}%`;
    loadText.textContent = label;
  });

  playBtn.disabled = false;
  playBtn.textContent = 'ENTRAR A LA ARENA';
  loadText.textContent = 'Listo para jugar';

  const btnP1 = document.getElementById('btn-p1') as HTMLButtonElement | null;
  const btnP2 = document.getElementById('btn-p2') as HTMLButtonElement | null;

  btnP1?.addEventListener('click', () => {
    btnP1.classList.add('active');
    btnP2?.classList.remove('active');
    engine.setPlayer(1);
  });

  btnP2?.addEventListener('click', () => {
    btnP2.classList.add('active');
    btnP1?.classList.remove('active');
    engine.setPlayer(2);
  });

  // Sync UI button active state with engine's initial selectedPlayer
  if (engine.selectedPlayer === 2) {
    btnP2?.classList.add('active');
    btnP1?.classList.remove('active');
  } else {
    btnP1?.classList.add('active');
    btnP2?.classList.remove('active');
  }

  const canvas = engine.renderer.domElement;

  playBtn.addEventListener('click', () => {
    playBtn.blur();
    engine.startAudio();
    canvas.requestPointerLock();
  });

  document.addEventListener('pointerlockchange', () => {
    const locked = document.pointerLockElement === canvas;
    engine.setPlaying(locked);
    overlay.classList.toggle('hidden', locked);
    document.body.classList.toggle('playing', locked);
    if (!locked) {
      playBtn.textContent = 'CONTINUAR EN LA ARENA';
    }
  });

  engine.start();

  // Hook de depuración (consola del navegador / pruebas automatizadas).
  (window as unknown as { __engine: Engine }).__engine = engine;
}

boot().catch((err) => {
  loadText.textContent = 'Error al iniciar. Revisa la consola del navegador.';
  console.error(err);
});
