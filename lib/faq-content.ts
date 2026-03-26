export type FaqPageContent = {
  path: string;
  question: string;
  title: string;
  heroImage: string;
  description: string;
  sections: Array<{
    heading: string;
    subheading?: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export const FAQ_PAGES: FaqPageContent[] = [
  {
    path: "/seo-optimizacija",
    question: "Šta je SEO optimizacija?",
    title: "Šta je SEO optimizacija?",
    heroImage: "/faq/seo.png",
    description:
      "SEO optimizacija pomaže da vaš sajt bude vidljiviji na Google-u, dovede relevantne posete i pretvori ih u upite.",
    sections: [
      {
        heading: "SEO kao osnova digitalnog rasta",
        subheading: "Vidljivost koja donosi upite, ne samo klikove",
        paragraphs: [
          "SEO optimizacija je proces prilagođavanja sajta tako da ga pretraživači bolje razumeju i bolje rangiraju.",
          "Kada je sajt tehnički čist i sadržajno jasan, Google ga prikazuje ljudima koji aktivno traže vašu uslugu.",
          "To znači da ne privlačite bilo koga, već publiku sa konkretnom namerom kupovine ili kontakta.",
          "Dugoročno, SEO smanjuje zavisnost od plaćenih oglasa i stvara stabilan kanal novih klijenata.",
          "Za ozbiljan biznis SEO nije dodatak, već deo strategije prodaje i brendiranja.",
        ],
      },
      {
        heading: "Kako SEO izgleda u praksi",
        paragraphs: [
          "Prvi korak je tehnička optimizacija: brzina učitavanja, mobilna prilagođenost i pravilna struktura stranica.",
          "Zatim se radi on-page optimizacija kroz kvalitetne naslove, meta opise i logičnu hijerarhiju H1/H2/H3 elemenata.",
          "Posebno je važno da svaka stranica odgovara na realna pitanja potencijalnih klijenata.",
          "Interni linkovi između važnih stranica pomažu i korisnicima i pretraživačima da lakše razumeju sajt.",
          "SEO radi najbolje kada je sadržaj koristan, jasan i pisan za ljude, a ne samo za algoritam.",
        ],
      },
      {
        heading: "Zašto je SEO bitan za lokalne usluge",
        paragraphs: [
          "Ako poslujete lokalno, ljudi vas najčešće traže preko Google pretrage i mape.",
          "Kada se pravilno optimizujete, dobijate više poziva, poruka i zahteva za ponudu.",
          "Lokalni SEO podrazumeva dobro optimizovan sajt, ažuran Google profil i dosledne informacije o biznisu.",
          "Kombinacija profesionalnog web dizajna i SEO optimizacije daje najbolji efekat konverzije.",
          "Zato SEO treba posmatrati kao ulaganje koje gradi poverenje pre prvog kontakta.",
        ],
      },
      {
        heading: "Šta možete da očekujete",
        paragraphs: [
          "SEO nije instant rezultat, ali je jedan od najisplativijih kanala na duži rok.",
          "Prvi pomaci se često vide relativno brzo, dok stabilan rast dolazi kroz kontinuitet.",
          "Najvažnije je da imate jasan plan i sajt koji tehnički može da podrži rast pozicija.",
          "Kada SEO radite sistemski, dobijate bolji kvalitet saobraćaja i veći procenat upita.",
          "Ako želite sajt koji i izgleda premium i rankira dobro, SEO treba planirati od početka.",
        ],
        bullets: [
          "Jasna struktura sadržaja i ključnih tema",
          "Brz i mobilno optimizovan sajt",
          "Kontinuitet u objavi korisnog sadržaja",
          "Praćenje rezultata i redovna poboljšanja",
        ],
      },
    ],
  },
  {
    path: "/cena-izrade-sajta",
    question: "Koja je cena izrade jednog sajta?",
    title: "Koja je cena izrade jednog sajta?",
    heroImage: "/faq/cena.png",
    description:
      "Cena sajta zavisi od cilja, obima i funkcionalnosti. Pravi fokus je da sajt donosi konkretan poslovni rezultat.",
    sections: [
      {
        heading: "Od čega zavisi cena sajta",
        paragraphs: [
          "Cena izrade sajta zavisi od toga koliko je projekat složen i šta želite da postignete.",
          "Jednostavan prezentacioni sajt ima drugačiju cenu od sajta sa naprednim funkcijama i većim brojem stranica.",
          "U cenu ulaze dizajn, razvoj, sadržajna struktura, optimizacija i testiranje na različitim uređajima.",
          "Važna stavka je i kvalitet izvedbe, jer od njega zavise brzina, stabilnost i kasnije održavanje.",
          "Najskuplji sajt je onaj koji izgleda dobro, ali ne donosi upite i prodaju.",
        ],
      },
      {
        heading: "Kako da izaberete pravi budžet",
        paragraphs: [
          "Prvo definišite cilj: da li želite više upita, bolji imidž ili lakšu prezentaciju usluga.",
          "Zatim odredite obim: broj stranica, vrste sadržaja i dodatne funkcionalnosti.",
          "Ako planirate rast, bolje je odmah postaviti čvrstu osnovu nego kasnije raditi skupe prepravke.",
          "Kvalitetan web dizajn utiče direktno na poverenje i stopu konverzije.",
          "Dobro planiran budžet znači da dobijate sajt koji vraća uloženi novac.",
        ],
      },
      {
        heading: "Šta je uključeno u profesionalnu izradu",
        paragraphs: [
          "Profesionalna izrada sajtova uključuje mnogo više od lepog vizuelnog prikaza.",
          "Obuhvata UX logiku, jasan call-to-action, SEO osnovu i tehnički uredan kod.",
          "Sajt mora da radi brzo, da bude responzivan i da jasno vodi korisnika ka kontaktu.",
          "Dodatna vrednost je savetovanje oko sadržaja, ponude i strukture stranica.",
          "Cilj nije da dobijete samo fajl, već digitalni alat koji prodaje.",
        ],
      },
      {
        heading: "Kako do najbolje odluke",
        paragraphs: [
          "Pogledajte naše pakete i uporedite šta dobijate u svakoj opciji.",
          "Ako niste sigurni, javite nam se i predložićemo najefikasniji model za vaš biznis.",
          "Transparentna cena sajta i jasni rokovi su osnova ozbiljne saradnje.",
          "Kada unapred znate obim i podršku, izbegavate neplanirane troškove.",
          "Pravi izbor je paket koji rešava vaš trenutni problem i ostavlja prostor za rast.",
        ],
        bullets: [
          "Pogledajte opcije na stranici paketa",
          "Definišite prioritete pre početka izrade",
          "Planirajte i održavanje i SEO optimizaciju",
        ],
      },
    ],
  },
  {
    path: "/odrzavanje-sajta",
    question: "Koliko košta održavanje i šta je održavanje?",
    title: "Koliko košta održavanje i šta je održavanje?",
    heroImage: "/faq/odrzavanje.png",
    description:
      "Održavanje sajta obuhvata izmene, tehničke provere i podršku, kako bi vaš sajt ostao brz, bezbedan i ažuran.",
    sections: [
      {
        heading: "Šta podrazumeva održavanje sajta",
        paragraphs: [
          "Održavanje sajta znači kontinuiranu brigu o funkcionalnosti, sadržaju i stabilnosti.",
          "Bez održavanja, i najbolji sajt vremenom počinje da gubi performanse i relevantnost.",
          "U praksi, održavanje uključuje izmene teksta, slika, ponude i ključnih informacija.",
          "Takođe obuhvata redovne tehničke provere da sve radi bez greške na desktop i mobile uređajima.",
          "To je važan deo profesionalnog nastupa jer korisnik očekuje tačne i sveže informacije.",
        ],
      },
      {
        heading: "Koliko košta održavanje",
        paragraphs: [
          "Cena održavanja zavisi od paketa, obima promena i potrebnog nivoa podrške.",
          "Kod nas su uslovi jasno definisani da unapred znate šta je uključeno i koliko traje.",
          "Na taj način imate predvidive troškove i stabilan kvalitet usluge.",
          "Za dodatne zahteve van paketa postoji jasno definisana doplata po izmeni.",
          "Transparentnost u ceni održavanja je ključ za dugoročnu i efikasnu saradnju.",
        ],
      },
      {
        heading: "Zašto je održavanje važno za prodaju",
        paragraphs: [
          "Sajt koji nije ažuran ostavlja utisak neozbiljnosti i smanjuje broj upita.",
          "Ako cenovnik ili usluge nisu tačni, gubite poverenje pre nego što klijent kontaktira.",
          "Redovno održavanje pomaže da web dizajn ostane uredan i aktuelan.",
          "Stabilan i brz sajt direktno utiče na korisničko iskustvo i konverziju.",
          "Održavanje nije trošak bez povrata, već investicija u kontinuitet poslovanja.",
        ],
      },
      {
        heading: "Kako da izaberete pravi nivo podrške",
        paragraphs: [
          "Ako često menjate ponudu, potreban vam je paket sa većim brojem mesečnih izmena.",
          "Ako vam je važna vidljivost, birajte opciju koja uključuje i SEO optimizaciju.",
          "Najbolja odluka je ona koja prati tempo vašeg poslovanja, a ne samo početnu cenu.",
          "Kada imate pouzdan tim za održavanje, vi ste fokusirani na posao, a ne na tehničke detalje.",
          "Za konkretan predlog, javite nam se i uskladićemo plan sa vašim realnim potrebama.",
        ],
        bullets: [
          "Jasno definisan broj izmena",
          "Brza podrška kada je hitno",
          "Kontinuitet kvaliteta i performansi",
        ],
      },
    ],
  },
  {
    path: "/ai-chatbot",
    question: "Šta je AI chatbot?",
    title: "Šta je AI chatbot?",
    heroImage: "/faq/ai-chatbot.png",
    description:
      "AI chatbot je digitalni asistent na sajtu koji odgovara na pitanja, vodi korisnike i pomaže da dobijete više kvalitetnih upita.",
    sections: [
      {
        heading: "AI chatbot u modernom sajtu",
        paragraphs: [
          "AI chatbot je alat koji omogućava da komunikacija sa posetiocima bude brza i dostupna 24/7.",
          "Kada korisnik ima pitanje, chatbot može odmah da ga usmeri ka pravoj usluzi ili kontakt formi.",
          "To smanjuje broj izgubljenih potencijalnih klijenata, posebno van radnog vremena.",
          "Dobro podešen chatbot doprinosi profesionalnom utisku i boljem korisničkom iskustvu.",
          "U praksi, chatbot je produžena ruka prodaje na vašem sajtu.",
        ],
      },
      {
        heading: "Koje probleme rešava",
        paragraphs: [
          "Najčešće rešava ponavljajuća pitanja o cenama, uslugama i rokovima.",
          "Pomaže da korisnik ne luta kroz sajt, već da odmah dobije relevantnu informaciju.",
          "Može da prikupi osnovne podatke i pripremi kvalitetniji upit pre nego što vas kontaktira.",
          "Za timove koji imaju mnogo poruka, chatbot štedi vreme i ubrzava proces prodaje.",
          "Kada je dobro integrisan, radi tiho i efikasno, bez narušavanja premium dizajna.",
        ],
      },
      {
        heading: "Da li je AI chatbot obavezan",
        paragraphs: [
          "Nije obavezan za svaki biznis, ali je izuzetno koristan kada imate veliki broj upita.",
          "Za usluge gde klijent želi brze odgovore, chatbot često podiže stopu konverzije.",
          "Važno je da chatbot ne zvuči robotski, već prirodno i u skladu sa vašim brendom.",
          "Zato se pre puštanja radi strategija pitanja, odgovora i ton komunikacije.",
          "Najbolji rezultat daje kombinacija AI chatbota i jasne kontakt forme.",
        ],
      },
      {
        heading: "Kako uvodimo chatbot kod klijenata",
        paragraphs: [
          "Prvo definišemo cilj: da li chatbot služi za prodaju, podršku ili filtriranje upita.",
          "Zatim pripremamo sadržaj, scenario i ključne odgovore koji odgovaraju vašem biznisu.",
          "Nakon implementacije pratimo ponašanje korisnika i dodatno optimizujemo tok razgovora.",
          "Kada se chatbot uskladi sa dizajnom i ponudom, postaje prirodan deo sajta.",
          "Ako želite da uvedete AI chatbot, pogledajte pakete ili nas kontaktirajte za preporuku.",
        ],
        bullets: [
          "Brži odgovori korisnicima",
          "Manje izgubljenih lead-ova",
          "Bolja organizacija upita",
          "Profesionalan i moderan utisak",
        ],
      },
    ],
  },
  {
    path: "/google-ads-kampanja",
    question: "Šta je Google Ads kampanja?",
    title: "Šta je Google Ads kampanja?",
    heroImage: "/faq/google-ads.png",
    description:
      "Google Ads kampanja dovodi vas pred korisnike koji aktivno traže vaše usluge, a kvalitetan sajt pretvara te klikove u upite.",
    sections: [
      {
        heading: "Kako Google Ads funkcioniše",
        paragraphs: [
          "Google Ads je sistem plaćenog oglašavanja koji prikazuje vaše oglase u rezultatima pretrage.",
          "Prednost je što oglas vidi osoba koja već ima potrebu i traži konkretno rešenje.",
          "To znači da možete da dođete do klijenta u pravom trenutku, sa jasnom porukom.",
          "Kampanja se podešava prema budžetu, lokaciji, ključnim rečima i cilju poslovanja.",
          "Dobro vođen Google Ads može brzo doneti kvalitetne upite.",
        ],
      },
      {
        heading: "Zašto je landing stranica presudna",
        paragraphs: [
          "Klik na oglas je tek početak, jer rezultat zavisi od kvaliteta stranice na koju korisnik stiže.",
          "Ako je sajt spor ili nejasan, plaćate posetu bez konverzije.",
          "Zato web dizajn, brzina i struktura sadržaja moraju da podrže prodajni cilj kampanje.",
          "Kada su ponuda i poziv na akciju jasni, korisnik lakše ostavlja upit.",
          "Najveća greška je ulagati u oglase bez optimizovanog sajta.",
        ],
      },
      {
        heading: "Šta utiče na cenu i rezultate",
        paragraphs: [
          "Cena klika zavisi od konkurencije u niši, kvaliteta oglasa i kvaliteta odredišne stranice.",
          "Bolja relevantnost često donosi nižu cenu klika i bolje pozicije oglasa.",
          "Važno je redovno optimizovati kampanju na osnovu podataka, a ne pretpostavki.",
          "Kada znate koje ključne reči donose upite, budžet se koristi mnogo efikasnije.",
          "Google Ads daje najbolje rezultate kada ga vodite strateški i disciplinovano.",
        ],
      },
      {
        heading: "Kako povezujemo Ads i izradu sajtova",
        paragraphs: [
          "Kod nas kampanja ne ide odvojeno od sajta, jer obe stvari moraju da rade zajedno.",
          "Prvo gradimo jasnu strukturu ponude, zatim optimizujemo stranicu za konverziju.",
          "Tek tada pokrećemo ili unapređujemo Google Ads kako bi klik imao veću vrednost.",
          "Na taj način dobijate bolji odnos ulaganja i konkretne rezultate za biznis.",
          "Ako želite da krenete ozbiljno, pogledajte pakete ili nas kontaktirajte za plan kampanje.",
        ],
        bullets: [
          "Precizno targetiranje publike",
          "Merenje rezultata i optimizacija",
          "Bolja konverzija uz kvalitetan sajt",
        ],
      },
    ],
  },
  {
    path: "/izrada-sajta-rok",
    question: "Za koliko brzo mogu da dobijem gotov sajt?",
    title: "Za koliko brzo mogu da dobijem gotov sajt?",
    heroImage: "/faq/rok.png",
    description:
      "Rok izrade sajta zavisi od obima i pripreme sadržaja, ali uz jasan proces i brzu komunikaciju realizacija može biti vrlo efikasna.",
    sections: [
      {
        heading: "Šta određuje brzinu izrade",
        paragraphs: [
          "Brzina izrade sajta zavisi od složenosti projekta i dostupnosti materijala.",
          "Ako su tekstovi, slike i osnovne informacije spremni, proces ide znatno brže.",
          "Kod kompleksnijih projekata, više vremena ide na planiranje i testiranje detalja.",
          "Važan faktor je i brzina donošenja odluka tokom procesa dizajna.",
          "Najbolji rokovi se postižu kada su očekivanja i koraci jasno definisani od starta.",
        ],
      },
      {
        heading: "Realan vremenski okvir",
        paragraphs: [
          "Jednostavniji sajtovi mogu biti gotovi brzo kada je komunikacija efikasna.",
          "Napredniji sajtovi zahtevaju više iteracija, pa je i rok duži.",
          "Ipak, dobro organizovan tim može ubrzati realizaciju bez žrtvovanja kvaliteta.",
          "Fokus nije samo da sajt bude gotov, već da bude spreman za konverzije.",
          "Brz projekat ima smisla samo ako je tehnički i sadržajno odrađen kako treba.",
        ],
      },
      {
        heading: "Kako da ubrzate projekat",
        paragraphs: [
          "Pripremite unapred cenovnik, galeriju, opis usluga i osnovne informacije o biznisu.",
          "Odredite jednu kontakt osobu koja daje povratne informacije bez kašnjenja.",
          "Dogovorite prioritete: koje stranice i poruke su ključne za lansiranje.",
          "Kada su ulazni podaci jasni, izrada sajtova ide organizovano i bez zastoja.",
          "Najviše vremena se gubi na neodlučnost i nekompletan sadržaj.",
        ],
      },
      {
        heading: "Naš pristup rokovima",
        paragraphs: [
          "Od početka postavljamo faze rada i tačne tačke provere.",
          "Tako u svakom trenutku znate šta je završeno i šta je sledeći korak.",
          "Kombinujemo premium web dizajn, performanse i SEO optimizaciju u jednom procesu.",
          "Cilj je da dobijete sajt koji je spreman za upite odmah po lansiranju.",
          "Za procenu roka vašeg projekta pogledajte pakete ili nas kontaktirajte direktno.",
        ],
        bullets: [
          "Jasan plan i transparentni koraci",
          "Brza komunikacija i kontrola kvaliteta",
          "Lansiranje bez improvizacije",
        ],
      },
    ],
  },
];

