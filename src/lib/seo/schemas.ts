import type { Room } from "../content/rooms";

const SITE_URL = "https://www.cadelsol.com";

export function getLodgingBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Agriturismo Relais del Sol",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Loc. Casa Antonia, 1",
      addressLocality: "Pacengo di Lazise",
      addressRegion: "VR",
      postalCode: "37017",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5083,
      longitude: 10.7378,
    },
    telephone: "+390456490008",
    priceRange: "€€",
    amenityFeature: ["Pool", "Breakfast", "WiFi", "Dog Friendly", "Lake View"],
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
      value: room.maxGuests,
      unitCode: "C62",
    },
    bed: room.features,
    amenityFeature: room.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    petsAllowed: room.amenities.some((amenity) =>
      amenity.toLowerCase().includes("dog"),
    ),
    containedInPlace: {
      "@type": "LodgingBusiness",
      name: "Agriturismo Relais del Sol",
      url: SITE_URL,
    },
    offers: room.available
      ? {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          ...(room.priceFrom ? { price: room.priceFrom } : {}),
          url: "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR",
        }
      : {
          "@type": "Offer",
          availability: "https://schema.org/SoldOut",
          priceCurrency: "EUR",
          url: "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR",
        },
  };
}
