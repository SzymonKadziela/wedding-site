import { timeline } from '../data/content.js';
import { SectionHeading } from './sectionHeading.js';

export function Timeline() {
  const events = timeline.events
    .map(
      (e) => `
      <div class="event">
        <time>${e.time}</time>
        <div><h3>${e.title}</h3><p>${e.text}</p></div>
      </div>`,
    )
    .join('');

  return `
  <section class="section section--alt" id="${timeline.id}">
    <div class="wrap">
      ${SectionHeading(timeline)}
      <div class="timeline">${events}</div>
    </div>
  </section>`;
}
