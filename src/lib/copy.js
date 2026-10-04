/** Kopiuje tekst do schowka (z fallbackiem dla starszych przeglądarek / http). */
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { /* ignore */ }
    ta.remove();
    return ok;
  }
}

/**
 * Obsługa wszystkich przycisków [data-copy="tekst"] wewnątrz `root`.
 * Po kliknięciu chwilowo zmienia etykietę na komunikat zwrotny.
 */
export function initCopyButtons(root) {
  root.addEventListener('click', async (event) => {
    const btn = event.target.closest('[data-copy]');
    if (!btn) return;

    const original = btn.dataset.label ?? btn.textContent;
    btn.dataset.label = original;

    const ok = await copyText(btn.dataset.copy);
    btn.textContent = ok ? 'Skopiowano ✓' : 'Nie udało się skopiować';
    setTimeout(() => { btn.textContent = original; }, 2000);
  });
}
