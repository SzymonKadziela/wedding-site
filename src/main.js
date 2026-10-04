import './styles/main.css';

import { weddingDate } from './data/content.js';
import { formatWeddingDate, formatShortDate } from './lib/format.js';
import { startCountdown } from './lib/countdown.js';
import { initCopyButtons } from './lib/copy.js';
import { initGallery } from './lib/gallery.js';
import { Hero } from './components/hero.js';
import { Countdown } from './components/countdown.js';
import { Story } from './components/story.js';
import { Timeline } from './components/timeline.js';
import { Locations } from './components/locations.js';
import { Menu } from './components/menu.js';
import { Practical } from './components/practical.js';
import { Gallery } from './components/gallery.js';
import { Faq } from './components/faq.js';
import { Contact } from './components/contact.js';
import { Footer } from './components/footer.js';

const date = new Date(weddingDate);
const app = document.getElementById('app');

app.innerHTML = [
  Hero(formatWeddingDate(date)),
  Countdown(),
  Story(),
  Timeline(),
  Locations(),
  Menu(),
  Practical(),
  Gallery(),
  Faq(),
  Contact(),
  Footer(formatShortDate(date)),
].join('');

startCountdown(app, date);
initCopyButtons(app);
initGallery(app);
