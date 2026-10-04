import { couple, hero } from '../data/content.js';

export function Hero(dateLabel) {
  return `
  <header class="hero" id="top">
    <div class="hero-inner">
      <div class="eyebrow">${hero.eyebrow}</div>
      <h1>${couple.first} <span>&amp;</span> ${couple.second}</h1>
      <div class="hero-date">${dateLabel}</div>
      <p class="hero-note">${hero.note}</p>
      <a class="button" href="${hero.cta.href}">${hero.cta.label} <span aria-hidden="true">↓</span></a>
      <span class="scroll-hint">${hero.scrollHint}</span>
    </div>
  </header>`;
}
