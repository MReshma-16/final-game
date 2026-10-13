import * as THREE from 'three';
import { CUP_POS } from '../world/ArenaMap';

export class Minimap {
  private container!: HTMLElement;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private distLabel!: HTMLElement;
  private gateStatusLabel!: HTMLElement;

  private isExpanded = false;
  private mapImg: HTMLImageElement;
  private mapImgLoaded = false;

  constructor() {
    this.mapImg = new Image();
    this.mapImg.src = '/map.jpg';
    this.mapImg.onload = () => {
      this.mapImgLoaded = true;
    };
    this.createDom();
  }

  private createDom(): void {
    const style = document.createElement('style');
    style.textContent = `
      #minimap-wrapper {
        position: fixed;
        top: 16px;
        right: 18px;
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
        width: 250px;
        height: 250px;
        border-radius: 12px;
        background: #08120a;
        border: 2.5px solid #d4af37;
        box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 16px rgba(212, 175, 55, 0.35);
        overflow: hidden;
        cursor: pointer;
        transition: width 0.3s ease, height 0.3s ease;
      }
      #minimap-wrapper.expanded #minimap-frame {
        width: 440px;
        height: 440px;
        border-radius: 16px;
        box-shadow: 0 14px 40px rgba(0,0,0,0.9), 0 0 24px rgba(212, 175, 55, 0.45);
      }
      #minimap-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
      #minimap-title-bar {
        position: absolute;
        top: 6px;
        left: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 3px 8px;
        background: rgba(6, 14, 8, 0.75);
        border: 1px solid rgba(212, 175, 55, 0.45);
        border-radius: 6px;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 0.1em;
        color: #fce79f;
        text-shadow: 0 1px 3px rgba(0,0,0,0.9);
        pointer-events: none;
      }
      #minimap-compass {
        position: absolute;
        top: 6px;
        right: 8px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(6, 14, 8, 0.75);
        border: 1px solid rgba(212, 175, 55, 0.5);
        font-size: 10px;
        font-weight: bold;
        color: #ffd700;
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0 1px 3px rgba(0,0,0,0.9);
        pointer-events: none;
      }
      #minimap-info {
        margin-top: 6px;
        padding: 4px 12px;
        border-radius: 12px;
        background: rgba(8, 16, 10, 0.85);
        border: 1px solid rgba(182, 146, 78, 0.5);
        color: #e2eccd;
        font-size: 11px;
        letter-spacing: 0.08em;
        display: flex;
        gap: 10px;
        align-items: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.6);
      }
      #minimap-cup-dist {
        color: #ffd700;
        font-weight: bold;
      }
      #minimap-gate-status {
        color: #a7f3d0;
      }
      #minimap-toggle-hint {
        color: #8c9e78;
        font-size: 10px;
        cursor: pointer;
      }
      #minimap-toggle-hint:hover {
        color: #d4af37;
      }
    `;
    document.head.appendChild(style);

    const wrapper = document.createElement('div');
    wrapper.id = 'minimap-wrapper';

    wrapper.innerHTML = `
      <div id="minimap-frame" title="Click or press M to toggle map size">
        <canvas id="minimap-canvas" width="600" height="600"></canvas>
        <div id="minimap-title-bar">🗺️ FOREST MAP</div>
        <div id="minimap-compass">N</div>
      </div>
      <div id="minimap-info">
        <span>🏆 <span id="minimap-cup-dist">---m</span></span>
        <span id="minimap-gate-status">🔒 Doors Locked</span>
        <span id="minimap-toggle-hint">[M] Zoom</span>
      </div>
    `;

    document.body.appendChild(wrapper);

    this.container = wrapper;
    this.canvas = wrapper.querySelector('#minimap-canvas')!;
    this.ctx = this.canvas.getContext('2d')!;
    this.distLabel = wrapper.querySelector('#minimap-cup-dist')!;
    this.gateStatusLabel = wrapper.querySelector('#minimap-gate-status')!;

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
    const hint = this.container.querySelector('#minimap-toggle-hint')!;
    hint.textContent = this.isExpanded ? '[M] Normal' : '[M] Zoom';
  }

  /**
   * Converts 3D world coordinates (x, z) to normalized (u, v) in [0, 1] matching map.jpg:
   * Map diagram features:
   * - Player 1 Circle: u ≈ 0.093, v ≈ 0.762
   * - Player 2 Circle: u ≈ 0.907, v ≈ 0.762
   * - Left vertical road (Door 1): u ≈ 0.332, v: 0.762 to 0.540
   * - Right vertical road (Door 2): u ≈ 0.668, v: 0.762 to 0.540
   * - Central Road Junction: u = 0.500, v ≈ 0.540
   * - Cup Altar on raised dais: u = 0.500, v ≈ 0.160
   */
  private worldToMapUV(x: number, z: number): { u: number; v: number } {
    const U_P1 = 0.093;
    const U_P2 = 0.907;
    const U_DOOR1 = 0.332;
    const U_DOOR2 = 0.668;
    const U_CENTER = 0.500;

    const V_BOTTOM = 0.762;
    const V_DOOR = 0.540;
    const V_CUP = 0.160;

    // 1. Central Long Forest Trail to the Cup (Z <= -25)
    if (z <= -25) {
      const tZ = Math.max(0, Math.min(1, (-25 - z) / (-25 - (-220))));
      const v = V_DOOR + tZ * (V_CUP - V_DOOR);
      const u = U_CENTER + (x / 20) * 0.035;
      return { u, v };
    }

    // 2. West side: Player 1's journey
    if (x < 0) {
      // Past Door 1, heading east towards Central Junction
      if (z <= 10) {
        const tX = Math.max(0, Math.min(1, (x - (-12)) / (0 - (-12))));
        const u = U_DOOR1 + tX * (U_CENTER - U_DOOR1);
        const v = V_DOOR;
        return { u, v };
      }

      // Initial horizontal leg from spawn (-60, 90) to corner
      if (x < -20 && z > 55) {
        const tX = Math.max(0, Math.min(1, (x - (-60)) / (-20 - (-60))));
        const u = U_P1 + tX * (U_DOOR1 - U_P1);
        const v = V_BOTTOM;
        return { u, v };
      } else {
        // Vertical leg heading north up to Door 1 (z: 90 down to 10)
        const tZ = Math.max(0, Math.min(1, (85 - z) / (85 - 10)));
        const u = U_DOOR1 + ((x - (-16)) / 20) * 0.03;
        const v = V_BOTTOM + tZ * (V_DOOR - V_BOTTOM);
        return { u, v };
      }
    }

    // 3. East side: Player 2's journey
    if (z <= 10) {
      // Past Door 2, heading west towards Central Junction
      const tX = Math.max(0, Math.min(1, (12 - x) / (12 - 0)));
      const u = U_DOOR2 - tX * (U_DOOR2 - U_CENTER);
      const v = V_DOOR;
      return { u, v };
    }

    // Initial horizontal leg from spawn (60, 90) to corner
    if (x > 20 && z > 55) {
      const tX = Math.max(0, Math.min(1, (60 - x) / (60 - 20)));
      const u = U_P2 - tX * (U_P2 - U_DOOR2);
      const v = V_BOTTOM;
      return { u, v };
    } else {
      // Vertical leg heading north up to Door 2
      const tZ = Math.max(0, Math.min(1, (85 - z) / (85 - 10)));
      const u = U_DOOR2 + ((x - 16) / 20) * 0.03;
      const v = V_BOTTOM + tZ * (V_DOOR - V_BOTTOM);
      return { u, v };
    }
  }

  update(
    playerPos: THREE.Vector3,
    playerYaw: number,
    door1Unlocked: boolean,
    door2Unlocked: boolean
  ): void {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    // 1. Draw the complete, high-resolution square map image
    if (this.mapImgLoaded) {
      ctx.drawImage(this.mapImg, 0, 0, w, h);
    } else {
      // Dark forest fallback background
      ctx.fillStyle = '#0f1d13';
      ctx.fillRect(0, 0, w, h);
    }

    // 2. Update status label & distance
    const dToCup = Math.round(playerPos.distanceTo(CUP_POS));
    this.distLabel.textContent = `${dToCup}m`;

    if (door1Unlocked) {
      this.gateStatusLabel.textContent = 'Door 1 🔓 Open';
      this.gateStatusLabel.style.color = '#34d399';
    } else {
      this.gateStatusLabel.textContent = '🔒 Door 1 Locked';
      this.gateStatusLabel.style.color = '#fca5a5';
    }

    // 3. Draw Gate 1 Unlock Highlight
    const door1X = 0.332 * w;
    const door1Y = 0.540 * h;

    this.drawGateIndicator(ctx, door1X, door1Y, door1Unlocked);

    // 4. Calculate Player Position in Map Coordinates
    const uv = this.worldToMapUV(playerPos.x, playerPos.z);
    const px = THREE.MathUtils.clamp(uv.u * w, 20, w - 20);
    const py = THREE.MathUtils.clamp(uv.v * h, 20, h - 20);

    // Facing angle on the 2D map:
    // Three.js yaw=0 faces North (-Z, up on map).
    const mapAngle = -playerYaw - Math.PI / 2;

    // 5. Draw Animated Pulsing Radar Waves around Player
    const time = performance.now() * 0.004;
    const pulseRadius = 12 + ((time % 1) * 16);
    const pulseAlpha = Math.max(0, 1 - (time % 1));

    ctx.save();
    ctx.strokeStyle = `rgba(0, 255, 200, ${pulseAlpha * 0.8})`;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(px, py, pulseRadius, 0, Math.PI * 2);
    ctx.stroke();

    // 6. Draw Field-of-View (Vision Cone)
    const coneDist = 38;
    const coneFov = 0.55; // ~65 degrees
    const coneGrad = ctx.createRadialGradient(px, py, 4, px, py, coneDist);
    coneGrad.addColorStop(0, 'rgba(0, 255, 200, 0.45)');
    coneGrad.addColorStop(1, 'rgba(0, 255, 200, 0.0)');

    ctx.fillStyle = coneGrad;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.arc(px, py, coneDist, mapAngle - coneFov, mapAngle + coneFov);
    ctx.closePath();
    ctx.fill();

    // 7. Draw Player Direction Indicator (Arrow)
    ctx.translate(px, py);
    ctx.rotate(mapAngle);

    // Direction arrow pointing in facing direction
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#00ffff';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(14, 0);   // Arrow tip forward
    ctx.lineTo(-6, -7);
    ctx.lineTo(-2, 0);
    ctx.lineTo(-6, 7);
    ctx.closePath();
    ctx.fill();

    // Player Core Token (Glowing Circular Pin)
    ctx.fillStyle = playerPos.x < 0 ? '#00b4d8' : '#e63946'; // Cyan for P1, Crimson for P2
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // White center pip
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // 8. Draw "YOU" Illuminated Floating Badge above Player
    ctx.save();
    const badgeText = 'YOU';
    ctx.font = 'bold 11px Arial, sans-serif';
    const textWidth = ctx.measureText(badgeText).width;
    const badgeY = py - 18;

    // Background pill
    ctx.fillStyle = 'rgba(6, 16, 10, 0.88)';
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 1.2;
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 4;
    const pad = 4;
    ctx.beginPath();
    ctx.roundRect(px - textWidth / 2 - pad, badgeY - 10, textWidth + pad * 2, 14, 4);
    ctx.fill();
    ctx.stroke();

    // Text
    ctx.fillStyle = '#ffd700';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(badgeText, px, badgeY - 3);

    ctx.restore();
  }

  private drawGateIndicator(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    unlocked: boolean
  ): void {
    if (unlocked) {
      // Glowing green unlocked indicator on the gate
      ctx.save();
      ctx.shadowColor = '#22c55e';
      ctx.shadowBlur = 10;
      ctx.fillStyle = 'rgba(34, 197, 94, 0.35)';
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#86efac';
      ctx.font = 'bold 13px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🔓', x, y);
      ctx.restore();
    }
  }
}
