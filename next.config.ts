import type { NextConfig } from "next";

const SITE_URL = "https://relaisdelsol.it";

type Lang = "it" | "en" | "de";

/** Pagine di destinazione per lingua. */
const targets: Record<string, Record<Lang, string>> = {
  home: { it: "/", en: "/en", de: "/de" },
  rooms: { it: "/camere", en: "/en/rooms", de: "/de/zimmer" },
  glamping: { it: "/agricamping", en: "/en/glamping", de: "/de/glamping" },
  experiences: { it: "/esperienze", en: "/en/experiences", de: "/de/erlebnisse" },
  about: { it: "/chi-siamo", en: "/en/about-us", de: "/de/ueber-uns" },
  contact: { it: "/contatti", en: "/en/contact", de: "/de/kontakt" },
  products: { it: "/prodotti", en: "/prodotti", de: "/prodotti" },
  privacy: { it: "/privacy-policy", en: "/privacy-policy", de: "/privacy-policy" },
};

/**
 * Vecchie URL del sito cadelsol.com (WordPress 2019-2021 e versioni .asp/.htm precedenti),
 * per sezione. Gli slug sono in IT/EN/DE: la lingua del vecchio URL decide la destinazione.
 */
const legacySlugs: Record<keyof typeof targets, string[]> = {
  home: ["fondo-europeo-agricolo", "unternehmensdaten", "company-info", "dati-societari"],
  rooms: [
    "camere", "rooms", "zimmer", "agriturismo", "offerte", "offers", "angebote",
    "prezzi", "prezzi-e-offerte", "listino-prezzi", "preise", "preise-und-angebote",
  ],
  glamping: ["agricamping", "agriglamping"],
  experiences: [
    "colazione", "breakfast", "il-nostro-parco", "our-park", "park-und-schwimmbad",
    "parco-e-piscina", "eventi", "eventi-privati", "private-events", "events",
    "lazise-e-dintorni", "lazise-and-surroundings", "lazise-und-umgebung",
    "parchi-divertimento", "freizeitparks", "gourmet", "gourmet-2",
  ],
  about: [
    "chi-siamo", "who-we-are", "wer-wir-sind", "uber-uns", "dog-friendly",
    "photogallery", "fotogalerie", "gallery", "virtual-tour", "social-wall",
  ],
  contact: [
    "contatti", "contacts", "kontakte", "dove-siamo", "location", "unsere-lage",
    "wo-sind-wier", "Contact",
  ],
  products: ["prodotti", "products", "produkte"],
  privacy: ["privacy-policy"],
};

const legacyFiles: Record<string, string[]> = {
  rooms: ["camere.asp", "prezzi.asp", "lastminute.asp", "booking.asp", "Prezzi.htm"],
  experiences: ["eventi.asp", "servizi.asp", "Servizi.htm"],
  contact: ["dovesiamo.asp", "Dovesiamo.htm"],
  about: ["Photogallery.htm"],
};

const cmsPrefix: Record<Lang, string> = { it: "1|IT/1", en: "EN/1", de: "DE/1" };

function legacyRedirects() {
  const rules: { source: string; destination: string; permanent: true }[] = [];
  const langs: Lang[] = ["it", "en", "de"];

  // Le vecchie pagine WordPress terminavano con /index.html
  rules.push({ source: "/:path*/index.html", destination: "/:path*", permanent: true });

  for (const lang of langs) {
    for (const [section, slugs] of Object.entries(legacySlugs)) {
      const destination = targets[section][lang];
      const group = slugs.join("|");
      // Esclude gli slug che coincidono già con la nuova pagina (es. /en/rooms, /de/zimmer)
      const pathGroup = slugs.filter((slug) => `/${lang}/${slug}` !== destination).join("|");
      // /it/camere/, /en/our-park/, /de/kontakte/...
      if (pathGroup) {
        rules.push({ source: `/${lang}/:slug(${pathGroup})/:rest*`, destination, permanent: true });
      }
      // vecchio CMS: /1/3676/agriturismo/camere.htm, /DE/1/3355/agriturismo/zimmer.htm
      rules.push({
        source: `/:prefix(${cmsPrefix[lang]})/:id/:path*/:slug(${group}).htm`,
        destination,
        permanent: true,
      });
      rules.push({
        source: `/:prefix(${cmsPrefix[lang]})/:id/:slug(${group}).htm`,
        destination,
        permanent: true,
      });
    }

    for (const [section, files] of Object.entries(legacyFiles)) {
      for (const file of files) {
        const source = lang === "it" ? `/:lang(it)?/${file}` : `/${lang}/${file}`;
        rules.push({ source, destination: targets[section][lang], permanent: true });
      }
    }

    rules.push({ source: `/:prefix(${cmsPrefix[lang]})/:rest*`, destination: targets.home[lang], permanent: true });
  }

  // Sezione italiana del vecchio sito: tutto il resto va in home
  rules.push({ source: "/it", destination: "/", permanent: true });
  rules.push({ source: "/it/:rest*", destination: "/", permanent: true });
  rules.push({ source: "/:file(default|home|Default|Default1).:ext(asp|htm)", destination: "/", permanent: true });

  return rules;
}

/** Pagine e immagini pubblicate su relaisdelsol.it fino a settembre 2026 e poi rinominate. */
const renamedPages = [
  ["/coming-soon", "/"],
  ["/coming-soon.html", "/"],
  ["/camere/camera-balcone-vista-lago", "/camere/camera-deluxe-balcone-vista-lago"],
  ["/camere/camera-angolo-cottura-veranda", "/camere/camera-veranda-privata"],
  ["/images/rooms/standard-1.jpg", "/images/rooms/family-junior-suite/01.jpg"],
  ["/images/rooms/standard-2.jpg", "/images/rooms/family-junior-suite/05.jpg"],
  ["/images/rooms/vista-lago-1.jpg", "/images/rooms/camera-deluxe-balcone-vista-lago/04.jpg"],
  ["/images/rooms/vista-lago-2.jpg", "/images/rooms/camera-deluxe-balcone-vista-lago/01.jpg"],
  ["/images/rooms/cucina-veranda-1.jpg", "/images/rooms/camera-veranda-privata/02.jpg"],
  ["/images/rooms/cucina-veranda-2.jpg", "/images/rooms/camera-veranda-privata/06.jpg"],
  ["/images/family.jpg", "/images/chi-siamo-hero.jpg"],
  ["/images/services/eventi.jpg", "/images/services/eventi-2.jpg"],
  ["/images/services/parchi.jpg", "/images/services/parco.jpg"],
  ["/videos/agriturismorelaisdelsolpacengo.mp4", "/videos/hero-desktop.mp4"],
  ["/videos/hero.webm", "/videos/hero-desktop.mp4"],
].map(([source, destination]) => ({ source, destination, permanent: true as const }));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const cache = [
      { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
    ];
    return [
      { source: "/images/:path*", headers: cache },
      { source: "/videos/:path*", headers: cache },
    ];
  },
  async redirects() {
    return [
      // Vecchio dominio: attivo quando cadelsol.com punta a questo sito
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?cadelsol\\.(com|it)" }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      ...renamedPages,
      ...legacyRedirects(),
    ];
  },
};

export default nextConfig;
