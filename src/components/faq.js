import { faq } from '../data/content.js';
import { SectionHeading } from './sectionHeading.js';

export function Faq() {
  const items = faq.items
    .map((i) => `<details><summary>${i.q}</summary><p>${i.a}</p></details>`)
    .join('');

  return `
  <section class="section section--alt" id="${faq.id}">
    <div class="wrap">
      ${SectionHeading(faq)}
      <div class="faq">${items}</div>
    </div>
  </section>`;
}
