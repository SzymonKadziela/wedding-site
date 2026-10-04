const UNITS = [
  ['days', 'Dni'],
  ['hours', 'Godzin'],
  ['minutes', 'Minut'],
  ['seconds', 'Sekund'],
];

export function Countdown() {
  const items = UNITS.map(
    ([key, label]) =>
      `<div class="count-item"><strong data-countdown="${key}">—</strong><span>${label}</span></div>`,
  ).join('');

  return `
  <section class="countdown" aria-label="Odliczanie do ślubu">
    <div class="count-grid">${items}</div>
  </section>`;
}
