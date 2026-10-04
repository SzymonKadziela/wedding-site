import { gallery as cfg } from '../data/content.js';
import { isConfigured, uploadPhoto, listPhotos, thumbUrl, fullUrl } from './cloudinary.js';

const PARALLEL_UPLOADS = 3;

export function initGallery(root) {
  const section = root.querySelector('[data-gallery]');
  if (!section || !isConfigured()) return;

  const $ = (sel) => section.querySelector(sel);
  const input = $('[data-gallery-input]');
  const queue = $('[data-gallery-queue]');
  const grid = $('[data-gallery-grid]');
  const empty = $('[data-gallery-empty]');
  const errorBox = $('[data-gallery-error]');
  const dialog = $('[data-gallery-lightbox]');
  const dialogImg = $('[data-lightbox-img]');

  const seen = new Set(); // public_id już pokazanych zdjęć (bez duplikatów)

  /* ---------- siatka + lightbox ---------- */

  function addPhoto(photo, { prepend = false } = {}) {
    if (seen.has(photo.public_id)) return;
    seen.add(photo.public_id);
    empty.hidden = true;

    const img = new Image();
    img.src = thumbUrl(photo);
    img.alt = 'Zdjęcie od gościa';
    img.loading = 'lazy';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gallery-item';
    btn.setAttribute('aria-label', 'Powiększ zdjęcie');
    btn.append(img);
    btn.addEventListener('click', () => {
      dialogImg.src = fullUrl(photo);
      dialog.showModal();
    });

    prepend ? grid.prepend(btn) : grid.append(btn);
  }

  dialog.addEventListener('click', (e) => {
    // klik w tło lub w "×" zamyka podgląd
    if (e.target === dialog || e.target.closest('[data-lightbox-close]')) dialog.close();
  });
  dialog.addEventListener('close', () => { dialogImg.removeAttribute('src'); });

  /* ---------- kolejka wysyłania ---------- */

  function createRow(file) {
    const li = document.createElement('li');
    li.className = 'queue-item';

    const name = document.createElement('span');
    name.className = 'queue-name';
    name.textContent = file.name;

    const bar = document.createElement('progress');
    bar.max = 1;
    bar.value = 0;

    const status = document.createElement('span');
    status.className = 'queue-status';
    status.textContent = 'Wysyłanie…';

    li.append(name, bar, status);
    queue.append(li);
    return { li, bar, status };
  }

  function validate(file) {
    if (!file.type.startsWith('image/')) return 'To nie jest zdjęcie';
    if (file.size > cfg.maxFileMB * 1024 * 1024) return `Plik większy niż ${cfg.maxFileMB} MB`;
    return null;
  }

  async function uploadOne(file) {
    const row = createRow(file);
    const problem = validate(file);
    if (problem) {
      row.li.classList.add('is-error');
      row.status.textContent = problem;
      return;
    }

    try {
      const photo = await uploadPhoto(file, { onProgress: (v) => { row.bar.value = v; } });
      addPhoto(photo, { prepend: true });
      row.bar.value = 1;
      row.status.textContent = 'Gotowe ✓';
      row.li.classList.add('is-done');
      setTimeout(() => row.li.remove(), 3000);
    } catch (err) {
      row.li.classList.add('is-error');
      row.status.textContent = err.message || 'Nie udało się wysłać';
    }
  }

  async function runPool(tasks, size) {
    const pending = [...tasks];
    const workers = Array.from({ length: Math.min(size, pending.length) }, async () => {
      while (pending.length) await pending.shift()();
    });
    await Promise.all(workers);
  }

  input.addEventListener('change', async () => {
    const files = Array.from(input.files).slice(0, cfg.maxFilesPerBatch);
    input.value = ''; // pozwala wybrać te same pliki ponownie
    await runPool(files.map((f) => () => uploadOne(f)), PARALLEL_UPLOADS);
  });

  /* ---------- start: wczytaj istniejące zdjęcia ---------- */

  listPhotos()
    .then((photos) => {
      photos.forEach((p) => addPhoto(p));
      if (!seen.size) empty.hidden = false;
    })
    .catch((err) => {
      console.warn(err);
      if (!seen.size) {
        errorBox.textContent = 'Nie udało się wczytać galerii. Spróbuj odświeżyć stronę.';
        errorBox.hidden = false;
      }
    });
}