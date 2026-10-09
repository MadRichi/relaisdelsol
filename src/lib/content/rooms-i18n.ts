export interface RoomText {
  name: string;
  shortDescription: string;
  longDescription: string;
  badge?: string;
  size?: string;
  guests: string;
  beds: string;
  floor?: string;
  notes?: string[];
  features: string[];
  amenities: string[];
}

const baseEn = ["Air conditioning", "WiFi", "Private bathroom with shower", "Hairdryer", "TV", "Safe", "Telephone"];
const baseDe = ["Klimaanlage", "WLAN", "Eigenes Bad mit Dusche", "Haartrockner", "TV", "Safe", "Telefon"];
const noLiftEn = ["Please note: there is no lift in the building."];
const noLiftDe = ["Bitte beachten: Das Gebäude hat keinen Aufzug."];

/** Testi delle camere in inglese e tedesco, per slug italiano. */
export const roomTranslations: Record<string, { en: RoomText; de: RoomText }> = {
  "camera-economy": {
    en: {
      name: "Economy Room",
      shortDescription:
        "The essential choice for those who spend their holiday outdoors: a cosy, well-kept room to come back to after a day at the lake.",
      longDescription:
        "The Economy Room is designed for guests who spend their days between the lake, the villages and the pool and are looking for a simple, clean and quiet retreat for the night. Provençal-style furnishings, light fabrics and the peace of the Garda countryside make the stay pleasant even in the most essential option, with all the facilities of the Relais at your disposal.",
      badge: "Essential",
      guests: "2 guests",
      beds: "Double bed",
      features: ["Provençal style and natural materials", "Essential option at the best price", "Access to pool and park"],
      amenities: baseEn,
    },
    de: {
      name: "Economy-Zimmer",
      shortDescription:
        "Die einfache Wahl für alle, die den Urlaub draußen verbringen: ein gemütliches, gepflegtes Zimmer für die Rückkehr nach einem Tag am See.",
      longDescription:
        "Das Economy-Zimmer ist für Gäste gedacht, die ihre Tage zwischen See, Dörfern und Pool verbringen und für die Nacht einen einfachen, sauberen und ruhigen Rückzugsort suchen. Provenzalische Einrichtung, helle Stoffe und die Ruhe der Landschaft am Gardasee machen den Aufenthalt auch in der einfachsten Variante angenehm – mit allen Annehmlichkeiten des Relais.",
      badge: "Einfach",
      guests: "2 Gäste",
      beds: "Doppelbett",
      features: ["Provenzalischer Stil und natürliche Materialien", "Einfache Variante zum besten Preis", "Zugang zu Pool und Park"],
      amenities: baseDe,
    },
  },
  "camera-standard": {
    en: {
      name: "Standard Rooms",
      shortDescription:
        "Close the door, slow down and let the silence of the countryside accompany your evening.",
      longDescription:
        "You wake up to soft light coming through the pale curtains and touching the shabby-chic furniture. After breakfast on the veranda you come back to a room where every detail is simple and authentic: light fabrics, fresh scents, real peace. Each Standard room has its own character and name, but they all share the same romantic, relaxed atmosphere.",
      badge: "Romantic",
      guests: "2 guests",
      beds: "Double bed",
      features: ["Provençal, country-romantic atmosphere", "Each room furnished differently", "Ideal for a romantic getaway"],
      amenities: baseEn,
    },
    de: {
      name: "Standardzimmer",
      shortDescription:
        "Tür zu, durchatmen und die Stille des Landes den Abend begleiten lassen.",
      longDescription:
        "Sie wachen mit sanftem Licht auf, das durch die hellen Vorhänge fällt und die Shabby-Chic-Möbel streift. Nach dem Frühstück auf der Veranda kehren Sie in ein Zimmer zurück, in dem jedes Detail schlicht und authentisch ist: leichte Stoffe, frische Düfte, echte Ruhe. Jedes Standardzimmer hat seinen eigenen Charakter und Namen, alle teilen dieselbe romantische, entspannte Atmosphäre.",
      badge: "Romantisch",
      guests: "2 Gäste",
      beds: "Doppelbett",
      features: ["Provenzalisch-romantische Atmosphäre", "Jedes Zimmer individuell eingerichtet", "Ideal für eine Auszeit zu zweit"],
      amenities: baseDe,
    },
  },
  "camera-deluxe-balcone-vista-lago": {
    en: {
      name: "Deluxe Rooms with Lake View Balcony",
      shortDescription:
        "Open the French window, step onto the balcony and Lake Garda lies before you, calm and bright.",
      longDescription:
        "Here the lake becomes part of your day from the very first moment. You wake up, step out onto your private balcony and the fresh air brings the scent of the gardens and the water. At sunset you linger a few minutes longer as the sky changes colour above the shore. The Deluxe rooms are on the first floor and combine period furniture, wooden ceilings and a view over Lake Garda that makes every moment special.",
      badge: "Lake View",
      size: "18 m²",
      guests: "2 guests + 1 extra bed",
      beds: "Double bed",
      floor: "First floor",
      notes: noLiftEn,
      features: ["Private balcony overlooking Lake Garda", "Wooden ceilings and period furniture", "Perfect for romantic stays"],
      amenities: [...baseEn, "Lake view balcony"],
    },
    de: {
      name: "Deluxe-Zimmer mit Seeblick-Balkon",
      shortDescription:
        "Die Balkontür öffnen, hinaustreten – und vor Ihnen liegt der Gardasee, ruhig und hell.",
      longDescription:
        "Hier wird der See vom ersten Moment an Teil Ihres Tages. Sie wachen auf, treten auf Ihren privaten Balkon, und die frische Luft bringt den Duft der Gärten und des Wassers mit sich. Bei Sonnenuntergang bleiben Sie ein paar Minuten länger, während sich der Himmel über dem Ufer verfärbt. Die Deluxe-Zimmer liegen im ersten Stock und verbinden Stilmöbel, Holzdecken und einen Blick auf den Gardasee, der jeden Moment besonders macht.",
      badge: "Seeblick",
      size: "18 m²",
      guests: "2 Gäste + 1 Zusatzbett",
      beds: "Doppelbett",
      floor: "Erster Stock",
      notes: noLiftDe,
      features: ["Privater Balkon mit Blick auf den Gardasee", "Holzdecken und Stilmöbel", "Perfekt für romantische Aufenthalte"],
      amenities: [...baseDe, "Balkon mit Seeblick"],
    },
  },
  "camera-superior-vista-lago": {
    en: {
      name: "Superior Room with Lake View",
      shortDescription:
        "A bright double room on the first floor with a small balcony overlooking the lake for your morning coffee.",
      longDescription:
        "The Superior Room is the right choice for those who want peace and an open view over Lake Garda. On the first floor, away from the bustle, it offers a double bed, light furnishings and a small balcony from which to watch the lake change colour throughout the day. A small luxury that transforms every morning.",
      badge: "Lake View",
      guests: "2 guests + 1 extra bed",
      beds: "Double bed",
      floor: "First floor",
      notes: noLiftEn,
      features: ["Small balcony overlooking the lake", "Quiet position on the first floor", "Ideal for couples"],
      amenities: [...baseEn, "Small lake view balcony"],
    },
    de: {
      name: "Superior-Zimmer mit Seeblick",
      shortDescription:
        "Ein helles Doppelzimmer im ersten Stock mit kleinem Balkon zum See – für den Kaffee am Morgen.",
      longDescription:
        "Das Superior-Zimmer ist die richtige Wahl für alle, die Ruhe und einen offenen Blick auf den Gardasee suchen. Im ersten Stock, abseits vom Trubel, bietet es ein Doppelbett, helle Einrichtung und einen kleinen Balkon, von dem aus Sie den See im Laufe des Tages seine Farbe wechseln sehen. Ein kleiner Luxus, der jeden Morgen verwandelt.",
      badge: "Seeblick",
      guests: "2 Gäste + 1 Zusatzbett",
      beds: "Doppelbett",
      floor: "Erster Stock",
      notes: noLiftDe,
      features: ["Kleiner Balkon mit Blick auf den See", "Ruhige Lage im ersten Stock", "Ideal für Paare"],
      amenities: [...baseDe, "Kleiner Balkon mit Seeblick"],
    },
  },
  "family-junior-suite": {
    en: {
      name: "Family Junior Suite",
      shortDescription:
        "Space for the whole family on the ground floor: a double bed, single beds and an atmosphere that instantly feels like home.",
      longDescription:
        "The Family Junior Suites are designed for families who want to be comfortable without giving up elegance. They are on the ground floor, a few steps from the park and the pool, and offer a double bed and one or two single beds, with the option of an extra bed. Spacious, bright rooms, shabby-chic furnishings and all the space you need for a relaxed holiday with children, 2 km from Gardaland.",
      badge: "Families",
      size: "Up to 35 m²",
      guests: "Up to 4 guests",
      beds: "1 double + 1 or 2 single beds",
      floor: "Ground floor",
      features: ["Ground floor, close to park and pool", "Double bed and single beds", "Extra bed available"],
      amenities: [...baseEn, "Minibar"],
    },
    de: {
      name: "Familien-Junior-Suite",
      shortDescription:
        "Platz für die ganze Familie im Erdgeschoss: Doppelbett, Einzelbetten und eine Atmosphäre, in der man sich sofort zu Hause fühlt.",
      longDescription:
        "Die Familien-Junior-Suiten sind für Familien gedacht, die bequem wohnen möchten, ohne auf Eleganz zu verzichten. Sie liegen im Erdgeschoss, wenige Schritte von Park und Pool entfernt, und bieten ein Doppelbett sowie ein oder zwei Einzelbetten, auf Wunsch mit Zusatzbett. Großzügige, helle Räume, Shabby-Chic-Einrichtung und all der Platz, den Sie für einen entspannten Urlaub mit Kindern brauchen – 2 km von Gardaland.",
      badge: "Familien",
      size: "Bis zu 35 m²",
      guests: "Bis zu 4 Gäste",
      beds: "1 Doppelbett + 1 oder 2 Einzelbetten",
      floor: "Erdgeschoss",
      features: ["Erdgeschoss, nah an Park und Pool", "Doppelbett und Einzelbetten", "Zusatzbett möglich"],
      amenities: [...baseDe, "Minibar"],
    },
  },
  "camera-veranda-privata": {
    en: {
      name: "Rooms with Private Veranda",
      shortDescription:
        "On the ground floor, with a veranda all to yourself: a slow breakfast outdoors, a break in the shade, the park just steps away.",
      longDescription:
        "These rooms open onto a furnished private veranda, a real outdoor living room where you can read, rest after the pool or enjoy the evening scents of the countryside. Inside you will find modern, bright rooms with a fridge, a double bed and, in the triple version, an additional single bed. The right choice when you want comfort, privacy and some outdoor space of your own.",
      badge: "Private Veranda",
      size: "25 m²",
      guests: "2 to 3 guests + 1 extra bed",
      beds: "Double or double + single",
      floor: "Ground floor",
      features: ["Furnished private veranda", "Ground floor with direct access to the park", "Fridge in the room"],
      amenities: [...baseEn, "Fridge", "Private veranda"],
    },
    de: {
      name: "Zimmer mit privater Veranda",
      shortDescription:
        "Im Erdgeschoss, mit eigener Veranda: ein gemütliches Frühstück im Freien, eine Pause im Schatten, der Park direkt nebenan.",
      longDescription:
        "Diese Zimmer öffnen sich auf eine möblierte private Veranda, ein echtes Wohnzimmer im Freien zum Lesen, zum Ausruhen nach dem Pool oder um den Abend mit dem Duft des Landes zu genießen. Innen erwarten Sie moderne, helle Räume mit Kühlschrank, Doppelbett und in der Dreibettvariante einem zusätzlichen Einzelbett. Die richtige Wahl, wenn Sie Komfort, Privatsphäre und ein Stück eigenen Außenbereich suchen.",
      badge: "Private Veranda",
      size: "25 m²",
      guests: "2 bis 3 Gäste + 1 Zusatzbett",
      beds: "Doppelbett oder Doppel- + Einzelbett",
      floor: "Erdgeschoss",
      features: ["Möblierte private Veranda", "Erdgeschoss mit direktem Zugang zum Park", "Kühlschrank im Zimmer"],
      amenities: [...baseDe, "Kühlschrank", "Private Veranda"],
    },
  },
  "family-suite-vista-lago": {
    en: {
      name: "Interconnecting Family Suite with Lake View Balcony",
      shortDescription:
        "Two interconnecting rooms, two bathrooms and a balcony over the lake: the space of a home, the atmosphere of the Relais.",
      longDescription:
        "The Family Suite consists of two interconnecting rooms, each with a double bed and private bathroom, joined by a balcony overlooking Lake Garda. It is the ideal solution for families or two couples who want to stay together while keeping their privacy. Canopy beds, romantic furnishings and the view over the lake make the stay truly special.",
      badge: "Lake View",
      size: "35 m²",
      guests: "4 guests",
      beds: "2 double beds",
      floor: "First floor",
      notes: noLiftEn,
      features: ["Two interconnecting rooms and two bathrooms", "Balcony with lake view", "Ideal for families or two couples"],
      amenities: [...baseEn, "Two bathrooms", "Lake view balcony"],
    },
    de: {
      name: "Familiensuite mit Verbindungstür und Seeblick-Balkon",
      shortDescription:
        "Zwei verbundene Zimmer, zwei Bäder und ein Balkon zum See: der Platz eines Zuhauses, die Atmosphäre des Relais.",
      longDescription:
        "Die Familiensuite besteht aus zwei miteinander verbundenen Zimmern, jeweils mit Doppelbett und eigenem Bad, die ein Balkon mit Blick auf den Gardasee verbindet. Die ideale Lösung für Familien oder zwei Paare, die zusammen sein und doch ihre Privatsphäre behalten möchten. Himmelbetten, romantische Einrichtung und der Blick auf den See machen den Aufenthalt zu etwas Besonderem.",
      badge: "Seeblick",
      size: "35 m²",
      guests: "4 Gäste",
      beds: "2 Doppelbetten",
      floor: "Erster Stock",
      notes: noLiftDe,
      features: ["Zwei verbundene Zimmer und zwei Bäder", "Balkon mit Seeblick", "Ideal für Familien oder zwei Paare"],
      amenities: [...baseDe, "Zwei Bäder", "Balkon mit Seeblick"],
    },
  },
};
