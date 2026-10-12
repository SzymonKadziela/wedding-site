import { slots } from '../data/content.js';
import { SectionHeading } from './sectionHeading.js';

export function Slots() {
  const reels = [0, 1, 2]
    .map((i) => `<div class="reel" data-reel aria-hidden="true">${slots.symbols[i % slots.symbols.length]}</div>`)
    .join('');

  return `
  <section class="section" id="${slots.id}" data-slots>
    <div class="wrap">
      ${SectionHeading(slots)}

      <div class="slot-machine">
        <button class="slot-sound" type="button" data-slots-sound aria-pressed="false" aria-label="Wycisz dźwięk">🔊</button>
        <div class="slot-points">Punkty: <strong data-slots-points>${slots.startPoints}</strong></div>
        <div class="reels">${reels}</div>
        <p class="slot-message" data-slots-message role="status" aria-live="polite">
          Koszt jednego losowania: ${slots.spinCost} pkt
        </p>
        <button class="button" type="button" data-slots-spin>Zakręć! 🎰</button>
        <button class="button secondary" type="button" data-slots-reset hidden>Zacznij od nowa</button>
      </div>

      <p class="slot-disclaimer">${slots.disclaimer}</p>
    </div>
  </section>`;
}