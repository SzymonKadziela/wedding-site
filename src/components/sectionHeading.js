/** Wspólny nagłówek sekcji: eyebrow + h2 + opcjonalny opis. */
export function SectionHeading({ eyebrow, title, intro }) {
  return `
  <div class="center">
    <div class="eyebrow">${eyebrow}</div>
    <h2>${title}</h2>
    ${intro ? `<p class="section-intro">${intro}</p>` : ''}
  </div>`;
}
