import { menu } from '../data/content.js';
import { SectionHeading } from './sectionHeading.js';

export function Menu() {
  const courses = menu.courses
    .map((c) => `<div class="course"><strong>${c.title}</strong><span>${c.text}</span></div>`)
    .join('<div class="menu-divider"></div>');

  return `
  <section class="section section--alt" id="${menu.id}">
    <div class="wrap">
      ${SectionHeading(menu)}
      <div class="menu-box">
        ${courses}
        <p class="menu-footnote">${menu.footnote}</p>
      </div>
    </div>
  </section>`;
}
