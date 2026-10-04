const dateFmt = new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
const weekdayFmt = new Intl.DateTimeFormat('pl-PL', { weekday: 'long' });

/** "12 czerwca 2027 · sobota" */
export function formatWeddingDate(date) {
  return `${dateFmt.format(date)} · ${weekdayFmt.format(date)}`;
}

/** "12 czerwca 2027" */
export function formatShortDate(date) {
  return dateFmt.format(date);
}

export const googleMapsUrl = (query) =>
  `https://maps.google.com/?q=${encodeURIComponent(query)}`;

export const mailtoUrl = (email, subject) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;
