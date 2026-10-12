import { slots as cfg } from '../data/content.js';
import { sound } from './sound.js';

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const randomSymbol = () => cfg.symbols[Math.floor(Math.random() * cfg.symbols.length)];

/** Zwraca { prize, message, kind } dla trzech wylosowanych symboli. */
function evaluate(result) {
  const counts = result.reduce((acc, s) => ({ ...acc, [s]: (acc[s] ?? 0) + 1 }), {});
  const best = Math.max(...Object.values(counts));
  if (best === 3) return { kind: 'jackpot', prize: cfg.payouts.triple, message: `${cfg.messages.triple} +${cfg.payouts.triple} pkt` };
  if (best === 2) return { kind: 'win', prize: cfg.payouts.pair, message: `${cfg.messages.pair} +${cfg.payouts.pair} pkt` };
  return { kind: 'lose', prize: 0, message: cfg.messages.lose };
}

export function initSlots(root) {
  const section = root.querySelector('[data-slots]');
  if (!section) return;

  const reels = [...section.querySelectorAll('[data-reel]')];
  const pointsEl = section.querySelector('[data-slots-points]');
  const messageEl = section.querySelector('[data-slots-message]');
  const spinBtn = section.querySelector('[data-slots-spin]');
  const resetBtn = section.querySelector('[data-slots-reset]');
  const soundBtn = section.querySelector('[data-slots-sound]');

  let points = cfg.startPoints;
  let spinning = false;

  function render() {
    pointsEl.textContent = points;
    const broke = points < cfg.spinCost;
    spinBtn.disabled = spinning || broke;
    resetBtn.hidden = spinning || !broke;
  }

  /** Bęben kręci się `duration` ms, a tuż przed końcem wyraźnie zwalnia. */
  function spinReel(reel, duration) {
    return new Promise((resolve) => {
      const start = performance.now();
      reel.classList.add('is-spinning');

      const tick = () => {
        const progress = (performance.now() - start) / duration;
        if (progress >= 1) {
          const final = randomSymbol();
          reel.textContent = final;
          reel.classList.remove('is-spinning');
          sound.stop();
          resolve(final);
          return;
        }
        reel.textContent = randomSymbol();
        sound.tick();
        setTimeout(tick, 60 + progress ** 3 * 180); // 60 ms → ~240 ms
      };
      tick();
    });
  }

  async function spin() {
    if (spinning || points < cfg.spinCost) return;
    sound.unlock(); // musi być w obsłudze kliknięcia (iOS)
    spinning = true;
    points -= cfg.spinCost;
    messageEl.textContent = '…';
    render();

    const base = reduceMotion() ? 150 : cfg.spinMs;
    const step = reduceMotion() ? 100 : cfg.stepMs;
    const result = await Promise.all(reels.map((reel, i) => spinReel(reel, base + i * step)));

    const { kind, prize, message } = evaluate(result);
    points += prize;
    spinning = false;
    sound[kind]();
    messageEl.textContent = points < cfg.spinCost && prize === 0 ? cfg.messages.broke : message;
    render();
  }

  spinBtn.addEventListener('click', spin);

  resetBtn.addEventListener('click', () => {
    points = cfg.startPoints;
    messageEl.textContent = `Koszt jednego losowania: ${cfg.spinCost} pkt`;
    render();
  });

  soundBtn.addEventListener('click', () => {
    const muted = !sound.isMuted();
    sound.setMuted(muted);
    soundBtn.textContent = muted ? '🔇' : '🔊';
    soundBtn.setAttribute('aria-pressed', String(muted));
    soundBtn.setAttribute('aria-label', muted ? 'Włącz dźwięk' : 'Wycisz dźwięk');
  });

  render();
}