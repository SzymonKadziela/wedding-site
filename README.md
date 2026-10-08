# Strona weselna - Lena & Szymon

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

## Galeria zdjęć od gości (Cloudinary)

Goście wgrywają zdjęcia z telefonu, a strona pokazuje je w galerii. Zdjęcia trzyma Cloudinary
(darmowy plan wystarcza na wesele). Dopóki nie uzupełnisz konfiguracji, sekcja jest ukryta.
