# Strona weselna – Lena & Szymon

Statyczna strona informacyjna dla gości. Vite + czysty JavaScript (bez frameworka).

## Start

```bash
npm install
npm run dev        # podgląd na http://localhost:5173
npm run build      # produkcja → katalog dist/
npm run preview    # podgląd zbudowanej wersji
```

## Gdzie co zmienić

| Chcę zmienić…                        | Plik                         |
|--------------------------------------|------------------------------|
| datę, adresy, plan dnia, menu, FAQ   | `src/data/content.js`        |
| kolory, fonty, szerokość strony      | `src/styles/tokens.css`      |
| wygląd konkretnej sekcji             | `src/styles/sections/*.css`  |
| strukturę HTML sekcji                | `src/components/*.js`        |
| kolejność sekcji na stronie          | `src/main.js`                |
| tytuł karty / opis dla wyszukiwarek  | `index.html`                 |

## Struktura

```
index.html
public/favicon.svg
src/
  main.js                 składa stronę z komponentów
  data/content.js         CAŁA treść
  components/             jedna funkcja = jedna sekcja
  lib/                    odliczanie, formatowanie dat i linków
  styles/
    tokens.css            kolory i fonty
    base.css layout.css buttons.css
    sections/             style per sekcja
```

## Publikacja

Zawartość `dist/` wrzucasz na dowolny hosting statyczny
(Netlify, Vercel, GitHub Pages, zwykły serwer FTP).

## Galeria zdjęć od gości (Cloudinary)

Goście wgrywają zdjęcia z telefonu, a strona pokazuje je w galerii. Zdjęcia trzyma Cloudinary
(darmowy plan wystarcza na wesele). Dopóki nie uzupełnisz konfiguracji, sekcja jest ukryta.

1. Załóż konto na https://cloudinary.com i skopiuj **Cloud name** z Dashboardu.
2. **Settings → Upload → Upload presets → Add upload preset**:
   - *Signing mode*: **Unsigned**
   - *Asset folder* (opcjonalnie): `wesele`
   - zapisz i skopiuj **nazwę presetu**.
3. **Settings → Security** → w sekcji *Restricted media types* **odznacz „Resource list"**
   (bez tego galeria nie może pobrać listy zdjęć).
4. Wpisz `cloudName` i `uploadPreset` w `src/data/content.js` (obiekt `gallery`).
5. `npm run build` i wrzuć `dist/` na hosting.

**Usuwanie zdjęć** (np. niechcianych): Cloudinary → *Media Library* → wybierz zdjęcie → Delete.
Lista zdjęć jest cache'owana przez CDN (do ok. godziny), więc usunięte zdjęcie może jeszcze chwilę
być widoczne po odświeżeniu. Świeżo wgrane zdjęcia gość widzi od razu.

**Uwaga o prywatności:** `cloudName` i nazwa presetu trafiają do publicznego kodu strony, więc każdy,
kto ma link do strony, może zdjęcia obejrzeć i wgrać. Nie podawaj linku publicznie.
Warto też w presecie ustawić limit rozmiaru i dozwolone formaty.
