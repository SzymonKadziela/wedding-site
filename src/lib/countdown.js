const DAY = 86_400_000;
const HOUR = 3_600_000;
const MINUTE = 60_000;
const SECOND = 1_000;

const pad = (n) => String(n).padStart(2, '0');

/**
 * Uruchamia odliczanie do `target` i aktualizuje elementy oznaczone
 * atrybutami data-countdown="days|hours|minutes|seconds" w `root`.
 * Zwraca funkcję zatrzymującą odliczanie.
 */
export function startCountdown(root, target) {
  const els = Object.fromEntries(
    ['days', 'hours', 'minutes', 'seconds'].map((unit) => [
      unit,
      root.querySelector(`[data-countdown="${unit}"]`),
    ]),
  );

  const set = (unit, value) => {
    if (els[unit]) els[unit].textContent = value;
  };

  function tick() {
    const diff = target.getTime() - Date.now();

    if (diff <= 0) {
      Object.keys(els).forEach((unit) => set(unit, '0'));
      clearInterval(timer);
      return;
    }

    set('days', Math.floor(diff / DAY));
    set('hours', pad(Math.floor((diff % DAY) / HOUR)));
    set('minutes', pad(Math.floor((diff % HOUR) / MINUTE)));
    set('seconds', pad(Math.floor((diff % MINUTE) / SECOND)));
  }

  const timer = setInterval(tick, 1000);
  tick();

  return () => clearInterval(timer);
}
