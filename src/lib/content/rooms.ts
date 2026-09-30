export interface RoomImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Room {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  navbarTheme?: "light" | "dark";
  badge?: string;
  /** Mostrata nell'anteprima in home page. */
  featured?: boolean;
  /** Dati sintetici mostrati in card e scheda camera. */
  size?: string;
  guests: string;
  beds: string;
  floor?: string;
  /** Nomi delle unità corrispondenti nel booking engine Slope. */
  bookingUnits?: string[];
  notes?: string[];
  features: string[];
  amenities: string[];
  images: RoomImage[];
  priceFrom?: number;
  maxGuests: number;
  available: boolean;
}

export function getRoomFacts(room: Room): string[] {
  return [room.size, room.guests].filter((fact): fact is string => Boolean(fact));
}

const baseAmenities = [
  "Aria condizionata",
  "WiFi",
  "Bagno privato con doccia",
  "Asciugacapelli",
  "TV",
  "Cassaforte",
  "Telefono",
];

function img(
  slug: string,
  file: string,
  alt: string,
  width = 2000,
  height = 1333,
): RoomImage {
  return { src: `/images/rooms/${slug}/${file}`, alt, width, height };
}

export const rooms: Room[] = [
  {
    slug: "camera-economy",
    name: "Camera Economy",
    shortDescription:
      "La scelta essenziale per chi vive la vacanza fuori: una camera raccolta e curata dove tornare a riposare dopo il lago.",
    longDescription:
      "La Camera Economy è pensata per chi passa le giornate tra il lago, i borghi e la piscina e cerca un rifugio semplice, pulito e silenzioso per la notte. Gli arredi in stile provenzale, i tessuti chiari e la quiete della campagna gardesana rendono il soggiorno piacevole anche nella formula più essenziale, con tutti i servizi del Relais a disposizione.",
    badge: "Essenziale",
    guests: "2 ospiti",
    beds: "Letto matrimoniale",
    features: [
      "Stile provenzale e materiali naturali",
      "Formula essenziale al miglior prezzo",
      "Accesso a piscina e parco",
    ],
    amenities: baseAmenities,
    images: [
      img("camera-economy", "01.jpg", "Camera Economy con letto matrimoniale e poltrona in stile"),
      img("camera-economy", "02.jpg", "Bagno privato della Camera Economy"),
    ],
    maxGuests: 2,
    available: true,
  },
  {
    slug: "camera-standard",
    name: "Camere Standard",
    shortDescription:
      "Chiudi la porta, rallenti il respiro e lasci che il silenzio della campagna accompagni la tua sera.",
    longDescription:
      "Ti svegli con una luce morbida che entra dalle tende chiare e accarezza gli arredi shabby chic della stanza. Dopo la colazione in veranda rientri in un ambiente curato, dove ogni dettaglio resta semplice e autentico: tessuti leggeri, profumi puliti, quiete vera. Ogni camera Standard ha un suo carattere e un suo nome, ma tutte condividono la stessa atmosfera romantica e rilassata.",
    badge: "Romantica",
    guests: "2 ospiti",
    beds: "Letto matrimoniale",
    features: [
      "Atmosfera provenzale e country-romantica",
      "Ogni camera arredata in modo diverso",
      "Ideale per una fuga di coppia",
    ],
    amenities: baseAmenities,
    images: [
      img("camera-standard", "01.jpg", "Camera Standard con letto matrimoniale e angolo lettura"),
      img("camera-standard", "02.jpg", "Camera Standard con lampadario in cristallo e specchio dorato"),
      img("camera-standard", "03.jpg", "Camera Standard con tende in velluto e armadio in legno"),
      img("camera-standard", "04.jpg", "Camera Standard con salottino e tavolino"),
      img("camera-standard", "05.jpg", "Dettaglio dell'armadio decorato in una Camera Standard"),
      img("camera-standard", "06.jpg", "Camera Standard luminosa con letto singolo aggiuntivo"),
      img("camera-standard", "07.jpg", "Bagno privato di una Camera Standard"),
    ],
    maxGuests: 2,
    available: true,
  },
  {
    slug: "camera-deluxe-balcone-vista-lago",
    name: "Camere Deluxe con Balcone Vista Lago",
    shortDescription:
      "Apri la porta-finestra, esci sul balcone e davanti a te c'è il Lago di Garda, calmo e luminoso.",
    longDescription:
      "Qui il lago entra nella tua giornata fin dal primo istante. Ti svegli, esci sul balcone privato e l'aria fresca porta con sé il profumo dei giardini e dell'acqua. Al tramonto resti qualche minuto in più, con il cielo che cambia colore sopra la riva. Le camere Deluxe si trovano al primo piano e uniscono il calore degli arredi in stile, i soffitti in legno e una vista che rende ogni momento speciale.",
    badge: "Vista Lago",
    featured: true,
    size: "18 m²",
    guests: "2 ospiti + 1 letto aggiunto",
    beds: "Letto matrimoniale",
    floor: "Primo piano",
    bookingUnits: ["Deluxe Vista Lago con Terrazzo"],
    notes: ["La struttura non dispone di ascensore."],
    features: [
      "Balcone privato affacciato sul Lago di Garda",
      "Soffitti in legno e arredi in stile",
      "Perfetta per soggiorni romantici",
    ],
    amenities: [...baseAmenities, "Balcone vista lago"],
    images: [
      img("camera-deluxe-balcone-vista-lago", "02.jpg", "Camera Deluxe con soffitto in legno e letto a baldacchino"),
      img("camera-deluxe-balcone-vista-lago", "01.jpg", "Camera Deluxe con carta da parati damascata e accesso al balcone", 1200, 900),
      img("camera-deluxe-balcone-vista-lago", "03.jpg", "Camera Deluxe con copriletto rosso e tende in velluto"),
      img("camera-deluxe-balcone-vista-lago", "04.jpg", "Camera Deluxe con pareti rosa e balcone vista lago", 1024, 651),
      img("camera-deluxe-balcone-vista-lago", "05.jpg", "Ingresso e armadio di una Camera Deluxe"),
      img("camera-deluxe-balcone-vista-lago", "06.jpg", "Bagno con specchio dorato e doccia in vetro"),
      img("camera-deluxe-balcone-vista-lago", "07.jpg", "Vista sul Lago di Garda dal Relais del Sol"),
    ],
    maxGuests: 3,
    available: true,
  },
  {
    slug: "camera-superior-vista-lago",
    name: "Camera Superior Vista Lago",
    shortDescription:
      "Una camera matrimoniale luminosa al primo piano, con un balconcino affacciato sul lago per il caffè del mattino.",
    longDescription:
      "La Camera Superior è il posto giusto per chi desidera tranquillità e una vista aperta sul Lago di Garda. Al primo piano, lontana dal movimento, offre un letto matrimoniale, arredi chiari e un balconcino da cui guardare il lago cambiare colore durante il giorno. Un piccolo privilegio che trasforma ogni risveglio.",
    badge: "Vista Lago",
    guests: "2 ospiti + 1 letto aggiunto",
    beds: "Letto matrimoniale",
    floor: "Primo piano",
    bookingUnits: ["Superior Vista Lago Tranquillità"],
    notes: ["La struttura non dispone di ascensore."],
    features: [
      "Balconcino con affaccio sul lago",
      "Posizione tranquilla al primo piano",
      "Ideale per coppie",
    ],
    amenities: [...baseAmenities, "Balconcino vista lago"],
    images: [
      img("camera-superior-vista-lago", "05.jpg", "Vista sul Lago di Garda dal primo piano del Relais del Sol"),
      img("camera-superior-vista-lago", "01.jpg", "Camera Superior con letto matrimoniale, soffitto in legno e finestra sul verde", 930, 682),
      img("camera-superior-vista-lago", "03.jpg", "Porta-finestra sul balconcino con vista sul Lago di Garda", 698, 682),
      img("camera-superior-vista-lago", "02.jpg", "Letto matrimoniale e lampada nella Camera Superior", 844, 682),
      img("camera-superior-vista-lago", "04.jpg", "Testiera decorata a fiori e copriletto patchwork", 1022, 682),
    ],
    maxGuests: 3,
    available: true,
  },
  {
    slug: "family-junior-suite",
    name: "Family Junior Suite",
    shortDescription:
      "Spazio per tutta la famiglia al piano terra: letto matrimoniale, letti singoli e un'atmosfera che fa sentire subito a casa.",
    longDescription:
      "Le Family Junior Suite sono pensate per le famiglie che vogliono stare comode senza rinunciare all'eleganza. Si trovano al piano terra, a pochi passi dal parco e dalla piscina, e offrono un letto matrimoniale e uno o due letti singoli, con possibilità di letto aggiunto. Ambienti ampi e luminosi, arredi in stile shabby chic e tutto lo spazio che serve per una vacanza serena con i bambini.",
    badge: "Famiglie",
    featured: true,
    size: "Fino a 35 m²",
    guests: "Fino a 4 ospiti",
    beds: "1 matrimoniale + 1 o 2 singoli",
    floor: "Piano terra",
    bookingUnits: ["Junior Suite Emozione", "Junior Suite Simpatia", "Family Armonia"],
    features: [
      "Al piano terra, vicino a parco e piscina",
      "Letto matrimoniale e letti singoli",
      "Possibilità di letto aggiunto",
    ],
    amenities: [...baseAmenities, "Minibar"],
    images: [
      img("family-junior-suite", "01.jpg", "Family Junior Suite con pareti a righe e salottino", 2000, 1500),
      img("family-junior-suite", "02.jpg", "Family Junior Suite ampia con divano e tappeto"),
      img("family-junior-suite", "03.jpg", "Family Junior Suite con poltrona in stile e letto singolo"),
      img("family-junior-suite", "04.jpg", "Letto matrimoniale e chaise longue in una Family Junior Suite", 1200, 900),
      img("family-junior-suite", "05.jpg", "Zona giorno con armadio decorato e pouf", 2000, 1343),
      img("family-junior-suite", "06.jpg", "Family Junior Suite con carta da parati a righe", 2000, 1000),
      img("family-junior-suite", "07.jpg", "Bagno privato con doccia della Family Junior Suite", 1333, 2000),
    ],
    maxGuests: 4,
    available: true,
  },
  {
    slug: "camera-veranda-privata",
    name: "Camere con Veranda Privata",
    shortDescription:
      "Al piano terra, con una veranda tutta tua: una colazione lenta all'aperto, una pausa all'ombra, il parco a due passi.",
    longDescription:
      "Queste camere si aprono su una veranda privata arredata, un vero salotto all'aperto dove leggere, fare una pausa dopo la piscina o goderti la sera che profuma di campagna. All'interno trovi ambienti moderni e luminosi con frigorifero, letto matrimoniale e, nella versione tripla, un letto singolo in più. È la scelta giusta quando cerchi comfort, intimità e un po' di spazio esterno solo per te.",
    badge: "Veranda Privata",
    featured: true,
    size: "25 m²",
    guests: "Da 2 a 3 ospiti + 1 letto aggiunto",
    beds: "Matrimoniale o matrimoniale + singolo",
    floor: "Piano terra",
    bookingUnits: ["Felicità", "Allegria"],
    features: [
      "Veranda privata arredata",
      "Piano terra con accesso diretto al parco",
      "Frigorifero in camera",
    ],
    amenities: [...baseAmenities, "Frigorifero", "Veranda privata"],
    images: [
      img("camera-veranda-privata", "01.jpg", "Veranda privata arredata con tavolo e sedie"),
      img("camera-veranda-privata", "02.jpg", "Camera con veranda privata, letto matrimoniale e tavolino"),
      img("camera-veranda-privata", "03.jpg", "Veranda con tende bianche illuminata la sera", 1024, 682),
      img("camera-veranda-privata", "04.jpg", "Camera tripla luminosa con letto singolo"),
      img("camera-veranda-privata", "05.jpg", "Camera con veranda privata dai toni chiari"),
      img("camera-veranda-privata", "06.jpg", "Salotto all'aperto sulla veranda privata"),
    ],
    maxGuests: 4,
    available: true,
  },
  {
    slug: "family-suite-vista-lago",
    name: "Family Suite Comunicante con Balcone Vista Lago",
    shortDescription:
      "Due camere comunicanti, due bagni e un balcone sul lago: lo spazio di una casa, l'atmosfera del Relais.",
    longDescription:
      "La Family Suite è formata da due camere comunicanti, ciascuna con letto matrimoniale e bagno privato, unite da un balcone affacciato sul Lago di Garda. È la soluzione ideale per famiglie o due coppie che vogliono stare insieme mantenendo la propria privacy. Letti a baldacchino, arredi romantici e la vista sul lago rendono il soggiorno davvero speciale.",
    badge: "Vista Lago",
    size: "35 m²",
    guests: "4 ospiti",
    beds: "2 letti matrimoniali",
    floor: "Primo piano",
    bookingUnits: ["Family Suite Terrazzo Vista Lago"],
    notes: ["La struttura non dispone di ascensore."],
    features: [
      "Due camere comunicanti e due bagni",
      "Balcone con vista sul lago",
      "Ideale per famiglie o due coppie",
    ],
    amenities: [...baseAmenities, "Due bagni", "Balcone vista lago"],
    images: [
      img("family-suite-vista-lago", "01.jpg", "Family Suite con letto a baldacchino e tessuti chiari"),
      img("family-suite-vista-lago", "02.jpg", "Seconda camera della Family Suite con letto a baldacchino"),
      img("family-suite-vista-lago", "03.jpg", "Camera della Family Suite con bagno privato"),
      img("family-suite-vista-lago", "04.jpg", "Bagno privato della Family Suite", 1333, 2000),
      img("family-suite-vista-lago", "05.jpg", "Vista sul Lago di Garda dal Relais del Sol"),
    ],
    maxGuests: 4,
    available: true,
  },
];
