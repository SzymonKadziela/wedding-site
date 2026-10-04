import { couple, story } from '../data/content.js';

export function Story() {
  return `
  <section class="section">
    <div class="wrap story-grid">
      <div class="story-copy">
        <div class="eyebrow">${story.eyebrow}</div>
        <h2>${story.title.join('<br>')}</h2>
        ${story.paragraphs.map((p) => `<p>${p}</p>`).join('')}
      </div>
      <div class="story-art" role="img" aria-label="Dekoracyjny monogram Leny i Szymona">
        <span class="story-monogram" aria-hidden="true">${couple.monogram}</span>
      </div>
    </div>
  </section>`;
}
