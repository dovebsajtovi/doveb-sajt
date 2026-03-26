export type PackageKey = "standard" | "pro" | "premium" | "gold";

export const PACKAGES: Array<{
  key: PackageKey;
  name: string;
  price: string;
  recommended?: boolean;
  features: string[];
  note?: string;
}> = [
  {
    key: "standard",
    name: "STANDARD",
    price: "150€ + 12€/mes.",
    features: [
      "Izrada sajta",
      "Održavanje sajta",
      "Integracija društvenih mreža",
      "Google Maps integracija",
      "Max. 8 stranica",
      "1 besplatna izmena mesečno",
      "Održavanje: 6 meseci",
    ],
  },
  {
    key: "pro",
    name: "PRO",
    price: "240€ + 15€/mes.",
    recommended: true,
    features: [
      "Izrada sajta",
      "Održavanje sajta",
      "Integracija društvenih mreža",
      "Google Maps integracija",
      "Max. 15 stranica",
      "3 besplatne izmene mesečno",
      "Održavanje: 9 meseci",
      "Prioritetna podrška",
      "Osnovna SEO optimizacija",
    ],
  },
  {
    key: "premium",
    name: "PREMIUM",
    price: "370€ + 20€/mes.",
    features: [
      "Izrada sajta",
      "Održavanje sajta",
      "Integracija društvenih mreža",
      "Google Maps integracija",
      "Neograničen broj stranica",
      "10 besplatnih izmena mesečno",
      "Održavanje: 12 meseci",
      "Prioritetna podrška",
      "SEO optimizacija",
      "Mogućnost dodavanja AI chatbota na sajt",
      "Besplatno održavanje Google profila",
    ],
  },
  {
    key: "gold",
    name: "GOLD",
    price: "580€ + 25€/mes.",
    features: [
      "Izrada sajta",
      "Održavanje sajta",
      "Integracija društvenih mreža",
      "Google Maps integracija",
      "Neograničen broj stranica",
      "Neograničen broj besplatnih izmena mesečno",
      "Održavanje: 12 meseci",
      "Prioritetna podrška",
      "SEO optimizacija",
      "Mogućnost dodavanja AI chatbota na sajt",
      "Besplatno održavanje Google profila",
      "Google Ads kampanja",
      "Forma za zakazivanje",
      "ADMIN stranica",
    ],
    note: "Uspešnost Google kampanje zavisi od Vašeg budžeta.",
  },
];

export const PORTFOLIO: Array<{
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}> = [
  {
    title: "Car Detailing",
    href: "https://cardetailingnis.com",
    imageSrc: "/branding/portfolio-car-detailing.png",
    imageAlt: "Car Detailing — prikaz sajta (thumbnail)",
  },
  {
    title: "Umetnik Julijan",
    href: "https://julijantopolovic.netlify.app",
    imageSrc: "/branding/portfolio-julijan.png",
    imageAlt: "Umetnik Julijan — prikaz sajta (thumbnail)",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sta-je-seo-optimizacija",
    title: "Šta je SEO optimizacija?",
    description:
      "SEO optimizacija je skup tehnika koje pomažu da se vaš sajt bolje rangira na Google-u i donese više relevantnih poseta.",
    sections: [
      {
        heading: "SEO u praksi: vidljivost koja donosi klijente",
        paragraphs: [
          "SEO (Search Engine Optimization) znači prilagođavanje sajta tako da ga pretraživači lakše razumeju i preporuče ljudima koji traže vaše usluge.",
          "Dobar SEO nije trik — to je kombinacija tehničke urednosti, brzine, sadržaja i jasne strukture sajta.",
        ],
      },
      {
        heading: "Šta obično obuhvata SEO optimizacija",
        paragraphs: [
          "SEO ima više slojeva. Najbolji rezultati dolaze kada su svi slojevi usklađeni.",
        ],
        bullets: [
          "Tehnički SEO: brzina, mobilna optimizacija, indeksiranje, struktura URL-ova",
          "On-page SEO: naslovi (H1/H2), meta opisi, ključne reči, interne veze",
          "Sadržaj: tekstovi koji odgovaraju na pitanja kupaca i grade poverenje",
          "Lokalni SEO: Google profil, mape, recenzije i lokalni upiti",
        ],
      },
      {
        heading: "Zašto je SEO važan",
        paragraphs: [
          "SEO donosi stabilan izvor poseta bez plaćenih oglasa. Kada se sajt dobro rangira, dobijate upite i kada ne „gurate“ kampanje.",
          "Uz dobar dizajn i jasne CTA elemente, SEO posete se pretvaraju u konkretne kontakte i prodaju.",
        ],
      },
    ],
  },
  {
    slug: "koja-je-cena-izrade-jednog-sajta",
    title: "Koja je cena izrade jednog sajta?",
    description:
      "Cena zavisi od obima, broja stranica, funkcionalnosti i nivoa dizajna — ali uvek je važno da dobijete sajt koji donosi rezultat.",
    sections: [
      {
        heading: "Od čega zavisi cena",
        paragraphs: [
          "Cena izrade sajta nije samo „koliko stranica“. U cenu ulazi dizajn, razvoj, optimizacija, priprema sadržaja i kvalitet izvedbe.",
        ],
        bullets: [
          "Broj stranica i kompleksnost strukture",
          "Dodatne funkcije (forme, rezervacije, chat, više jezika)",
          "Kvalitet dizajna (custom vs. generički)",
          "SEO i performanse (brzina, optimizacija slika, struktura)",
          "Održavanje i podrška posle lansiranja",
        ],
      },
      {
        heading: "Kako birati paket",
        paragraphs: [
          "Najbolji izbor je onaj koji pokriva vaše realne potrebe danas i ostavlja prostor da sajt raste sutra.",
          "Ako želite ozbiljan nastup i bolju vidljivost na Google-u, preporuka je paket sa jačom SEO optimizacijom i većim brojem izmena.",
        ],
      },
      {
        heading: "Naš pristup",
        paragraphs: [
          "Kod nas dobijate premium dizajn, čist kod, brzinu i stabilnost — plus jasnu komunikaciju i podršku.",
          "Pogledajte naše pakete i pošaljite upit — predložićemo najpametniju opciju za vaš biznis.",
        ],
      },
    ],
  },
  {
    slug: "koliko-kosta-odrzavanje-i-sta-je-odrzavanje",
    title: "Koliko košta održavanje i šta je održavanje?",
    description:
      "Održavanje sajta je briga o sigurnosti, stabilnosti i ažurnosti — da vaš sajt uvek radi brzo i bez problema.",
    sections: [
      {
        heading: "Šta znači održavanje sajta",
        paragraphs: [
          "Održavanje obuhvata redovne provere, manja ažuriranja i podršku. Cilj je da sajt ostane siguran, brz i funkcionalan.",
          "Bez održavanja, vremenom mogu nastati problemi: sporije učitavanje, zastarele informacije ili tehničke greške.",
        ],
      },
      {
        heading: "Šta obično ulazi u održavanje",
        paragraphs: ["Održavanje može uključiti:"],
        bullets: [
          "Manje izmene sadržaja (tekst, slike, cene)",
          "Provera funkcionalnosti forme i linkova",
          "Optimizacija performansi (po potrebi)",
          "Podrška i prioritetno rešavanje problema",
        ],
      },
      {
        heading: "Koliko košta održavanje",
        paragraphs: [
          "Cena održavanja zavisi od paketa i obima izmena. U našim paketima održavanje je jasno definisano i uključuje određeni broj izmena mesečno.",
          "Svaka dodatna izmena koja nije uključena u paket u tom mesecu košta 10€.",
        ],
      },
    ],
  },
  {
    slug: "sta-je-ai-chatbot",
    title: "Šta je AI chatbot?",
    description:
      "AI chatbot je pametan asistent na sajtu koji odgovara posetiocima, prikuplja upite i ubrzava komunikaciju — 24/7.",
    sections: [
      {
        heading: "Brža komunikacija, manje propuštenih upita",
        paragraphs: [
          "AI chatbot može da odgovori na najčešća pitanja (cene, usluge, lokacija) i da usmeri korisnika ka zakazivanju ili kontaktu.",
          "Za biznise to znači više upita i profesionalniji utisak — čak i van radnog vremena.",
        ],
      },
      {
        heading: "Kako se koristi na sajtu",
        paragraphs: [
          "Chatbot se može podesiti da prati vaš ton komunikacije i da radi na osnovu informacija koje mu dostavite (usluge, cenovnik, FAQ).",
        ],
        bullets: [
          "Odgovori na FAQ pitanja",
          "Prikupljanje kontakt podataka",
          "Preporuka paketa/usluge",
          "Prosleđivanje razgovora vama kada je potrebno",
        ],
      },
      {
        heading: "Da li je AI chatbot obavezan?",
        paragraphs: [
          "Nije. Ali je odličan dodatak za biznise koji žele više upita i automatizaciju.",
          "U Premium i Gold varijanti postoji mogućnost dodavanja AI chatbota prema dogovoru.",
        ],
      },
    ],
  },
  {
    slug: "sta-je-google-ads-kampanja",
    title: "Šta je Google Ads kampanja?",
    description:
      "Google Ads kampanja je plaćeno oglašavanje na Google pretrazi i mreži koje vas dovodi do ljudi koji već traže vaše usluge.",
    sections: [
      {
        heading: "Kako Google Ads radi",
        paragraphs: [
          "Kada neko pretražuje uslugu koju nudite, vaš oglas može da se prikaže iznad organskih rezultata.",
          "Prednost je brzina: možete dobiti posete i upite odmah nakon pokretanja kampanje.",
        ],
      },
      {
        heading: "Zašto je bitna dobra landing stranica",
        paragraphs: [
          "Oglas sam po sebi nije dovoljan. Ako sajt deluje neprofesionalno ili je spor, plaćate klikove bez rezultata.",
          "Zato radimo premium dizajn i jasne CTA elemente — da se posete pretvore u upite.",
        ],
      },
      {
        heading: "Kome je namenjeno",
        paragraphs: [
          "Google Ads je idealan za biznise koji žele brze rezultate i imaju jasnu ponudu.",
          "U Gold paketu nudimo i Google Ads kampanju kao deo kompletnog rešenja.",
        ],
      },
    ],
  },
  {
    slug: "za-koliko-brzo-mogu-da-dobijem-gotov-sajt",
    title: "Za koliko brzo mogu da dobijem gotov sajt?",
    description:
      "Rok zavisi od obima i spremnosti sadržaja, ali u praksi se većina sajtova završava brzo uz dobru koordinaciju.",
    sections: [
      {
        heading: "Šta najviše utiče na rok",
        paragraphs: [
          "Najveći faktor je sadržaj: cenovnik, galerija, tekstovi i informacije o uslugama.",
          "Kada su materijali spremni, izrada ide brzo i bez zastoja.",
        ],
        bullets: [
          "Broj stranica i kompleksnost",
          "Dodatne funkcije (forme, rezervacije, chatbot)",
          "Brzina komunikacije i odobravanja dizajna",
          "Kvalitet i količina sadržaja koji dostavljate",
        ],
      },
      {
        heading: "Realna očekivanja",
        paragraphs: [
          "Za jednostavnije prezentacione sajtove, isporuka može biti vrlo brza. Za kompleksnije projekte, rok se produžava jer se radi detaljnije i temeljno.",
          "Mi uvek definišemo jasne korake i rokove na početku, kako bi proces bio transparentan.",
        ],
      },
      {
        heading: "Najbrži put do gotovog sajta",
        paragraphs: [
          "Pošaljite upit, izaberite paket i pripremite osnovne materijale. Mi preuzimamo ostalo — dizajn, razvoj, optimizaciju i puštanje sajta.",
        ],
      },
    ],
  },
];
