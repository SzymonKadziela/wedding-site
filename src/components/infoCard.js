/** Karta z ikoną – używana w sekcjach "Ważne adresy" i "Przed weselem". */
export function InfoCard({ icon, title, body, action }) {
  return `
  <article class="info-card">
    <div class="icon" aria-hidden="true">${icon}</div>
    <h3>${title}</h3>
    <p>${body}</p>
    ${
      action
        ? `<a class="button secondary" target="_blank" rel="noopener" href="${action.href}">${action.label} ↗</a>`
        : ''
    }
  </article>`;
}
