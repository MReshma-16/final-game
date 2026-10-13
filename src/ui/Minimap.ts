import * as THREE from 'three';
import { ARENA_SEGMENTS, DOOR1_POS, DOOR2_POS, CUP_POS, P1_SPAWN, P2_SPAWN } from '../world/ArenaMap';

export class Minimap {
  private container!: HTMLElement;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private distLabel!: HTMLElement;
  private compassNeedle!: HTMLElement;

  private isExpanded = false;
  private readonly RADIUS = 88; // Circular minimap radius in pixels
  private readonly ZOOM = 1.35; // Pixels per meter in radar mode

  constructor() {
    this.createDom();
  }

  private createDom(): void {
    const style = document.createElement('style');
    style.textContent = `
      #minimap-wrapper {
        position: fixed;
        top: 18px;
        right: 22px;
        z-index: 50;
        user-select: none;
        pointer-events: auto;
        font-family: Georgia, 'Times New Roman', serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s cubic-bezier(0.2, 0.9, 0.3, 1);
      }
      #minimap-frame {
        position: relative;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: radial-gradient(circle at 50% 50%, rgba(14, 26, 16, 0.88) 0%, rgba(6, 12, 8, 0.96) 100%);
        border: 3px solid #b6924e;
        box-shadow: 0 8px 24px rgba(0,0,0,0.65), inset 0 0 16px rgba(0,0,0,0.8), 0 0 12px rgba(182, 146, 78, 0.25);
        overflow: hidden;
        cursor: pointer;
      }
      #minimap-wrapper.expanded #minimap-frame {
        width: 320px;
        height: 320px;
        border-radius: 16px;
      }
      #minimap-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
      #minimap-compass {
        position: absolute;
        top: 4px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 11px;
        font-weight: bold;
        color: #f5d77f;
        text-shadow: 0 1px 4px rgba(0,0,0,0.9);
        letter-spacing: 0.1em;
        pointer-events: none;
      }
      #minimap-info {
        margin-top: 6px;
        padding: 3px 10px;
        border-radius: 12px;
        background: rgba(10, 18, 12, 0.75);
        border: 1px solid rgba(182, 146, 78, 0.4);
        color: #e2eccd;
        font-size: 11px;
        letter-spacing: 0.08em;
        display: flex;
        gap: 8px;
        align-items: center;
      }
      #minimap-cup-dist {
        color: #ffd700;
        font-weight: bold;
      }
      #minimap-toggle-hint {
        color: #8c9e78;
        font-size: 10px;
      }
    `;
    document.head.appendChild(style);

    const wrapper = document.createElement('div');
    wrapper.id = 'minimap-wrapper';

    wrapper.innerHTML = `
      <div id="minimap-frame" title="Click or press M to toggle map size">
        <canvas id="minimap-canvas" width="360" height="360"></canvas>
        <div id="minimap-compass">N</div>
      </div>
      <div id="minimap-info">
        <span>🏆 <span id="minimap-cup-dist">---m</span></span>
        <span id="minimap-toggle-hint">[M] Zoom</span>
      </div>
    `;

    document.body.appendChild(wrapper);

    this.container = wrapper;
    this.canvas = wrapper.querySelector('#minimap-canvas')!;
    this.ctx = this.canvas.getContext('2d')!;
    this.distLabel = wrapper.querySelector('#minimap-cup-dist')!;
    this.compassNeedle = wrapper.querySelector('#minimap-compass')!;

    // Toggle expand on click or 'KeyM'
    wrapper.querySelector('#minimap-frame')!.addEventListener('click', () => {
      this.toggleExpand();
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyM') {
        this.toggleExpand();
      }
    });
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
    this.container.classList.toggle('expanded', this.isExpanded);
  }

  update(
    playerPos: THREE.Vector3,
    playerYaw: number,
    door1Unlocked: boolean,
    door2Unlocked: boolean
  ): void {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    // Background terrain grid
    ctx.fillStyle = '#0f1d13';
    ctx.fillRect(0, 0, w, h);

    // Calculate distance to cup
    const dToCup = Math.round(playerPos.distanceTo(CUP_POS));
    this.distLabel.textContent = `${dToCup}m`;

    const zoom = this.isExpanded ? 0.65 : this.ZOOM;

    ctx.save();
    // In rotating minimap mode:
    // Screen UP is always player forward direction!
    ctx.translate(cx, cy);
    ctx.rotate(playerYaw);
    ctx.scale(zoom, zoom);
    ctx.translate(-playerPos.x, -playerPos.z);

    // 1. Draw Forest boundary
    ctx.strokeStyle = '#1a331c';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(0, 0, 220, 0, Math.PI * 2);
    ctx.stroke();

    // 2. Draw Walkway Trails
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Player 1 Path (Blue/Cyan)
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#2563eb';
    this.drawPathSegments(ctx, [
      [-60, 90, -20, 90],
      [-20, 90, -20, 35],
      [-20, 35, -12, 35],
      [-12, 35, -12, 10],
      [-12, 10, -12, -25],
      [-12, -25, 0, -25]
    ]);

    // Player 2 Path (Red)
    ctx.strokeStyle = '#dc2626';
    this.drawPathSegments(ctx, [
      [60, 90, 20, 90],
      [20, 90, 20, 35],
      [20, 35, 12, 35],
      [12, 35, 12, 10],
      [12, 10, 12, -25],
      [12, -25, 0, -25]
    ]);

    // Central Trail to Cup (Golden)
    ctx.strokeStyle = '#eab308';
    this.drawPathSegments(ctx, [
      [0, -25, 0, -85],
      [0, -85, 10, -130],
      [10, -130, -6, -175],
      [-6, -175, 0, -220]
    ]);

    // 3. Draw Landmark Markers
    // Player 1 Start
    this.drawPointMarker(ctx, P1_SPAWN.x, P1_SPAWN.z, '#3b82f6', 'P1');
    // Player 2 Start
    this.drawPointMarker(ctx, P2_SPAWN.x, P2_SPAWN.z, '#ef4444', 'P2');

    // Door 1
    this.drawGateMarker(ctx, DOOR1_POS.x, DOOR1_POS.z, door1Unlocked, 'Gate 1');
    // Door 2
    this.drawGateMarker(ctx, DOOR2_POS.x, DOOR2_POS.z, door2Unlocked, 'Gate 2');

    // Final Cup Altar
    this.drawCupMarker(ctx, CUP_POS.x, CUP_POS.z);

    ctx.restore();

    // 4. Draw Center Player Avatar & Vision Cone (Fixed pointing UP at center)
    ctx.save();
    ctx.translate(cx, cy);

    // Subtle Vision Cone (Field of view)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 75, -Math.PI / 2 - 0.45, -Math.PI / 2 + 0.45);
    ctx.closePath();
    ctx.fill();

    // Player Direction Arrow
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#00ffcc';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(0, -12); // Tip pointing up
    ctx.lineTo(8, 9);
    ctx.lineTo(0, 5);
    ctx.lineTo(-8, 9);
    ctx.closePath();
    ctx.fill();

    // Inner core dot
    ctx.fillStyle = '#00ffcc';
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // 5. Update Compass Needle / North Indicator
    // When playerYaw changes, North rotates around the compass ring
    const northAngle = playerYaw - Math.PI / 2;
    const compassR = this.isExpanded ? 148 : 78;
    const nx = cx + Math.cos(northAngle) * compassR;
    const ny = cy + Math.sin(northAngle) * compassR;

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 13px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 4;
    ctx.fillText('N', nx, ny);
  }

  private drawPathSegments(ctx: CanvasRenderingContext2D, segments: [number, number, number, number][]): void {
    ctx.beginPath();
    for (const [ax, az, bx, bz] of segments) {
      ctx.moveTo(ax, az);
      ctx.lineTo(bx, bz);
    }
    ctx.stroke();
  }

  private drawPointMarker(ctx: CanvasRenderingContext2D, x: number, z: number, color: string, label: string): void {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, z, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, z - 8);
  }

  private drawGateMarker(
    ctx: CanvasRenderingContext2D,
    x: number,
    z: number,
    unlocked: boolean,
    label: string
  ): void {
    ctx.fillStyle = unlocked ? '#22c55e' : '#f97316';
    ctx.fillRect(x - 5, z - 5, 10, 10);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x - 5, z - 5, 10, 10);

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(unlocked ? '🔓' : '🔒', x, z - 8);
  }

  private drawCupMarker(ctx: CanvasRenderingContext2D, x: number, z: number): void {
    // Altar dais box
    ctx.fillStyle = '#713f12';
    ctx.fillRect(x - 7, z - 7, 14, 14);

    // Cup glow
    ctx.fillStyle = '#ffd700';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🏆', x, z);
  }
}
