/**
 * Jedyny plik, który "wie", że używamy Cloudinary.
 * Chcesz zmienić dostawcę (Supabase, Firebase…)? Podmień implementację
 * tych czterech funkcji – reszta aplikacji się nie zmieni.
 */
import { gallery as cfg } from '../data/content.js';

export const isConfigured = () => Boolean(cfg.cloudName && cfg.uploadPreset);

const deliveryBase = () => `https://res.cloudinary.com/${cfg.cloudName}/image`;

/** Wysyła jedno zdjęcie. `onProgress` dostaje liczbę 0..1. */
export function uploadPhoto(file, { onProgress } = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `https://api.cloudinary.com/v1_1/${cfg.cloudName}/image/upload`);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress?.(e.loaded / e.total);
    };
    xhr.onerror = () => reject(new Error('Brak połączenia z internetem'));
    xhr.onload = () => {
      let data = null;
      try { data = JSON.parse(xhr.responseText); } catch { /* ignore */ }
      if (xhr.status >= 200 && xhr.status < 300 && data) resolve(data);
      else reject(new Error(data?.error?.message ?? `Błąd serwera (${xhr.status})`));
    };

    const body = new FormData();
    body.append('file', file);
    body.append('upload_preset', cfg.uploadPreset);
    body.append('tags', cfg.tag);
    xhr.send(body);
  });
}

/** Lista zdjęć z naszym tagiem, od najnowszych. */
export async function listPhotos() {
  const res = await fetch(`${deliveryBase()}/list/${cfg.tag}.json`);
  if (res.status === 404) return []; // brak jeszcze żadnego zdjęcia z tym tagiem
  if (!res.ok) throw new Error(`Nie udało się pobrać galerii (${res.status})`);
  const { resources = [] } = await res.json();
  return resources.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

/** Kwadratowa miniatura (f_auto = WebP/AVIF/JPG zależnie od przeglądarki). */
export const thumbUrl = (p, size = 400) =>
  `${deliveryBase()}/upload/c_fill,w_${size},h_${size},g_auto,f_auto,q_auto/v${p.version}/${p.public_id}`;

/** Duża wersja do podglądu – bez ciężkiego oryginału z telefonu. */
export const fullUrl = (p) =>
  `${deliveryBase()}/upload/c_limit,w_1800,f_auto,q_auto/v${p.version}/${p.public_id}`;