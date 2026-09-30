import type { NextConfig } from "next";

const SITE_URL = "https://relaisdelsol.it";

/**
 * Vecchie URL del sito cadelsol.com (WordPress 2019-2021 e versioni .asp/.htm precedenti)
 * mappate sulle nuove pagine. Le chiavi sono slug in IT/EN/DE.
 */
const legacySlugs: Record<string, string[]> = {
  "/camere": [
    "camere", "rooms", "zimmer", "agriturismo", "offerte", "offers", "angebote",
    "prezzi", "prezzi-e-offerte", "listino-prezzi", "preise", "preise-und-angebote",
  ],
  "/agricamping": ["agricamping", "agriglamping"],
  "/esperienze": [
    "colazione", "breakfast", "il-nostro-parco", "our-park", "park-und-schwimmbad",
    "parco-e-piscina", "eventi", "eventi-privati", "private-events", "events",
    "lazise-e-dintorni", "lazise-and-surroundings", "lazise-und-umgebung",
    "parchi-divertimento", "freizeitparks", "gourmet", "gourmet-2",
  ],
  "/chi-siamo": [
    "chi-siamo", "who-we-are", "wer-wir-sind", "uber-uns", "dog-friendly",
    "photogallery", "fotogalerie", "gallery", "virtual-tour", "social-wall",
  ],
  "/contatti": [
    "contatti", "contacts", "kontakte", "dove-siamo", "location", "unsere-lage",
    "wo-sind-wier", "Contact",
  ],
  "/prodotti": ["prodotti", "products", "produkte"],
  "/privacy-policy": ["privacy-policy"],
};

const legacyFiles: Record<string, string[]> = {
  "/camere": ["camere.asp", "prezzi.asp", "lastminute.asp", "booking.asp", "Prezzi.htm"],
  "/esperienze": ["eventi.asp", "servizi.asp", "Servizi.htm"],
  "/contatti": ["dovesiamo.asp", "Dovesiamo.htm"],
  "/chi-siamo": ["Photogallery.htm"],
};

function legacyRedirects() {
  const rules: { source: string; destination: string; permanent: true }[] = [];

  for (const [destination, slugs] of Object.entries(legacySlugs)) {
    const group = slugs.join("|");
    // /it/camere/, /en/rooms/index.html, /de/zimmer/...
    rules.push({ source: `/:lang(it|en|de)/:slug(${group})/:rest*`, destination, permanent: true });
    // vecchio CMS: /1/3676/agriturismo/camere.htm, /DE/1/3355/agriturismo/zimmer.htm
    rules.push({
      source: `/:prefix(1|IT/1|EN/1|DE/1)/:id/:path*/:slug(${group}).htm`,
      destination,
      permanent: true,
    });
    rules.push({
      source: `/:prefix(1|IT/1|EN/1|DE/1)/:id/:slug(${group}).htm`,
      destination,
      permanent: true,
    });
  }

  for (const [destination, files] of Object.entries(legacyFiles)) {
    for (const file of files) {
      rules.push({ source: `/${file}`, destination, permanent: true });
      rules.push({ source: `/:lang(it|en|de)/${file}`, destination, permanent: true });
    }
  }

  // Tutto il resto delle vecchie sezioni in lingua va in home
  rules.push({ source: "/:lang(it|en|de)", destination: "/", permanent: true });
  rules.push({ source: "/:lang(it|en|de)/:rest*", destination: "/", permanent: true });
  rules.push({ source: "/:prefix(1|IT/1|EN/1|DE/1)/:rest*", destination: "/", permanent: true });
  rules.push({ source: "/:file(default|home|Default|Default1).:ext(asp|htm)", destination: "/", permanent: true });

  return rules;
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Vecchio dominio: attivo quando cadelsol.com punta a questo sito
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?cadelsol\\.(com|it)" }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      ...legacyRedirects(),
    ];
  },
};

export default nextConfig;
