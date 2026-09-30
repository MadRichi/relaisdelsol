import type { Room } from "../content/rooms";
import { BOOKING_URL, SITE_URL, contact } from "@/lib/site";

export function getLodgingBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/#lodging`,
    name: "Agriturismo Relais del Sol",
    url: SITE_URL,
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
