import { gallery } from '../data/content.js';
import { isConfigured } from '../lib/cloudinary.js';
import { SectionHeading } from './sectionHeading.js';

export function Gallery() {
  if (!isConfigured()) {
    // Gościom nic nie pokazujemy, ale podczas pracy (npm run dev) widać podpowiedź.
    return import.meta.env.DEV
      ? `<section class="section" id="${gallery.id}" data-gallery data-disabled>
           <div class="wrap center"><p class="section-intro">
             Galeria jest wyłączona. Uzupełnij <code>cloudName</code> i <code>uploadPreset</code>
             w <code>src/data/content.js</code> (to widzisz tylko w trybie dev).
           </p></div></section>`
      : '';
  }

  return `
  <section class="section" id="${gallery.id}" data-gallery>
    <div class="wrap">
      ${SectionHeading(gallery)}

      <div class="gallery-upload">
        <label class="button gallery-button">
          📷 ${gallery.uploadLabel}
          <input type="file" accept="image/*" multiple hidden data-gallery-input>
        </label>
        <p class="gallery-hint">Możesz wybrać kilka zdjęć naraz (do ${gallery.maxFileMB} MB każde).</p>
        <ul class="gallery-queue" data-gallery-queue aria-live="polite"></ul>
      </div>

      <p class="gallery-empty" data-gallery-empty hidden>${gallery.emptyText}</p>
      <p class="gallery-error" data-gallery-error hidden></p>
      <div class="gallery-grid" data-gallery-grid></div>

      <dialog class="lightbox" data-gallery-lightbox>
        <button class="lightbox-close" type="button" aria-label="Zamknij" data-lightbox-close>×</button>
        <img alt="Zdjęcie od gościa" data-lightbox-img>
      </dialog>
    </div>
  </section>`;
}