import { practical } from '../data/content.js';
import { SectionHeading } from './sectionHeading.js';
import { InfoCard } from './infoCard.js';

export function Practical() {
  const cards = practical.items
    .map((i) => InfoCard({ icon: i.icon, title: i.title, body: i.text }))
    .join('');

  return `
  <section class="section" id="${practical.id}">
    <div class="wrap">
      ${SectionHeading(practical)}
      <div class="cards">${cards}</div>
    </div>
  </section>`;
}
