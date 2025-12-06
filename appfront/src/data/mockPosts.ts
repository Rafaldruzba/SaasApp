export interface Post {
  id: number;
  title: string;
  content: string;
  image?: string;
  group: string;
}

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "Nowe zasady pracy zdalnej",
    content: "Od przyszłego tygodnia obowiązują nowe zasady pracy zdalnej...",
    image: "https://picsum.photos/400/200?random=1",
    group: "HR",
  },
  {
    id: 2,
    title: "Spotkanie zespołu",
    content: "W piątek o 10:00 odbędzie się spotkanie zespołu projektowego.",
    group: "Developers",
  },
  {
    id: 3,
    title: "Aktualizacja systemu",
    content: "W weekend planowana jest aktualizacja systemu CRM.",
    image: "https://picsum.photos/400/200?random=2",
    group: "IT",
  },
   {
    id: 4,
    title: "Spotkanie z kuchnią odwołane",
    content: "Piątkowe spotkanie z kuchnią firmową zostało odwołane. Prawdopodobnie informacje o nowej dacie spotkania pojawią się w przyszłym tygodniu.",
    group: "All",
  },
  {
    id: 5,
    title: "Wycofanie pozycji w karcie menu",
    content: "Proszę o zapoznanie się z informacją o wycofaniu pozycji widocznych na zdjeciu z karty menu w stołówce firmowej.",
    image: "https://picsum.photos/400/200?random=3",
    group: "Pasnik",
  },
  {
    id: 6,
    title: "PREMIE ŚWIĄTECZNE 2025",
    content: "PRZESYŁAMY INFORMACJĘ O PREMII ŚWIĄTECZNEJ 2025. PROSZĘ O ZAPOZNANIE SIĘ ZE SZCZEGÓŁAMI NA ZDJĘCIU.",
    image: "https://picsum.photos/400/200?random=4",
    group: "Pasnik",
  },
  {
    id: 7,
    title: "BANKIET ZAPIERDALAMY",
    content: "Zapierdalać, 14:00 podkowa bednarz, 14:15 200os kfalarz I II i III, zmiana stołów na ceglarzu, 14:30 start bankietu, 15:30 koniec bankietu, 16:00 sprzątanie, 17:00 kolejna kolacja. PROSZĘ O ZAPOZNANIE SIĘ ZE SZCZEGÓŁAMI i nikt ma nie dać dupy.",
    image: "https://picsum.photos/400/200?random=6",
    group: "Pasnik",
  },
];