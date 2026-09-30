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
