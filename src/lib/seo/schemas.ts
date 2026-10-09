import type { Room } from "../content/rooms";
import { BOOKING_URL, SITE_URL, contact } from "@/lib/site";

export function getLodgingBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/#lodging`,
    name: "Agriturismo Relais del Sol",
    alternateName: ["Relais del Sol", "Agriturismo Ca' del Sol", "Ca' del Sol"],
    description:
      "Agriturismo a Pacengo di Lazise sul Lago di Garda con camere in stile shabby chic, family suite, mobilhome, piscina a sfioro e 13 ettari di parco tra vigneti e uliveti.",
    url: SITE_URL,
    hasMap: "https://maps.google.com/?cid=18359131154127912003",
    image: `${SITE_URL}/images/og-default.jpg`,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.geo.latitude,
      longitude: contact.geo.longitude,
    },
    telephone: contact.phoneHref.replace("tel:", ""),
    priceRange: "€€",
    petsAllowed: true,
    amenityFeature: ["Piscina", "Colazione", "WiFi", "Parcheggio", "Vista lago"].map(
      (name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      }),
    ),
    sameAs: [
      "https://www.instagram.com/relaisdelsol",
      "https://www.facebook.com/RelaisdelSol",
    ],
  };
}

export function getRoomSchema(room: Room) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": `${SITE_URL}/camere/${room.slug}#hotel-room`,
    name: room.name,
    description: room.longDescription,
    url: `${SITE_URL}/camere/${room.slug}`,
    image: room.images.map((image) => `${SITE_URL}${image.src}`),
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.maxGuests,
      unitCode: "C62",
    },
    bed: room.beds,
    amenityFeature: room.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    containedInPlace: {
      "@id": `${SITE_URL}/#lodging`,
    },
    offers: {
      "@type": "Offer",
      availability: room.available
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
      priceCurrency: "EUR",
      ...(room.priceFrom ? { price: room.priceFrom } : {}),
      url: BOOKING_URL,
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Relais del Sol",
    alternateName: ["Agriturismo Relais del Sol", "Agriturismo Ca' del Sol"],
    url: SITE_URL,
    inLanguage: "it-IT",
    publisher: { "@id": `${SITE_URL}/#lodging` },
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
