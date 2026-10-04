import { couple, footer } from '../data/content.js';

export function Footer(shortDate) {
  return `
  <footer class="footer">
    <div class="names">${couple.first} &amp; ${couple.second}</div>
    <div>${shortDate} · ${footer.tagline}</div>
    <div class="footer-note">${footer.note}</div>
  </footer>`;
}
