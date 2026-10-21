export const SITE_URL = "https://relaisdelsol.it";

/** Booking engine ufficiale (Slope). Unico punto da aggiornare per tutti i CTA. */
export const BOOKING_URL =
  "https://booking.slope.it/c4d4baae-788b-485d-969b-b39bb792ae06";

/** Props per i link al booking engine: si apre in una nuova scheda. */
export const bookingLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const contact = {
  phoneDisplay: "+39 045 1117 7408",
  phoneHref: "tel:+3904511177408",
  whatsappDisplay: "+39 348 070 2953",
  whatsappHref: "https://wa.me/393480702953",
  email: "info@relaisdelsol.it",
  address: {
    street: "Loc. Casa Antonia, 1",
    postalCode: "37017",
    locality: "Pacengo di Lazise",
    region: "VR",
  },
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Loc.+Casa+Antonia+1+Pacengo+di+Lazise",
  geo: { latitude: 45.4715, longitude: 10.7216 },
} as const;

/** Mappa Google incorporata (luogo "Relais del Sol"), nella lingua richiesta. */
export function mapEmbedSrc(language: "it" | "en" | "de") {
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d669.1668086373817!2d10.721606350999053!3d45.4714915715088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e94ba76f9b2f%3A0xfec8bc838a99fc43!2sCa'%20del%20Sol!5e1!3m2!1s${language}!2s${language}!4v1776344145649!5m2!1s${language}!2s${language}`;
}

/** Google Analytics 4 (proprietà "relaisdelsol.it"). */
export const GA_MEASUREMENT_ID = "G-EFT3K5GY8Y";

/** Google Tag Manager: contenitore per i tag futuri (Ads, Meta…). GA4 NON va aggiunto qui: è già installato direttamente. */
export const GTM_ID = "GTM-56PD9826";
