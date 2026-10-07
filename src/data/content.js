export const couple = {
  first: 'Lena',
  second: 'Szymon',
  monogram: 'L & S',
};

export const weddingDate = '2027-08-28T14:00:00';

export const hero = {
  eyebrow: 'Z radością zapraszamy na nasz ślub',
  note: 'Przed nami wyjątkowy dzień i będzie nam ogromnie miło, jeśli spędzicie go razem z nami. Tutaj znajdziecie wszystkie najważniejsze informacje.',
  cta: { label: 'Zobacz plan dnia', href: '#plan' },
  scrollHint: 'Przewiń, aby poznać szczegóły',
};

export const story = {
  eyebrow: 'Nasz wyjątkowy dzień',
  title: ['Miłość, bliscy', 'i wspólne wspomnienia.'],
  paragraphs: [
    'Po wielu wspólnych chwilach chcemy świętować kolejny rozdział naszego życia właśnie z Wami. Przygotowaliśmy tę stronę, żebyście mieli pod ręką plan dnia, adresy i odpowiedzi na najczęstsze pytania.',
    'Do zobaczenia na parkiecie! ❤️',
  ],
};

export const timeline = {
  id: 'plan',
  eyebrow: 'Wszystko po kolei',
  title: 'Plan dnia',
  intro: 'Orientacyjny harmonogram naszego świętowania. Godziny możesz później łatwo zmienić.',
  events: [
    { time: '14:00', title: 'Ceremonia ślubna', text: 'Na terenie Zagrody Konik Polny.' },
    { time: '15:00', title: 'Życzenia i wspólne zdjęcia', text: 'Chwila na uściski, gratulacje i pamiątkowe fotografie.' },
    { time: '16:00', title: 'Powitanie gości i obiad', text: 'Przenosimy się pod namiot weselny.' },
    { time: '17:30', title: 'Pierwszy taniec', text: 'Oficjalnie otwieramy parkiet!' },
    { time: '20:00', title: 'Wspólna zabawa', text: 'Muzyka, rozmowy i mnóstwo dobrej energii.' },
    { time: '21:00', title: 'Tort weselny', text: 'Słodki moment dla wszystkich.' },
    { time: '00:00', title: 'Oczepiny', text: 'Tradycyjny punkt weselnej nocy.' },
  ],
};

export const locations = {
  id: 'lokalizacje',
  eyebrow: 'Jak do nas dotrzeć',
  title: 'Miejsce ślubu i wesela',
  intro: 'Ceremonia i przyjęcie odbędą się w jednym miejscu. Zapiszcie adres lub kliknijcie przycisk, aby otworzyć nawigację.',
  place: {
    icon: '♡',
    title: 'Ceremonia i przyjęcie weselne',
    name: 'Zagroda Konik Polny',
    address: 'Turobowice 3, 95-040 Turobowice',
    mapQuery: 'Zagroda Konik Polny Turobowice 3, 95-040 Turobowice', 
    buttonLabel: 'Otwórz mapę',
  },
};

export const menu = {
  id: 'menu',
  eyebrow: 'Coś pysznego',
  title: 'Menu weselne',
  intro: 'Przykładowy układ menu — podmień dania na te ustalone z salą.',
  courses: [
    { title: 'Na dobry początek', text: 'Przystawki i zimna płyta' },
    { title: 'Obiad', text: 'Zupa dnia · danie główne · dodatki' },
    { title: 'Słodka chwila', text: 'Ciasta, desery i tort weselny' },
    { title: 'Kolacja i przekąski', text: 'Dania na ciepło oraz przekąski dostępne w trakcie zabawy' },
  ],
  footnote: 'Alergie lub specjalne potrzeby żywieniowe? Dajcie znać Parze Młodej.',
};

export const practical = {
  id: 'praktyczne',
  eyebrow: 'Przydatne informacje',
  title: 'Przed weselem',
  intro: 'Kilka rzeczy, które mogą ułatwić Wam przygotowania.',
  items: [
    { icon: '♧', title: 'Strój', text: 'Dress code: elegancko i wygodnie. Jeśli mamy ustalony konkretny motyw kolorystyczny, dopisz go tutaj.' },
    { icon: '⌂', title: 'Noclegi', text: 'Informacje o hotelach, rezerwacji pokoi i ewentualnym kodzie rabatowym uzupełnimy tutaj.' },
    { icon: '\u2197\uFE0E', title: 'Dojazd i parking', text: 'Sprawdźcie wcześniej trasę. Informacje o parkingu i ewentualnym transporcie dla gości pojawią się tutaj.' },
    { icon: '♡', title: 'Prezenty', text: 'Najważniejsza jest dla nas Wasza obecność. Wskazówki dotyczące prezentów można dodać w tym miejscu.' },
  ],
};

export const faq = {
  id: 'faq',
  eyebrow: 'W razie pytań',
  title: 'FAQ',
  items: [
    { q: 'O której godzinie najlepiej przyjechać?', a: 'Prosimy o przybycie około 15 minut przed rozpoczęciem ceremonii, żeby spokojnie zająć miejsca.' },
    { q: 'Czy na sali jest parking?', a: 'Parking dostępny na miejscu.' },
    { q: 'Co zrobić w przypadku diety lub alergii?', a: 'Skontaktuj się z nami wcześniej i daj znać, czego potrzebujesz.' },
    { q: 'Do kogo zwrócić się z pytaniem w dniu wesela?', a: 'Najlepiej skontaktować się ze świadkami.' },
  ],
};

export const contact = {
  eyebrow: 'Będzie nam bardzo miło',
  title: 'Do zobaczenia!',
  text: 'Dziękujemy, że będziecie z nami tworzyć wspomnienia, do których będziemy wracać przez lata.',
  email: 'szwarc840@gmail.com', 
  subject: 'Informacje o weselu',
  buttonLabel: 'Skontaktuj się z nami',
};

export const footer = {
  tagline: 'Z miłością',
  note: 'Strona informacyjna dla naszych gości',
};

export const gallery = {
  id: 'zdjecia',
  eyebrow: 'Wasze wspomnienia',
  title: 'Galeria gości',
  intro: 'Zrobiliście zdjęcia na weselu? Dodajcie je tutaj prosto z telefonu — chcemy zobaczyć ten dzień Waszymi oczami.',
  uploadLabel: 'Dodaj zdjęcia',
  emptyText: 'Jeszcze nic tu nie ma — bądź pierwszy!',

  // --- konfiguracja Cloudinary (instrukcja w README) ---
  cloudName: 'cc5jyrgb',       // <- np. 'dxyz123abc'
  uploadPreset: 'FotoLS',    // <- nazwa presetu typu "unsigned"
  tag: 'wesele-lena-szymon', // tag, po którym pobieramy zdjęcia do galerii
  maxFileMB: 10,       // limit planu darmowego Cloudinary
  maxFilesPerBatch: 20,
};
