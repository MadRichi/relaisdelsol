export const locales = ["it", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

export const localeLabels: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
};

export const ogLocales: Record<Locale, string> = {
  it: "it_IT",
  en: "en_GB",
  de: "de_DE",
};

/** URL delle pagine per lingua. L'italiano resta sugli URL storici senza prefisso. */
export const routes = {
  home: { it: "/", en: "/en", de: "/de" },
  rooms: { it: "/camere", en: "/en/rooms", de: "/de/zimmer" },
  glamping: { it: "/agricamping", en: "/en/glamping", de: "/de/glamping" },
  experiences: { it: "/esperienze", en: "/en/experiences", de: "/de/erlebnisse" },
  about: { it: "/chi-siamo", en: "/en/about-us", de: "/de/ueber-uns" },
  contact: { it: "/contatti", en: "/en/contact", de: "/de/kontakt" },
  guide: { it: "/guida-lago-di-garda", en: "/en/lake-garda-guide", de: "/de/gardasee-reisefuehrer" },
  privacy: { it: "/privacy-policy", en: "/privacy-policy", de: "/privacy-policy" },
  cookie: { it: "/cookie-policy", en: "/cookie-policy", de: "/cookie-policy" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

/** Slug delle camere per lingua (chiave = slug italiano). */
export const roomSlugs: Record<string, Record<Locale, string>> = {
  "camera-economy": { it: "camera-economy", en: "economy-room", de: "economy-zimmer" },
  "camera-standard": { it: "camera-standard", en: "standard-rooms", de: "standardzimmer" },
  "camera-deluxe-balcone-vista-lago": {
    it: "camera-deluxe-balcone-vista-lago",
    en: "deluxe-room-lake-view-balcony",
    de: "deluxe-zimmer-seeblick-balkon",
  },
  "camera-superior-vista-lago": {
    it: "camera-superior-vista-lago",
    en: "superior-room-lake-view",
    de: "superior-zimmer-seeblick",
  },
  "family-junior-suite": {
    it: "family-junior-suite",
    en: "family-junior-suite",
    de: "familien-junior-suite",
  },
  "camera-veranda-privata": {
    it: "camera-veranda-privata",
    en: "room-private-veranda",
    de: "zimmer-private-veranda",
  },
  "family-suite-vista-lago": {
    it: "family-suite-vista-lago",
    en: "family-suite-lake-view",
    de: "familiensuite-seeblick",
  },
};

/** Slug degli articoli della guida per lingua (chiave = id articolo). */
export const guideSlugs: Record<string, Record<Locale, string>> = {
  "halloween-autunno-2026": {
    it: "halloween-autunno-lago-di-garda-weekend",
    en: "halloween-autumn-weekend-lake-garda",
    de: "halloween-herbst-wochenende-gardasee",
  },
};

export function guidePath(id: string, locale: Locale) {
  return `${routes.guide[locale]}/${guideSlugs[id][locale]}`;
}

export function roomPath(itSlug: string, locale: Locale) {
  return `${routes.rooms[locale]}/${roomSlugs[itSlug][locale]}`;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return first === "en" || first === "de" ? first : "it";
}

function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

/** Restituisce gli URL equivalenti della pagina corrente in tutte le lingue. */
export function alternatePaths(pathname: string): Record<Locale, string> {
  const path = normalize(pathname);
  for (const key of Object.keys(routes) as RouteKey[]) {
    const entry = routes[key];
    if (locales.some((l) => entry[l] === path)) return { ...entry };
  }
  for (const itSlug of Object.keys(roomSlugs)) {
    if (locales.some((l) => roomPath(itSlug, l) === path)) {
      return { it: roomPath(itSlug, "it"), en: roomPath(itSlug, "en"), de: roomPath(itSlug, "de") };
    }
  }
  for (const id of Object.keys(guideSlugs)) {
    if (locales.some((l) => guidePath(id, l) === path)) {
      return { it: guidePath(id, "it"), en: guidePath(id, "en"), de: guidePath(id, "de") };
    }
  }
  return { ...routes.home };
}
