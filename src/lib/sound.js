/**
 * Dźwięki generowane w przeglądarce (Web Audio API) – bez plików audio.
 * AudioContext trzeba "odblokować" w reakcji na kliknięcie (wymóg iOS/Chrome),
 * dlatego `sound.unlock()` wołamy na początku obsługi przycisku.
 */
let ctx = null;
let muted = false;

function getCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function beep({ freq, slideTo, duration = 0.08, type = 'square', gain = 0.05, when = 0 }) {
  if (muted) return;
  const c = getCtx();
  if (!c) return;

  const t = c.currentTime + when;
  const osc = c.createOscillator();
  const amp = c.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + duration);

  amp.gain.setValueAtTime(gain, t);
  amp.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  osc.connect(amp).connect(c.destination);
  osc.start(t);
  osc.stop(t + duration + 0.02);
}

const melody = (notes, step, opts) =>
  notes.forEach((freq, i) => beep({ freq, when: i * step, ...opts }));

export const sound = {
  unlock: () => { getCtx(); },
  setMuted: (value) => { muted = value; },
  isMuted: () => muted,

  tick: () => beep({ freq: 650 + Math.random() * 250, duration: 0.03, type: 'square', gain: 0.02 }),
  stop: () => beep({ freq: 240, slideTo: 120, duration: 0.18, type: 'triangle', gain: 0.12 }),
  lose: () => beep({ freq: 300, slideTo: 150, duration: 0.35, type: 'sawtooth', gain: 0.04 }),
  win: () => melody([523, 659, 784], 0.12, { duration: 0.18, type: 'triangle', gain: 0.1 }),
  jackpot: () =>
    melody([523, 659, 784, 1047, 784, 1047, 1319], 0.11, { duration: 0.22, type: 'triangle', gain: 0.1 }),
};