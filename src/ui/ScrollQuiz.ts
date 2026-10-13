/**
 * UI controller for the Ancient Parchment Scroll Rapid-Fire Quiz.
 */

export interface Question {
  question: string;
  options: string[];
  correct: number;
}

export const DOOR1_QUESTIONS: Question[] = [
  {
    question: "What has keys, but no locks; space, but no room; and you can enter, but cannot go in?",
    options: ["A keyboard", "A treasure chest", "A musical piano", "A dungeon"],
    correct: 0
  },
  {
    question: "The more of this you take, the more you leave behind. What are they?",
    options: ["Seconds", "Footsteps", "Memories", "Breaths"],
    correct: 1
  },
  {
    question: "What gets wetter the more it dries?",
    options: ["A sponge", "A cloud", "A towel", "A leaf"],
    correct: 2
  },
  {
    question: "What belongs to you, but other people use it far more than you do?",
    options: ["Your shoes", "Your name", "Your phone", "Your shadow"],
    correct: 1
  },
  {
    question: "What has hands, but cannot clap?",
    options: ["A clock", "A statue", "A compass", "A tree"],
    correct: 0
  }
];

export const DOOR2_QUESTIONS: Question[] = [
  {
    question: "I speak without a mouth and hear without ears. I come alive with wind. What am I?",
    options: ["A whisper", "A flute", "An echo", "A river"],
    correct: 2
  },
  {
    question: "What has one eye, but cannot see anything at all?",
    options: ["A needle", "A storm", "A potato", "A lock"],
    correct: 0
  },
  {
    question: "What can travel around the entire world while staying in a single corner?",
    options: ["A bird", "A compass", "A postage stamp", "The sun"],
    correct: 2
  },
  {
    question: "What has many sharp teeth, but can never bite?",
    options: ["A saw", "A comb", "A zipper", "A gear"],
    correct: 1
  },
  {
    question: "What has a head and a tail, but has no body?",
    options: ["A snake", "A comet", "A coin", "A kite"],
    correct: 2
  }
];

export class ScrollQuizUI {
  private container!: HTMLElement;
  private scrollEl!: HTMLElement;
  private badgeEl!: HTMLElement;
  private titleEl!: HTMLElement;
  private questionEl!: HTMLElement;
  private optionsEl!: HTMLElement;
  private feedbackEl!: HTMLElement;

  private currentQuestions: Question[] = [];
  private currentIndex = 0;
  private activeDoorId: number | null = null;
  private onCompleteCallback: ((doorId: number) => void) | null = null;
  private isOpen = false;

  constructor() {
    this.createDom();
  }

  get isQuizActive(): boolean {
    return this.isOpen;
  }

  private createDom(): void {
    // Style element
    const style = document.createElement('style');
    style.textContent = `
      #scroll-overlay {
        position: fixed;
        inset: 0;
        z-index: 100;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        transition: background 0.4s ease;
      }
      #scroll-overlay.active {
        pointer-events: auto;
        background: rgba(8, 12, 8, 0.45);
        backdrop-filter: blur(3px);
      }
      #parchment-scroll {
        position: relative;
        width: min(520px, 92vw);
        margin-top: 2rem;
        transform: translateY(-130%);
        transition: transform 0.65s cubic-bezier(0.18, 1.15, 0.32, 1);
        filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.65));
        font-family: 'Georgia', 'Times New Roman', serif;
        user-select: none;
      }
      #scroll-overlay.active #parchment-scroll {
        transform: translateY(0);
      }
      .scroll-roller {
        height: 26px;
        background: linear-gradient(180deg, #533618 0%, #875727 45%, #b1793b 55%, #422912 100%);
        border-radius: 13px;
        box-shadow: inset 0 2px 3px rgba(255,255,255,0.3), 0 4px 10px rgba(0,0,0,0.5);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
      }
      .scroll-knob {
        width: 18px;
        height: 18px;
        background: radial-gradient(circle, #ecd089 20%, #996f2a 80%);
        border-radius: 50%;
        box-shadow: 0 1px 4px rgba(0,0,0,0.6);
      }
      .scroll-body {
        position: relative;
        background: #f1dfba;
        background-image: 
          radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.4) 0%, transparent 70%),
          radial-gradient(circle at 10% 50%, rgba(139, 90, 43, 0.12) 0%, transparent 40%),
          radial-gradient(circle at 90% 70%, rgba(139, 90, 43, 0.15) 0%, transparent 45%);
        border-left: 6px solid #cfb484;
        border-right: 6px solid #cfb484;
        box-shadow: inset 0 0 40px rgba(110, 68, 26, 0.3);
        padding: 1.8rem 2.2rem 2rem;
        color: #38240f;
        text-align: center;
      }
      .scroll-badge {
        display: inline-block;
        padding: 0.25rem 0.9rem;
        background: #422912;
        color: #f7e8c8;
        font-size: 0.75rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        border-radius: 20px;
        margin-bottom: 0.6rem;
        font-weight: bold;
      }
      .scroll-title {
        font-size: 1.55rem;
        font-weight: bold;
        letter-spacing: 0.08em;
        color: #2e1a06;
        text-shadow: 0 1px 1px rgba(255,255,255,0.4);
        margin-bottom: 0.8rem;
        border-bottom: 1px dashed rgba(80, 50, 20, 0.35);
        padding-bottom: 0.5rem;
      }
      .scroll-question {
        font-size: 1.15rem;
        line-height: 1.45;
        font-style: italic;
        color: #2b1808;
        margin-bottom: 1.4rem;
        min-height: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .scroll-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
        margin-bottom: 0.8rem;
      }
      .scroll-btn {
        padding: 0.8rem 1rem;
        background: linear-gradient(180deg, #fbf2dc 0%, #e6cb9b 100%);
        border: 1.5px solid #a4763e;
        border-radius: 6px;
        color: #2d1806;
        font-family: inherit;
        font-size: 0.92rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 3px 5px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6);
        transition: transform 0.15s, background 0.2s, border-color 0.2s, box-shadow 0.15s;
      }
      .scroll-btn:hover {
        background: linear-gradient(180deg, #ffffff 0%, #edd8b0 100%);
        border-color: #6d4619;
        transform: translateY(-2px);
        box-shadow: 0 5px 8px rgba(0,0,0,0.25);
      }
      .scroll-btn:active {
        transform: translateY(1px);
      }
      .scroll-btn.correct {
        background: linear-gradient(180deg, #d4f7c5 0%, #8ee070 100%) !important;
        border-color: #2e7a16 !important;
        color: #0d3803 !important;
      }
      .scroll-btn.wrong {
        background: linear-gradient(180deg, #ffd4d4 0%, #e87b7b 100%) !important;
        border-color: #a81d1d !important;
        color: #4a0808 !important;
      }
      .scroll-feedback {
        min-height: 1.5rem;
        font-size: 0.88rem;
        font-weight: bold;
        color: #8c2612;
        letter-spacing: 0.05em;
      }
      .scroll-feedback.success {
        color: #1a6d14;
      }
      @keyframes scrollShake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-8px); }
        40%, 80% { transform: translateX(8px); }
      }
      .shake {
        animation: scrollShake 0.4s ease;
      }

      /* Victory Banner */
      #victory-banner {
        position: fixed;
        inset: 0;
        z-index: 120;
        background: rgba(10, 18, 8, 0.78);
        backdrop-filter: blur(8px);
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #f7e8c8;
        font-family: 'Georgia', serif;
        text-align: center;
      }
      #victory-banner.visible {
        display: flex;
        animation: victoryFade 0.6s ease-out;
      }
      @keyframes victoryFade {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      #victory-banner h2 {
        font-size: clamp(2.2rem, 5vw, 3.8rem);
        color: #ffd700;
        text-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
        letter-spacing: 0.15em;
        margin-bottom: 0.5rem;
      }
      #victory-banner p {
        font-size: 1.2rem;
        color: #e8f0d8;
        margin-bottom: 2rem;
        letter-spacing: 0.1em;
      }
      #victory-restart {
        padding: 0.9rem 2.8rem;
        background: linear-gradient(180deg, #d4a017 0%, #8c6200 100%);
        border: 2px solid #ffec8b;
        color: #1a1000;
        font-family: inherit;
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 0.15em;
        border-radius: 6px;
        cursor: pointer;
        box-shadow: 0 0 25px rgba(255, 215, 0, 0.4);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      #victory-restart:hover {
        transform: scale(1.05);
        box-shadow: 0 0 35px rgba(255, 215, 0, 0.7);
      }
    `;
    document.head.appendChild(style);

    // Scroll Overlay Container
    const overlay = document.createElement('div');
    overlay.id = 'scroll-overlay';

    overlay.innerHTML = `
      <div id="parchment-scroll">
        <div class="scroll-roller top">
          <div class="scroll-knob"></div>
          <div class="scroll-knob"></div>
        </div>
        <div class="scroll-body">
          <div class="scroll-badge" id="scroll-badge">Question 1 / 5</div>
          <div class="scroll-title" id="scroll-title">Door 1: Ancient Trial</div>
          <div class="scroll-question" id="scroll-question">Loading riddle...</div>
          <div class="scroll-options" id="scroll-options"></div>
          <div class="scroll-feedback" id="scroll-feedback"></div>
        </div>
        <div class="scroll-roller bottom">
          <div class="scroll-knob"></div>
          <div class="scroll-knob"></div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Victory Banner
    const victory = document.createElement('div');
    victory.id = 'victory-banner';
    victory.innerHTML = `
      <h2>🏆 VICTORY! 🏆</h2>
      <p>You have conquered the trials and claimed the Champion's Cup!</p>
      <button id="victory-restart">PLAY AGAIN</button>
    `;
    document.body.appendChild(victory);

    this.container = overlay;
    this.scrollEl = overlay.querySelector('#parchment-scroll')!;
    this.badgeEl = overlay.querySelector('#scroll-badge')!;
    this.titleEl = overlay.querySelector('#scroll-title')!;
    this.questionEl = overlay.querySelector('#scroll-question')!;
    this.optionsEl = overlay.querySelector('#scroll-options')!;
    this.feedbackEl = overlay.querySelector('#scroll-feedback')!;

    victory.querySelector('#victory-restart')!.addEventListener('click', () => {
      window.location.reload();
    });
  }

  showQuiz(doorId: number, onComplete: (doorId: number) => void): void {
    if (this.isOpen) return;
    this.activeDoorId = doorId;
    this.onCompleteCallback = onComplete;
    this.currentQuestions = doorId === 1 ? DOOR1_QUESTIONS : DOOR2_QUESTIONS;
    this.currentIndex = 0;
    this.isOpen = true;

    this.titleEl.textContent = doorId === 1 ? 'DOOR 1: 5 RAPID FIRE QUESTIONS' : 'DOOR 2: 5 RAPID FIRE QUESTIONS';
    this.titleEl.style.color = doorId === 1 ? '#0e3a6c' : '#7a1c1c';
    this.container.classList.add('active');

    this.renderCurrentQuestion();
  }

  private renderCurrentQuestion(): void {
    const q = this.currentQuestions[this.currentIndex];
    this.badgeEl.textContent = `Question ${this.currentIndex + 1} / ${this.currentQuestions.length}`;
    this.questionEl.textContent = `"${q.question}"`;
    this.feedbackEl.textContent = '';
    this.feedbackEl.className = 'scroll-feedback';
    this.optionsEl.innerHTML = '';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'scroll-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => this.handleAnswer(idx, btn));
      this.optionsEl.appendChild(btn);
    });
  }

  private handleAnswer(selectedIndex: number, btnEl: HTMLButtonElement): void {
    const q = this.currentQuestions[this.currentIndex];
    const isCorrect = selectedIndex === q.correct;

    const allButtons = Array.from(this.optionsEl.querySelectorAll<HTMLButtonElement>('.scroll-btn'));
    allButtons.forEach((b) => (b.disabled = true));

    if (isCorrect) {
      btnEl.classList.add('correct');
      this.feedbackEl.textContent = '✓ Correct!';
      this.feedbackEl.classList.add('success');
      this.playChime(true);

      setTimeout(() => {
        this.currentIndex++;
        if (this.currentIndex < this.currentQuestions.length) {
          this.renderCurrentQuestion();
        } else {
          // Completed all 5 questions!
          this.badgeEl.textContent = '5 / 5 COMPLETED!';
          this.questionEl.textContent = 'All 5 questions answered! The gate is opening...';
          this.optionsEl.innerHTML = '';
          this.feedbackEl.textContent = '★ DOOR UNLOCKED ★';
          this.playFanfare();

          setTimeout(() => {
            this.closeQuiz();
            if (this.onCompleteCallback && this.activeDoorId !== null) {
              this.onCompleteCallback(this.activeDoorId);
            }
          }, 1400);
        }
      }, 700);
    } else {
      btnEl.classList.add('wrong');
      this.scrollEl.classList.add('shake');
      this.feedbackEl.textContent = '✗ Incorrect. Try again!';
      this.playChime(false);

      setTimeout(() => {
        this.scrollEl.classList.remove('shake');
        btnEl.classList.remove('wrong');
        allButtons.forEach((b) => (b.disabled = false));
      }, 900);
    }
  }

  closeQuiz(): void {
    this.isOpen = false;
    this.container.classList.remove('active');
  }

  showVictory(): void {
    const victory = document.getElementById('victory-banner');
    if (victory) victory.classList.add('visible');
    this.playVictoryTune();
  }

  private playChime(correct: boolean): void {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = correct ? 'sine' : 'sawtooth';
      const now = ctx.currentTime;
      if (correct) {
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      } else {
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.setValueAtTime(164.81, now + 0.12); // E3
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      }
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Audio fallback
    }
  }

  private playFanfare(): void {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const start = ctx.currentTime + idx * 0.12;
        gain.gain.setValueAtTime(0.25, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.45);
      });
    } catch {
      // Audio fallback
    }
  }

  private playVictoryTune(): void {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const chords = [
        [523.25, 659.25, 783.99],
        [587.33, 739.99, 880.0],
        [659.25, 830.61, 987.77],
        [1046.5, 1318.5, 1567.98]
      ];
      chords.forEach((chord, step) => {
        const time = ctx.currentTime + step * 0.35;
        chord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.2, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.6);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(time);
          osc.stop(time + 0.65);
        });
      });
    } catch {
      // Audio fallback
    }
  }
}
