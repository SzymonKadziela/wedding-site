import { locations } from '../data/content.js';
import { googleMapsUrl } from '../lib/format.js';
import { SectionHeading } from './sectionHeading.js';
import { InfoCard } from './infoCard.js';

export function Locations() {
  const { place } = locations;

  const card = InfoCard({
    icon: place.icon,
    title: place.title,
    body: `<strong>${place.name}</strong><br>${place.address}`,
    action: { label: place.buttonLabel, href: googleMapsUrl(place.mapQuery) },
  });

  return `
  <section class="section" id="${locations.id}">
    <div class="wrap">
      ${SectionHeading(locations)}
      <div class="cards cards--single">${card}</div>
    </div>
  </section>`;
}
