import { contact } from '../data/content.js';
import { mailtoUrl } from '../lib/format.js';

export function Contact() {
  return `
  <section class="rsvp">
    <div class="eyebrow">${contact.eyebrow}</div>
    <h2>${contact.title}</h2>
    <p>${contact.text}</p>
    <p class="rsvp-email"><a href="${mailtoUrl(contact.email, contact.subject)}">${contact.email}</a></p>
    <div class="rsvp-actions">
      <a class="button" href="${mailtoUrl(contact.email, contact.subject)}">${contact.buttonLabel}</a>
      <button class="button secondary" type="button" data-copy="${contact.email}">Kopiuj adres</button>
    </div>
  </section>`;
}
