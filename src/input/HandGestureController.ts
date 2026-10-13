import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { FirstPersonController } from '../player/FirstPersonController';
import { ScrollQuizUI } from '../ui/ScrollQuiz';
import { SpeedBoostController } from '../ui/SpeedBoostController';

export type GestureType =
  | 'NONE'
  | 'OPEN_PALM'
  | 'CLOSED_FIST'
  | 'POINT_RIGHT'
  | 'POINT_LEFT'
  | 'THUMBS_UP'
  | 'TWO_FINGERS';

export class HandGestureController {
  private video!: HTMLVideoElement;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private container!: HTMLElement;
  private statusBadge!: HTMLElement;
  private gestureBadge!: HTMLElement;
  private toggleBtn!: HTMLButtonElement;

  private landmarker: HandLandmarker | null = null;
  private stream: MediaStream | null = null;
  private isRunning = false;
  private isProcessing = false;
  private lastVideoTime = -1;
  private lastFrameTime = -1;

  // Calibration center
  private neutralCenterX = 0.5;

  // Current detected gesture
  private activeGesture: GestureType = 'NONE';
  private gestureCooldowns: Record<string, number> = {};

  constructor(
    private readonly controller: FirstPersonController,
    private readonly onInteract?: () => void,
    private quiz?: ScrollQuizUI,
    private speedBoost?: SpeedBoostController
  ) {
    this.createDom();
  }

  setQuiz(quiz: ScrollQuizUI): void {
    this.quiz = quiz;
  }

  setSpeedBoost(speedBoost: SpeedBoostController): void {
    this.speedBoost = speedBoost;
  }

  private createDom(): void {
    const style = document.createElement('style');
    style.textContent = `
      #webcam-panel {
        position: fixed;
        bottom: 24px;
        left: 24px;
        z-index: 60;
        background: rgba(12, 22, 14, 0.88);
        backdrop-filter: blur(8px);
        border: 2px solid rgba(182, 146, 78, 0.65);
        border-radius: 12px;
        padding: 10px 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.7), 0 0 16px rgba(182, 146, 78, 0.2);
        color: #e2eccd;
        font-family: Georgia, 'Times New Roman', serif;
        user-select: none;
        width: 220px;
        transition: transform 0.25s ease, opacity 0.25s ease;
      }
      #webcam-panel.minimized {
        transform: translateY(calc(100% - 38px));
      }
      #webcam-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 0.1em;
        margin-bottom: 8px;
        cursor: pointer;
      }
      #webcam-header .title {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      #webcam-status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        display: inline-block;
        box-shadow: 0 0 6px #ef4444;
      }
      #webcam-status-dot.active {
        background: #22c55e;
        box-shadow: 0 0 8px #22c55e;
      }
      #webcam-status-dot.init {
        background: #eab308;
        box-shadow: 0 0 8px #eab308;
      }
      #webcam-view-wrap {
        position: relative;
        width: 100%;
        height: 140px;
        border-radius: 8px;
        overflow: hidden;
        background: #060e08;
        border: 1px solid rgba(255,255,255,0.1);
      }
      #webcam-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scaleX(-1); /* Mirror camera */
        display: block;
      }
      #webcam-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(-1); /* Mirror canvas to match */
        pointer-events: none;
      }
      #webcam-badge {
        margin-top: 8px;
        padding: 5px 8px;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(182, 146, 78, 0.4);
        font-size: 11px;
        font-weight: bold;
        text-align: center;
        color: #ffd700;
        min-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.05em;
      }
      #webcam-controls {
        display: flex;
        gap: 6px;
        margin-top: 8px;
      }
      .webcam-btn {
        flex: 1;
        padding: 5px 8px;
        font-size: 10px;
        font-family: inherit;
        letter-spacing: 0.08em;
        font-weight: bold;
        background: rgba(45, 65, 35, 0.6);
        border: 1px solid rgba(182, 146, 78, 0.5);
        border-radius: 4px;
        color: #e2eccd;
        cursor: pointer;
        transition: background 0.2s;
      }
      .webcam-btn:hover {
        background: rgba(70, 105, 55, 0.8);
      }
      .webcam-btn.active {
        background: rgba(34, 197, 94, 0.3);
        border-color: #22c55e;
        color: #86efac;
      }
      #webcam-guide {
        font-size: 9px;
        color: #8ca37d;
        margin-top: 6px;
        line-height: 1.35;
      }
    `;
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.id = 'webcam-panel';

    panel.innerHTML = `
      <div id="webcam-header" title="Click to minimize/expand">
        <div class="title">
          <span id="webcam-status-dot"></span>
          <span>HAND GESTURES</span>
        </div>
        <span id="webcam-min-btn">▼</span>
      </div>
      <div id="webcam-view-wrap">
        <video id="webcam-video" autoplay playsinline muted></video>
        <canvas id="webcam-canvas" width="220" height="140"></canvas>
      </div>
      <div id="webcam-badge">✋ Ready to Start</div>
      <div id="webcam-controls">
        <button id="webcam-toggle-btn" class="webcam-btn">START CAM</button>
        <button id="webcam-calib-btn" class="webcam-btn">CALIBRATE</button>
      </div>
      <div id="webcam-guide">
        ✋ Open Palm: Forward &middot; ✊ Fist: Stop<br>
        👉 Point Right: Turn Right &middot; 👈 Point Left: Turn Left<br>
        👍 Thumb: Jump &middot; ✌️ 2 Fingers: Door Interact
      </div>
    `;

    document.body.appendChild(panel);

    this.container = panel;
    this.video = panel.querySelector('#webcam-video')!;
    this.canvas = panel.querySelector('#webcam-canvas')!;
    this.ctx = this.canvas.getContext('2d')!;
    this.statusBadge = panel.querySelector('#webcam-status-dot')!;
    this.gestureBadge = panel.querySelector('#webcam-badge')!;
    this.toggleBtn = panel.querySelector('#webcam-toggle-btn')!;

    // Minimize toggle
    panel.querySelector('#webcam-header')!.addEventListener('click', () => {
      panel.classList.toggle('minimized');
      const minBtn = panel.querySelector('#webcam-min-btn')!;
      minBtn.textContent = panel.classList.contains('minimized') ? '▲' : '▼';
    });

    // Start / Stop toggle
    this.toggleBtn.addEventListener('click', () => {
      if (this.isRunning) {
        this.stop();
      } else {
        void this.start();
      }
    });

    // Calibration button
    panel.querySelector('#webcam-calib-btn')!.addEventListener('click', () => {
      this.gestureBadge.textContent = '🎯 Calibrated Center';
    });
  }

  async start(): Promise<void> {
    if (this.isRunning) return;

    this.statusBadge.className = 'init';
    this.gestureBadge.textContent = '⏳ Loading AI Model...';
    this.toggleBtn.disabled = true;

    try {
      // 1. Initialize MediaPipe HandLandmarker
      if (!this.landmarker) {
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
        );
        this.landmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
            delegate: 'GPU'
          },
          runningMode: 'VIDEO',
          numHands: 1
        });
      }

      // 2. Request Camera
      this.gestureBadge.textContent = '📷 Requesting Camera...';
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, frameRate: { ideal: 30 } }
      });

      this.stream = stream;
      this.video.srcObject = stream;
      await this.video.play();

      this.isRunning = true;
      this.statusBadge.className = 'active';
      this.gestureBadge.textContent = '🟢 Camera Active';
      this.toggleBtn.textContent = 'STOP CAM';
      this.toggleBtn.classList.add('active');
      this.toggleBtn.disabled = false;

      // Start processing loop
      this.processLoop();
    } catch (err) {
      console.error('Camera gesture error:', err);
      this.statusBadge.className = '';
      this.gestureBadge.textContent = '❌ Camera Blocked / Error';
      this.toggleBtn.textContent = 'START CAM';
      this.toggleBtn.disabled = false;
      this.toggleBtn.classList.remove('active');
      this.isRunning = false;
    }
  }

  stop(): void {
    this.isRunning = false;
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
    this.video.srcObject = null;
    this.statusBadge.className = '';
    this.gestureBadge.textContent = '⚪ Cam Off (Keys active)';
    this.toggleBtn.textContent = 'START CAM';
    this.toggleBtn.classList.remove('active');
    this.toggleBtn.disabled = false;

    if (this.quiz) {
      this.quiz.hideGesturePointer();
    }
    if (this.speedBoost) {
      this.speedBoost.hidePointer();
    }

    // Reset controller gesture inputs
    this.controller.gestureForward = false;
    this.controller.gestureTurnLeft = false;
    this.controller.gestureTurnRight = false;
    this.activeGesture = 'NONE';

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private processLoop = (): void => {
    if (!this.isRunning) return;

    if (this.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && this.landmarker) {
      const now = performance.now();
      if (this.video.currentTime !== this.lastVideoTime) {
        this.lastVideoTime = this.video.currentTime;
        const results = this.landmarker.detectForVideo(this.video, now);
        this.handleResults(results);
      }
    }

    requestAnimationFrame(this.processLoop);
  };

  private handleResults(results: { landmarks?: Array<Array<{ x: number; y: number; z: number }>> }): void {
    const w = this.canvas.width;
    const h = this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);

    if (!results.landmarks || results.landmarks.length === 0) {
      if (this.quiz && this.quiz.isQuizActive) {
        this.quiz.hideGesturePointer();
      }
      if (this.speedBoost) {
        this.speedBoost.hidePointer();
      }
      // Hand out of frame -> Stop gesture movement safely
      this.controller.gestureForward = false;
      this.controller.gestureTurnLeft = false;
      this.controller.gestureTurnRight = false;
      if (this.activeGesture !== 'NONE') {
        this.activeGesture = 'NONE';
        this.gestureBadge.textContent = '✋ Show hand in camera';
      }
      return;
    }

    const lm = results.landmarks[0];
    const now = performance.now();
    const dt = this.lastFrameTime > 0 ? Math.min(0.1, (now - this.lastFrameTime) / 1000) : 0.033;
    this.lastFrameTime = now;

    // Draw Skeleton on Canvas
    this.drawSkeleton(lm, w, h);

    // Finger extension checks for pointer
    const wrist = lm[0];
    const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(a.x - b.x, a.y - b.y);
    const indexExt = dist(lm[8], wrist) > dist(lm[6], wrist) * 1.18 && dist(lm[8], lm[5]) > 0.09;
    const middleExt = dist(lm[12], wrist) > dist(lm[10], wrist) * 1.18 && dist(lm[12], lm[9]) > 0.09;
    const ringExt = dist(lm[16], wrist) > dist(lm[14], wrist) * 1.18 && dist(lm[16], lm[13]) > 0.09;
    const pinkyExt = dist(lm[20], wrist) > dist(lm[18], wrist) * 1.18 && dist(lm[20], lm[17]) > 0.09;
    const isPointing = indexExt && !middleExt && !ringExt && !pinkyExt;

    // In mirrored screen space: x=0 in camera is screen right (1.0 - rawX)
    const tipX = (1.0 - lm[8].x) * window.innerWidth;
    const tipY = lm[8].y * window.innerHeight;

    // When Ancient Parchment Quiz is active, index finger acts as direct question pointer!
    if (this.quiz && this.quiz.isQuizActive) {
      if (this.speedBoost) {
        this.speedBoost.hidePointer();
      }
      this.controller.gestureForward = false;
      this.controller.gestureTurnLeft = false;
      this.controller.gestureTurnRight = false;

      this.quiz.updateGesturePointer(tipX, tipY);
      this.gestureBadge.textContent = '🎯 Point at answer to select';
      return;
    } else {
      if (this.quiz) {
        this.quiz.hideGesturePointer();
      }
    }

    // Update Speed Boost button pointer & dwell detection
    let isTargetingBoost = false;
    if (this.speedBoost) {
      isTargetingBoost = this.speedBoost.updatePointer(tipX, tipY, isPointing, dt);
    }

    // If pointing deliberately at the Speed Boost button, pause camera turning so player can select stably
    if (isTargetingBoost) {
      this.controller.gestureTurnLeft = false;
      this.controller.gestureTurnRight = false;
      this.gestureBadge.textContent = '⚡ Pointing at SPEED BOOST';
      return;
    }

    // Classify Gesture for exploration gameplay
    const gesture = this.classifyGesture(lm);
    this.applyGesture(gesture);
  }

  private drawSkeleton(lm: Array<{ x: number; y: number; z: number }>, w: number, h: number): void {
    const ctx = this.ctx;

    // Connections between joints
    const connections = [
      [0, 1], [1, 2], [2, 3], [3, 4], // Thumb
      [0, 5], [5, 6], [6, 7], [7, 8], // Index
      [0, 9], [9, 10], [10, 11], [11, 12], // Middle
      [0, 13], [13, 14], [14, 15], [15, 16], // Ring
      [0, 17], [17, 18], [18, 19], [19, 20], // Pinky
      [5, 9], [9, 13], [13, 17] // Palm
    ];

    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 2;
    for (const [a, b] of connections) {
      ctx.beginPath();
      ctx.moveTo(lm[a].x * w, lm[a].y * h);
      ctx.lineTo(lm[b].x * w, lm[b].y * h);
      ctx.stroke();
    }

    // Points
    ctx.fillStyle = '#f59e0b';
    for (const p of lm) {
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Highlight index finger if actively pointing
    if (this.activeGesture === 'POINT_RIGHT' || this.activeGesture === 'POINT_LEFT') {
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(lm[5].x * w, lm[5].y * h);
      ctx.lineTo(lm[6].x * w, lm[6].y * h);
      ctx.lineTo(lm[7].x * w, lm[7].y * h);
      ctx.lineTo(lm[8].x * w, lm[8].y * h);
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(lm[8].x * w, lm[8].y * h, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private classifyGesture(lm: Array<{ x: number; y: number; z: number }>): GestureType {
    const wrist = lm[0];
    const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(a.x - b.x, a.y - b.y);

    // Finger extension checks:
    // A finger is considered extended if the tip is substantially farther from the wrist than the PIP joint
    // and farther from its base MCP knuckle.
    const thumbExt = dist(lm[4], wrist) > dist(lm[2], wrist) * 1.15;
    const indexExt = dist(lm[8], wrist) > dist(lm[6], wrist) * 1.18 && dist(lm[8], lm[5]) > 0.09;
    const middleExt = dist(lm[12], wrist) > dist(lm[10], wrist) * 1.18 && dist(lm[12], lm[9]) > 0.09;
    const ringExt = dist(lm[16], wrist) > dist(lm[14], wrist) * 1.18 && dist(lm[16], lm[13]) > 0.09;
    const pinkyExt = dist(lm[20], wrist) > dist(lm[18], wrist) * 1.18 && dist(lm[20], lm[17]) > 0.09;

    // Vector calculation for index finger pointing in user-facing mirrored view:
    // Raw camera sensor coordinates: x=0 (left) to x=1 (right).
    // CSS applies transform: scaleX(-1) mirror effect.
    // Screen X = 1 - raw camera X.
    // Therefore, index vector pointing along mirrored screen X:
    // screenTipX - screenBaseX = (1 - lm[8].x) - (1 - lm[5].x) = lm[5].x - lm[8].x.
    // Positive screenIdxDx (> 0) means pointing towards screen RIGHT (user's physical right).
    // Negative screenIdxDx (< 0) means pointing towards screen LEFT (user's physical left).
    const screenIdxDx = lm[5].x - lm[8].x;
    const screenIdxDy = lm[8].y - lm[5].y;
    const screenHandDx = lm[0].x - lm[8].x;

    // 1. OPEN PALM (Move forward)
    // All 4 main fingers extended
    if (indexExt && middleExt && ringExt && pinkyExt) {
      return 'OPEN_PALM';
    }

    // 2. TWO FINGERS (Door interact)
    // Index and middle extended, ring and pinky curled
    if (indexExt && middleExt && !ringExt && !pinkyExt) {
      return 'TWO_FINGERS';
    }

    // 3. INDEX FINGER POINTING (Turn Right / Left)
    // Index finger extended while middle, ring, pinky are folded/curled
    if (indexExt && !middleExt && !ringExt && !pinkyExt) {
      const isHorizontal = Math.abs(screenIdxDx) > Math.abs(screenIdxDy) * 0.4 || Math.abs(screenHandDx) > 0.08;
      if (isHorizontal) {
        if (screenIdxDx > 0.035 || screenHandDx > 0.06) {
          return 'POINT_RIGHT'; // Hand points right -> Player turns right
        }
        if (screenIdxDx < -0.035 || screenHandDx < -0.06) {
          return 'POINT_LEFT';  // Hand points left -> Player turns left
        }
      }
    }

    // 4. CLOSED FIST (Stop all player movement and rotation)
    // None of the main fingers extended
    if (!indexExt && !middleExt && !ringExt && !pinkyExt) {
      // If thumb is pointing straight up, jump
      if (thumbExt && lm[4].y < lm[3].y && lm[4].y < lm[5].y - 0.02) {
        return 'THUMBS_UP';
      }
      return 'CLOSED_FIST';
    }

    return 'NONE';
  }

  private applyGesture(gesture: GestureType): void {
    const now = performance.now();

    // Reset base continuous movement states
    this.controller.gestureForward = false;
    this.controller.gestureTurnLeft = false;
    this.controller.gestureTurnRight = false;

    switch (gesture) {
      case 'OPEN_PALM':
        this.controller.gestureForward = true;
        this.gestureBadge.textContent = '✋ OPEN PALM: Moving Forward';
        break;

      case 'CLOSED_FIST':
        this.controller.stopAllMovement();
        this.gestureBadge.textContent = '✊ CLOSED FIST: Stopped';
        break;

      case 'POINT_RIGHT':
        this.controller.gestureTurnRight = true;
        this.gestureBadge.textContent = '👉 POINT RIGHT: Turning Right';
        break;

      case 'POINT_LEFT':
        this.controller.gestureTurnLeft = true;
        this.gestureBadge.textContent = '👈 POINT LEFT: Turning Left';
        break;

      case 'THUMBS_UP':
        this.gestureBadge.textContent = '👍 THUMBS UP: Jump!';
        // Jump with 850ms cooldown
        if (!this.gestureCooldowns['jump'] || now - this.gestureCooldowns['jump'] > 850) {
          this.gestureCooldowns['jump'] = now;
          this.controller.triggerJump();
        }
        break;

      case 'TWO_FINGERS':
        this.gestureBadge.textContent = '✌️ 2 FINGERS: Door Interact!';
        // Interact with 1200ms cooldown
        if (!this.gestureCooldowns['interact'] || now - this.gestureCooldowns['interact'] > 1200) {
          this.gestureCooldowns['interact'] = now;
          if (this.onInteract) this.onInteract();
        }
        break;

      case 'NONE':
      default:
        // When gesture changes or relaxes, continuous movement/turning stops
        break;
    }

    this.activeGesture = gesture;
  }
}
