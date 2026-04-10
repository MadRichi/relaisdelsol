export interface Room {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  badge?: string;
  features: string[];
  amenities: string[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  priceFrom?: number;
  maxGuests: number;
  available: boolean;
}

export const rooms: Room[] = [
  {
    slug: "camera-standard",
    name: "Camera Standard",
    shortDescription:
      "Chiudi la porta, rallenti il respiro e lasci che il silenzio della campagna accompagni la tua sera.",
    longDescription:
      "Ti svegli con una luce morbida che entra dalle tende chiare e accarezza il legno naturale della stanza. Dopo la colazione in agriturismo, rientri in un ambiente essenziale ma curato, dove ogni dettaglio resta semplice e autentico: tessuti leggeri, profumi puliti, quiete vera. E quando la giornata finisce, il letto ti aspetta come un rifugio caldo, lontano dal rumore.",
    badge: "Romantica",
    features: [
      "Atmosfera provenzale e country-romantica",
      "Materiali naturali e travi a vista",
      "Ideale per una fuga di coppia",
    ],
    amenities: [
      "Aria condizionata",
      "WiFi",
      "Bagno privato",
      "Colazione inclusa",
      "Accesso piscina",
      "Dog friendly",
    ],
    images: [
      {
        src: "/images/rooms/standard-1.jpg",
        alt: "Camera Standard con tessuti naturali e luce del mattino",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/rooms/standard-2.jpg",
        alt: "Dettaglio della Camera Standard in stile country-romantico",
        width: 1600,
        height: 1200,
      },
    ],
    maxGuests: 2,
    available: true,
  },
  {
    slug: "camera-balcone-vista-lago",
    name: "Camera con Balcone Vista Lago",
    shortDescription:
      "Apri la finestra, fai un passo sul balcone e davanti a te c'e il Lago di Garda, calmo e luminoso.",
    longDescription:
      "Qui il lago entra nella tua giornata fin dal primo istante. Ti svegli, esci sul balcone e l'aria fresca porta con se il profumo dell'acqua e dei giardini. Al tramonto resti qualche minuto in piu, con il cielo che cambia colore sopra la riva. La stanza mantiene il calore elegante dell'agriturismo, ma e la vista che rende ogni momento speciale, lento, memorabile.",
    badge: "Vista Lago",
    features: [
      "Balcone privato affacciato sul Lago di Garda",
      "Luce naturale per tutta la giornata",
      "Perfetta per soggiorni romantici",
    ],
    amenities: [
      "Aria condizionata",
      "WiFi",
      "Bagno privato",
      "Colazione inclusa",
      "Accesso piscina",
      "Dog friendly",
    ],
    images: [
      {
        src: "/images/rooms/vista-lago-1.jpg",
        alt: "Camera con balcone e vista aperta sul Lago di Garda",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/rooms/vista-lago-2.jpg",
        alt: "Balcone privato della camera vista lago al tramonto",
        width: 1600,
        height: 1200,
      },
    ],
    maxGuests: 2,
    available: true,
  },
  {
    slug: "camera-angolo-cottura-veranda",
    name: "Camera con Angolo Cottura e Veranda",
    shortDescription:
      "Hai i tuoi tempi: cucini qualcosa di semplice, poi ti siedi in veranda mentre la sera profuma di lago e campagna.",
    longDescription:
      "Questa camera ti lascia la liberta di vivere la vacanza con un ritmo tutto tuo. La zona con angolo cottura rende facili i momenti quotidiani, senza rinunciare all'atmosfera calda e curata di Ca' del Sol. In veranda trovi spazio, luce e quiete: un tavolo, una pausa lunga, una colazione lenta all'aperto prima di partire verso Lazise o restare in piscina. E' la scelta giusta quando cerchi comfort, intimita e un po' di autonomia in piu.",
    badge: "Con Cucina",
    features: [
      "Angolo cottura funzionale",
      "Veranda privata per colazioni e relax",
      "Ideale per soggiorni lunghi o in famiglia",
    ],
    amenities: [
      "Aria condizionata",
      "WiFi",
      "Bagno privato",
      "Angolo cottura attrezzato",
      "Veranda esterna",
      "Accesso piscina",
      "Dog friendly",
    ],
    images: [
      {
        src: "/images/rooms/cucina-veranda-1.jpg",
        alt: "Camera con angolo cottura in stile naturale e accogliente",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/rooms/cucina-veranda-2.jpg",
        alt: "Veranda privata della camera con tavolo e sedute",
        width: 1600,
        height: 1200,
      },
    ],
    maxGuests: 4,
    available: true,
  },
];
