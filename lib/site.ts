export const SITE = {
  name: "DOVEB",
  shortName: "DOVEB",
  domain: "doveb.rs",
  url: "https://doveb.rs",
  email: "doveb.info@gmail.com",
  instagram: "https://www.instagram.com/damjannv/",
  phone: {
    label: "+381 62 613 971",
    value: "+38162613971",
  },
  contacts: [
    {
      name: "Damjan Veselinović",
      phoneLabel: "+381 65 306 5306",
      phoneValue: "+381653065306",
      avatarLetter: "D",
    },
    {
      name: "Vojislav Budurić",
      phoneLabel: "+381 62 613 971",
      phoneValue: "+38162613971",
      avatarLetter: "V",
    },
  ],
};

export type NavItem = { href: string; label: string };

export const NAV: NavItem[] = [
  { href: "/", label: "Početna" },
  { href: "/paketi", label: "Paketi" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/zakazivanje", label: "Zakazivanje" },
];

export const BRANDING = {
  navbarLogo: "/branding/foxlogo.png",
  heroLogo: "/branding/foxlogo.png",
};

