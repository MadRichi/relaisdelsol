import type { Guide } from "../guides";

const GARDALAND = "https://www.gardaland.it/";
const CANEVAWORLD = "https://www.canevaworld.it/";
const NATURA_VIVA = "https://www.parconaturaviva.it/";
const SIGURTA = "https://www.sigurta.it/";
const NAVIGAZIONE = "https://www.navigazionelaghi.it/";

/** Guida evergreen: vacanza sul Lago di Garda con bambini, tra Gardaland, Movieland e Lazise. */
export const FAMILY_GUIDE: Guide = {
  id: "lago-di-garda-con-bambini",
  date: "2026-10-21",
  image: {
    src: "/images/guide/gardaland-vista-aerea.jpg",
    width: 2000,
    height: 1126,
    credit: {
      author: "Daniel Reust",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Luftansicht_Gardaland,_2024.jpg",
    },
  },
  translations: {
    it: {
      title: "Lago di Garda con bambini: dove dormire vicino a Gardaland e Movieland e cosa fare",
      metaTitle: "Lago di Garda con bambini: dormire vicino a Gardaland e Movieland",
      description:
        "Guida pratica per famiglie: dove dormire vicino a Gardaland, Movieland e Caneva Aquapark, distanze reali, cosa fare con i bambini sul Lago di Garda e idee per i giorni di pioggia.",
      excerpt:
        "Gardaland e Movieland sono vicini? Dove conviene dormire? Cosa fare se piove? Le risposte pratiche per organizzare una vacanza in famiglia sul Lago di Garda.",
      category: "Famiglie",
      imageAlt: "Vista aerea di Gardaland con il Lago di Garda sullo sfondo",
      blocks: [
        {
          type: "p",
          text: "Per molte famiglie la vacanza sul Lago di Garda nasce da una promessa fatta ai bambini: **Gardaland**. Poi, organizzando, arrivano le domande: dove conviene dormire? Gardaland e Movieland sono vicini? Cosa si può fare nei giorni senza parchi o se piove?",
        },
        {
          type: "p",
          text: "Noi viviamo a **Pacengo di Lazise**, esattamente tra Gardaland e Canevaworld, e queste domande ce le fanno ogni giorno. Abbiamo raccolto qui le risposte più utili, con le distanze reali e qualche consiglio da chi conosce bene la zona.",
        },
        {
          type: "facts",
          title: "Le distanze dal Relais del Sol",
          items: [
            "**Movieland Park**: 900 m · 12 minuti a piedi",
            "**Caneva Aquapark**: 1,1 km · 16 minuti a piedi",
            "**Gardaland Park**: 2 km · 4 minuti in auto",
            "**SEA LIFE Aquarium Gardaland**: 6 minuti in auto",
            "**Spiaggia di Pacengo**: 1,2 km · 15 minuti a piedi",
            "**Lazise centro**: 4,6 km · 8 minuti in auto",
            "**Parco Natura Viva**: 9 km · 15 minuti in auto",
            "**Stazione di Peschiera del Garda**: 4,6 km",
          ],
        },
        { type: "h2", text: "Gardaland e Movieland sono vicini? Sono la stessa cosa?" },
        {
          type: "p",
          text: "No, sono due parchi diversi, ma molto vicini tra loro: **circa 3,4 km, 5 minuti in auto**. **Gardaland** si trova a Castelnuovo del Garda ed è il parco divertimenti più grande d'Italia; il resort comprende anche il **SEA LIFE Aquarium**, al coperto. **Movieland Park** fa invece parte di **Canevaworld Resort**, a Lazise, insieme a **Caneva Aquapark**, il parco acquatico.",
        },
        {
          type: "p",
          text: "Proprio per questa vicinanza, chi dorme tra Pacengo e Lazise può visitare più parchi nella stessa vacanza senza spostare la base. Tieni presente che i parchi hanno calendari stagionali diversi: in genere Gardaland e Movieland aprono dalla primavera all'autunno, mentre Caneva Aquapark è aperto solo in estate. Prima di partire controlla sempre date e orari su [gardaland.it](" + GARDALAND + ") e [canevaworld.it](" + CANEVAWORLD + ").",
        },
        { type: "h2", text: "Dove dormire vicino a Gardaland: cosa conviene davvero" },
        {
          type: "p",
          text: "Intorno a Gardaland si trovano soprattutto tre zone: **Peschiera del Garda**, **Castelnuovo del Garda** e **Lazise** con le frazioni di Pacengo e Colà. Peschiera è comoda per chi arriva in treno, Castelnuovo è la più vicina ai cancelli di Gardaland, Lazise unisce la vicinanza ai parchi con il lago e un centro storico piacevole per le serate.",
        },
        { type: "p", text: "Con i bambini, più dei pochi metri dall'ingresso del parco contano alcune cose pratiche:" },
        {
          type: "list",
          items: [
            "**Camere grandi o comunicanti**: dopo una giornata al parco, avere spazio (e magari due bagni) fa la differenza.",
            "**Una piscina e uno spazio verde**: i giorni di riposo tra un parco e l'altro sono quelli che i bambini ricordano di più.",
            "**La colazione inclusa**: si parte presto e con meno pensieri.",
            "**Tranquillità la sera**: le zone a ridosso dei parchi possono essere trafficate; qualche minuto più in là si dorme meglio.",
            "**Parchi raggiungibili anche a piedi**: niente parcheggi da cercare almeno per un giorno.",
          ],
        },
        {
          type: "p",
          text: "Al Relais del Sol abbiamo pensato le nostre sistemazioni proprio così: [Family Junior Suite](/camere/family-junior-suite) al piano terra fino a 4 ospiti, la [Family Suite](/camere/family-suite-vista-lago) con due camere comunicanti, due bagni e balcone vista lago, e le [mobilhome](/agricamping) da 40 m² con due camere, due bagni, cucina e veranda privata. Intorno, 13 ettari di parco con piscina a sfioro, area giochi e campi da calcio e pallavolo; Movieland e Caneva Aquapark si raggiungono a piedi.",
        },
        { type: "h2", text: "Cosa fare con i bambini oltre ai parchi" },
        { type: "h3", text: "Una giornata in spiaggia a Pacengo e a Lazise" },
        {
          type: "p",
          text: "La spiaggia di Pacengo è a 15 minuti a piedi: acqua calma, prato e spazi per giocare. Nel pomeriggio si può passare a **Lazise**, con il centro storico chiuso al traffico, le mura medievali, il porticciolo e il lungolago perfetto per un gelato al tramonto.",
        },
        { type: "h3", text: "Un giro in battello" },
        {
          type: "p",
          text: "Dal porto di Lazise partono i battelli della [Navigazione Lago di Garda](" + NAVIGAZIONE + ") verso Bardolino, Garda e gli altri paesi del lago. Per i bambini il viaggio in battello è già un'avventura; per i genitori, il modo più rilassante di vedere il lago senza auto.",
        },
        { type: "h3", text: "Animali e natura" },
        {
          type: "p",
          text: "Il [Parco Natura Viva](" + NATURA_VIVA + "), a 15 minuti dal Relais, è uno zoo dedicato alla conservazione delle specie, con un percorso a piedi e un safari in auto. Per una giornata più tranquilla, il [Parco Giardino Sigurtà](" + SIGURTA + ") a Valeggio sul Mincio (circa 20 minuti) offre prati, labirinto e percorsi tra i fiori, da girare anche in bici o in trenino.",
        },
        { type: "h3", text: "I mercati del lago" },
        {
          type: "p",
          text: "Ogni giorno c'è un mercato settimanale in un paese diverso: il mercoledì a Lazise, il sabato a Pacengo. Una passeggiata tra le bancarelle piace anche ai più piccoli. Trovi il calendario completo nella nostra pagina [Esperienze](/esperienze#territorio).",
        },
        { type: "h2", text: "Cosa fare vicino a Gardaland se piove" },
        {
          type: "list",
          items: [
            "**SEA LIFE Aquarium Gardaland**: è al coperto e a 6 minuti d'auto, ideale per una mattinata di pioggia.",
            "**Museo Nicolis** a Villafranca di Verona (circa 30 minuti): auto d'epoca, moto, biciclette e macchine curiose che affascinano anche i bambini.",
            "**Verona** (circa 35 minuti): l'Arena, la casa di Giulietta e i portici del centro sono una buona alternativa quando il tempo non aiuta.",
          ],
        },
        { type: "h2", text: "Un esempio di tre giorni in famiglia" },
        {
          type: "list",
          items: [
            "**Giorno 1**: Gardaland dall'apertura, rientro nel tardo pomeriggio, cena e passeggiata sul lungolago di Lazise.",
            "**Giorno 2**: mattina in piscina o in spiaggia a Pacengo, pomeriggio a Movieland (in estate, Caneva Aquapark), entrambi raggiungibili a piedi.",
            "**Giorno 3**: Parco Natura Viva o gita in battello da Lazise, e un gelato in centro prima di ripartire.",
          ],
        },
        {
          type: "faq",
          title: "Domande frequenti",
          items: [
            {
              q: "Quanto distano Gardaland e Movieland?",
              a: "Circa 3,4 km, 5 minuti in auto. Sono due parchi diversi: Gardaland è a Castelnuovo del Garda, Movieland fa parte di Canevaworld Resort a Lazise insieme a Caneva Aquapark.",
            },
            {
              q: "Qual è la zona migliore per dormire vicino a Gardaland con i bambini?",
              a: "Lazise e le frazioni di Pacengo e Colà sono una buona scelta: a pochi minuti da Gardaland, con Movieland e Caneva Aquapark raggiungibili, il lago vicino e un centro storico per le serate.",
            },
            {
              q: "Si può arrivare a Gardaland senza auto?",
              a: "Sì: dalla stazione di Peschiera del Garda parte una navetta gratuita per Gardaland nei giorni di apertura del parco. Verifica gli orari sul sito ufficiale di Gardaland.",
            },
            {
              q: "Quando è aperto Caneva Aquapark?",
              a: "Caneva Aquapark è un parco acquatico estivo, in genere aperto da fine maggio a metà settembre. Le date esatte di ogni anno sono pubblicate su canevaworld.it.",
            },
            {
              q: "Cosa fare vicino a Gardaland se piove?",
              a: "Il SEA LIFE Aquarium di Gardaland è al coperto; in alternativa il Museo Nicolis a Villafranca di Verona o una visita a Verona, a circa mezz'ora.",
            },
          ],
        },
        { type: "h2", text: "La vostra base tra Gardaland, Movieland e il lago" },
        {
          type: "p",
          text: "Il Relais del Sol è un agriturismo a gestione familiare: niente animazione chiassosa, ma spazio, verde e la tranquillità per ricaricarsi tra un parco e l'altro. La colazione è inclusa, la piscina è circondata dal parco e i bambini hanno spazio per correre. Scopri le [camere per famiglie](/camere) e prenota direttamente sul sito ufficiale per avere il miglior prezzo.",
        },
      ],
    },
    en: {
      title: "Lake Garda with kids: where to stay near Gardaland and Movieland and what to do",
      metaTitle: "Lake Garda with kids: where to stay near Gardaland & Movieland",
      description:
        "A practical family guide: where to stay near Gardaland, Movieland and Caneva Aquapark, real distances, things to do with kids on Lake Garda and rainy-day ideas.",
      excerpt:
        "Are Gardaland and Movieland close? Where should you stay? What to do when it rains? Practical answers for planning a family holiday on Lake Garda.",
      category: "Families",
      imageAlt: "Aerial view of Gardaland with Lake Garda in the background",
      blocks: [
        {
          type: "p",
          text: "For many families, a Lake Garda holiday starts with a promise made to the kids: **Gardaland**. Then, while planning, the questions arrive: where's the best place to stay? Are Gardaland and Movieland close to each other? What can you do on days without theme parks, or when it rains?",
        },
        {
          type: "p",
          text: "We live in **Pacengo di Lazise**, right between Gardaland and Canevaworld, and guests ask us these questions every day. Here are the most useful answers, with real distances and tips from people who know the area well.",
        },
        {
          type: "facts",
          title: "Distances from Relais del Sol",
          items: [
            "**Movieland Park**: 900 m · 12 minutes on foot",
            "**Caneva Aquapark**: 1.1 km · 16 minutes on foot",
            "**Gardaland Park**: 2 km · 4 minutes by car",
            "**SEA LIFE Aquarium Gardaland**: 6 minutes by car",
            "**Pacengo beach**: 1.2 km · 15 minutes on foot",
            "**Lazise centre**: 4.6 km · 8 minutes by car",
            "**Parco Natura Viva**: 9 km · 15 minutes by car",
            "**Peschiera del Garda station**: 4.6 km",
          ],
        },
        { type: "h2", text: "Are Gardaland and Movieland close? Are they the same park?" },
        {
          type: "p",
          text: "No, they are two different parks, but very close to each other: **about 3.4 km, 5 minutes by car**. **Gardaland** is in Castelnuovo del Garda and is Italy's largest theme park; the resort also includes the indoor **SEA LIFE Aquarium**. **Movieland Park** is part of **Canevaworld Resort** in Lazise, together with the **Caneva Aquapark** water park.",
        },
        {
          type: "p",
          text: "Because they are so close, if you stay between Pacengo and Lazise you can visit several parks in the same holiday without changing base. Keep in mind that the parks have different seasonal calendars: Gardaland and Movieland usually open from spring to autumn, while Caneva Aquapark is open in summer only. Always check dates and opening hours on [gardaland.it](" + GARDALAND + ") and [canevaworld.it](" + CANEVAWORLD + ") before you go.",
        },
        { type: "h2", text: "Where to stay near Gardaland: what really matters" },
        {
          type: "p",
          text: "There are three main areas around Gardaland: **Peschiera del Garda**, **Castelnuovo del Garda** and **Lazise** with the villages of Pacengo and Colà. Peschiera is handy if you arrive by train, Castelnuovo is closest to the Gardaland gates, and Lazise combines proximity to the parks with the lake and a lovely historic centre for evenings out.",
        },
        { type: "p", text: "With children, a few practical things matter more than being a few metres from the park entrance:" },
        {
          type: "list",
          items: [
            "**Large or interconnecting rooms**: after a day at the park, extra space (and ideally two bathrooms) makes all the difference.",
            "**A pool and green space**: the rest days between parks are often the ones kids remember most.",
            "**Breakfast included**: you can start early with fewer worries.",
            "**Quiet evenings**: areas right next to the parks can be busy; a few minutes further away you'll sleep better.",
            "**Parks within walking distance**: no parking to look for, at least for one day.",
          ],
        },
        {
          type: "p",
          text: "At Relais del Sol we designed our accommodation with this in mind: [Family Junior Suites](/en/rooms/family-junior-suite) on the ground floor for up to 4 guests, the [Family Suite](/en/rooms/family-suite-lake-view) with two interconnecting rooms, two bathrooms and a lake view balcony, and [mobile homes](/en/glamping) of 40 m² with two bedrooms, two bathrooms, a kitchen and a private veranda. All around is a 13-hectare park with an infinity pool, playground and football and volleyball pitches; Movieland and Caneva Aquapark are within walking distance.",
        },
        { type: "h2", text: "Things to do with kids beyond the theme parks" },
        { type: "h3", text: "A beach day in Pacengo and Lazise" },
        {
          type: "p",
          text: "Pacengo beach is a 15-minute walk away: calm water, a lawn and space to play. In the afternoon, head to **Lazise**, with its car-free historic centre, medieval walls, small harbour and a lakeside promenade made for an ice cream at sunset.",
        },
        { type: "h3", text: "A boat trip" },
        {
          type: "p",
          text: "From Lazise harbour, [Lake Garda ferries](" + NAVIGAZIONE + ") sail to Bardolino, Garda and the other lake towns. For children the boat ride is an adventure in itself; for parents, it's the most relaxing way to see the lake without a car.",
        },
        { type: "h3", text: "Animals and nature" },
        {
          type: "p",
          text: "[Parco Natura Viva](" + NATURA_VIVA + "), 15 minutes from the Relais, is a zoo dedicated to species conservation, with a walking route and a drive-through safari. For a calmer day, [Parco Giardino Sigurtà](" + SIGURTA + ") in Valeggio sul Mincio (about 20 minutes) offers lawns, a maze and flower trails you can explore by bike or mini train.",
        },
        { type: "h3", text: "Lakeside markets" },
        {
          type: "p",
          text: "Every day there's a weekly market in a different town: Wednesday in Lazise, Saturday in Pacengo. Strolling among the stalls is fun for little ones too. You'll find the full calendar on our [Experiences](/en/experiences#territorio) page.",
        },
        { type: "h2", text: "What to do near Gardaland when it rains" },
        {
          type: "list",
          items: [
            "**SEA LIFE Aquarium Gardaland**: indoors and 6 minutes away by car, perfect for a rainy morning.",
            "**Museo Nicolis** in Villafranca di Verona (about 30 minutes): vintage cars, motorbikes, bicycles and curious machines that fascinate kids too.",
            "**Verona** (about 35 minutes): the Arena, Juliet's House and the arcades of the centre are a good alternative when the weather doesn't help.",
          ],
        },
        { type: "h2", text: "A sample three-day family itinerary" },
        {
          type: "list",
          items: [
            "**Day 1**: Gardaland from opening time, back in the late afternoon, dinner and a stroll along the Lazise lakefront.",
            "**Day 2**: morning at the pool or Pacengo beach, afternoon at Movieland (in summer, Caneva Aquapark), both within walking distance.",
            "**Day 3**: Parco Natura Viva or a boat trip from Lazise, and an ice cream in town before heading home.",
          ],
        },
        {
          type: "faq",
          title: "Frequently asked questions",
          items: [
            {
              q: "How far apart are Gardaland and Movieland?",
              a: "About 3.4 km, 5 minutes by car. They are two different parks: Gardaland is in Castelnuovo del Garda, while Movieland is part of Canevaworld Resort in Lazise together with Caneva Aquapark.",
            },
            {
              q: "What is the best area to stay near Gardaland with kids?",
              a: "Lazise and the villages of Pacengo and Colà are a good choice: a few minutes from Gardaland, close to Movieland and Caneva Aquapark, near the lake and with a historic centre for evenings out.",
            },
            {
              q: "Can you get to Gardaland without a car?",
              a: "Yes: a free shuttle runs from Peschiera del Garda railway station to Gardaland on the days the park is open. Check the times on the official Gardaland website.",
            },
            {
              q: "When is Caneva Aquapark open?",
              a: "Caneva Aquapark is a summer water park, usually open from late May to mid-September. Each year's exact dates are published on canevaworld.it.",
            },
            {
              q: "What can you do near Gardaland when it rains?",
              a: "Gardaland's SEA LIFE Aquarium is indoors; alternatively, visit the Museo Nicolis in Villafranca di Verona or spend the day in Verona, about half an hour away.",
            },
          ],
        },
        { type: "h2", text: "Your base between Gardaland, Movieland and the lake" },
        {
          type: "p",
          text: "Relais del Sol is a family-run agriturismo: no noisy entertainment programme, but space, greenery and peace to recharge between one park and the next. Breakfast is included, the pool is surrounded by the park and children have room to run. Discover our [family rooms](/en/rooms) and book direct on the official website for the best price.",
        },
      ],
    },
    de: {
      title: "Gardasee mit Kindern: Unterkunft nahe Gardaland und Movieland und Ausflugstipps",
      metaTitle: "Gardasee mit Kindern: Unterkunft nahe Gardaland & Movieland",
      description:
        "Praktischer Familien-Ratgeber: Unterkunft nahe Gardaland, Movieland und Caneva Aquapark, echte Entfernungen, Ausflüge mit Kindern am Gardasee und Tipps für Regentage.",
      excerpt:
        "Liegen Gardaland und Movieland nah beieinander? Wo übernachtet man am besten? Was tun bei Regen? Praktische Antworten für den Familienurlaub am Gardasee.",
      category: "Familien",
      imageAlt: "Luftaufnahme von Gardaland mit dem Gardasee im Hintergrund",
      blocks: [
        {
          type: "p",
          text: "Für viele Familien beginnt der Urlaub am Gardasee mit einem Versprechen an die Kinder: **Gardaland**. Bei der Planung kommen dann die Fragen: Wo übernachtet man am besten? Liegen Gardaland und Movieland nah beieinander? Was kann man an Tagen ohne Freizeitpark oder bei Regen unternehmen?",
        },
        {
          type: "p",
          text: "Wir leben in **Pacengo di Lazise**, genau zwischen Gardaland und Canevaworld, und diese Fragen hören wir jeden Tag. Hier sind die nützlichsten Antworten, mit echten Entfernungen und Tipps von Menschen, die die Gegend gut kennen.",
        },
        {
          type: "facts",
          title: "Entfernungen vom Relais del Sol",
          items: [
            "**Movieland Park**: 900 m · 12 Minuten zu Fuß",
            "**Caneva Aquapark**: 1,1 km · 16 Minuten zu Fuß",
            "**Gardaland Park**: 2 km · 4 Minuten mit dem Auto",
            "**SEA LIFE Aquarium Gardaland**: 6 Minuten mit dem Auto",
            "**Strand von Pacengo**: 1,2 km · 15 Minuten zu Fuß",
            "**Lazise Zentrum**: 4,6 km · 8 Minuten mit dem Auto",
            "**Parco Natura Viva**: 9 km · 15 Minuten mit dem Auto",
            "**Bahnhof Peschiera del Garda**: 4,6 km",
          ],
        },
        { type: "h2", text: "Liegen Gardaland und Movieland nah beieinander? Ist es derselbe Park?" },
        {
          type: "p",
          text: "Nein, es sind zwei verschiedene Parks, aber sie liegen sehr nah beieinander: **etwa 3,4 km, 5 Minuten mit dem Auto**. **Gardaland** liegt in Castelnuovo del Garda und ist Italiens größter Freizeitpark; zum Resort gehört auch das überdachte **SEA LIFE Aquarium**. **Movieland Park** gehört zum **Canevaworld Resort** in Lazise, zusammen mit dem Wasserpark **Caneva Aquapark**.",
        },
        {
          type: "p",
          text: "Dank dieser Nähe können Sie, wenn Sie zwischen Pacengo und Lazise übernachten, mehrere Parks im selben Urlaub besuchen, ohne die Unterkunft zu wechseln. Beachten Sie, dass die Parks unterschiedliche Saisonkalender haben: Gardaland und Movieland öffnen in der Regel von Frühling bis Herbst, Caneva Aquapark nur im Sommer. Prüfen Sie Termine und Öffnungszeiten vorab auf [gardaland.it](" + GARDALAND + ") und [canevaworld.it](" + CANEVAWORLD + ").",
        },
        { type: "h2", text: "Unterkunft nahe Gardaland: Worauf es wirklich ankommt" },
        {
          type: "p",
          text: "Rund um Gardaland gibt es vor allem drei Gegenden: **Peschiera del Garda**, **Castelnuovo del Garda** und **Lazise** mit den Ortsteilen Pacengo und Colà. Peschiera ist praktisch für die Anreise mit dem Zug, Castelnuovo liegt am nächsten an den Toren von Gardaland, Lazise verbindet die Nähe zu den Parks mit dem See und einer schönen Altstadt für die Abende.",
        },
        { type: "p", text: "Mit Kindern zählen ein paar praktische Dinge mehr als ein paar Meter Abstand zum Parkeingang:" },
        {
          type: "list",
          items: [
            "**Große oder verbundene Zimmer**: Nach einem Tag im Park macht zusätzlicher Platz (und am besten zwei Bäder) den Unterschied.",
            "**Ein Pool und viel Grün**: Die Ruhetage zwischen den Parks sind oft die, an die sich Kinder am meisten erinnern.",
            "**Frühstück inklusive**: So startet man früh und entspannt.",
            "**Ruhige Abende**: Direkt an den Parks kann viel Verkehr sein; ein paar Minuten weiter schläft man besser.",
            "**Parks zu Fuß erreichbar**: zumindest an einem Tag keine Parkplatzsuche.",
          ],
        },
        {
          type: "p",
          text: "Im Relais del Sol haben wir unsere Unterkünfte genau so gestaltet: [Familien-Junior-Suiten](/de/zimmer/familien-junior-suite) im Erdgeschoss für bis zu 4 Gäste, die [Familiensuite](/de/zimmer/familiensuite-seeblick) mit zwei verbundenen Zimmern, zwei Bädern und Seeblick-Balkon sowie [Mobilheime](/de/glamping) mit 40 m², zwei Schlafzimmern, zwei Bädern, Küche und privater Veranda. Rundherum ein 13 Hektar großer Park mit Infinity-Pool, Spielplatz sowie Fußball- und Volleyballplätzen; Movieland und Caneva Aquapark erreichen Sie zu Fuß.",
        },
        { type: "h2", text: "Was man mit Kindern außer den Freizeitparks unternehmen kann" },
        { type: "h3", text: "Ein Strandtag in Pacengo und Lazise" },
        {
          type: "p",
          text: "Der Strand von Pacengo ist 15 Gehminuten entfernt: ruhiges Wasser, Liegewiese und Platz zum Spielen. Am Nachmittag geht es nach **Lazise** mit seiner autofreien Altstadt, der mittelalterlichen Stadtmauer, dem kleinen Hafen und einer Seepromenade, wie gemacht für ein Eis bei Sonnenuntergang.",
        },
        { type: "h3", text: "Eine Bootsfahrt" },
        {
          type: "p",
          text: "Vom Hafen in Lazise fahren die Schiffe der [Gardasee-Schifffahrt](" + NAVIGAZIONE + ") nach Bardolino, Garda und in die anderen Orte am See. Für Kinder ist die Fahrt schon ein Abenteuer; für Eltern die entspannteste Art, den See ohne Auto zu erleben.",
        },
        { type: "h3", text: "Tiere und Natur" },
        {
          type: "p",
          text: "Der [Parco Natura Viva](" + NATURA_VIVA + "), 15 Minuten vom Relais entfernt, ist ein Zoo, der sich dem Artenschutz widmet, mit Rundweg zu Fuß und Safari mit dem Auto. Für einen ruhigeren Tag bietet der [Parco Giardino Sigurtà](" + SIGURTA + ") in Valeggio sul Mincio (etwa 20 Minuten) Wiesen, ein Labyrinth und Blumenwege, auch mit dem Fahrrad oder dem Bähnchen.",
        },
        { type: "h3", text: "Die Märkte am See" },
        {
          type: "p",
          text: "Jeden Tag findet in einem anderen Ort ein Wochenmarkt statt: mittwochs in Lazise, samstags in Pacengo. Ein Bummel zwischen den Ständen gefällt auch den Kleinen. Den vollständigen Kalender finden Sie auf unserer Seite [Erlebnisse](/de/erlebnisse#territorio).",
        },
        { type: "h2", text: "Was tun bei Regen in der Nähe von Gardaland" },
        {
          type: "list",
          items: [
            "**SEA LIFE Aquarium Gardaland**: überdacht und 6 Autominuten entfernt, ideal für einen Regenvormittag.",
            "**Museo Nicolis** in Villafranca di Verona (etwa 30 Minuten): Oldtimer, Motorräder, Fahrräder und kuriose Maschinen, die auch Kinder begeistern.",
            "**Verona** (etwa 35 Minuten): Arena, Julias Haus und die Arkaden der Altstadt sind eine gute Alternative bei schlechtem Wetter.",
          ],
        },
        { type: "h2", text: "Beispiel: drei Tage mit der Familie" },
        {
          type: "list",
          items: [
            "**Tag 1**: Gardaland ab Öffnung, Rückkehr am späten Nachmittag, Abendessen und Spaziergang an der Seepromenade von Lazise.",
            "**Tag 2**: Vormittag am Pool oder am Strand von Pacengo, Nachmittag im Movieland (im Sommer im Caneva Aquapark), beides zu Fuß erreichbar.",
            "**Tag 3**: Parco Natura Viva oder Bootsfahrt ab Lazise, und ein Eis in der Altstadt vor der Abreise.",
          ],
        },
        {
          type: "faq",
          title: "Häufige Fragen",
          items: [
            {
              q: "Wie weit liegen Gardaland und Movieland auseinander?",
              a: "Etwa 3,4 km, 5 Minuten mit dem Auto. Es sind zwei verschiedene Parks: Gardaland liegt in Castelnuovo del Garda, Movieland gehört zusammen mit Caneva Aquapark zum Canevaworld Resort in Lazise.",
            },
            {
              q: "Welche Gegend eignet sich am besten zum Übernachten nahe Gardaland mit Kindern?",
              a: "Lazise mit den Ortsteilen Pacengo und Colà ist eine gute Wahl: wenige Minuten von Gardaland, nah an Movieland und Caneva Aquapark, am See und mit einer Altstadt für die Abende.",
            },
            {
              q: "Kommt man ohne Auto nach Gardaland?",
              a: "Ja: Vom Bahnhof Peschiera del Garda fährt an den Öffnungstagen ein kostenloser Shuttlebus nach Gardaland. Die Zeiten finden Sie auf der offiziellen Website von Gardaland.",
            },
            {
              q: "Wann hat Caneva Aquapark geöffnet?",
              a: "Caneva Aquapark ist ein Sommer-Wasserpark, in der Regel von Ende Mai bis Mitte September geöffnet. Die genauen Termine jedes Jahres stehen auf canevaworld.it.",
            },
            {
              q: "Was kann man bei Regen in der Nähe von Gardaland unternehmen?",
              a: "Das SEA LIFE Aquarium von Gardaland ist überdacht; alternativ das Museo Nicolis in Villafranca di Verona oder ein Tag in Verona, etwa eine halbe Stunde entfernt.",
            },
          ],
        },
        { type: "h2", text: "Ihr Ausgangspunkt zwischen Gardaland, Movieland und dem See" },
        {
          type: "p",
          text: "Das Relais del Sol ist ein familiengeführtes Agriturismo: keine laute Animation, sondern Platz, Grün und Ruhe zum Erholen zwischen den Parks. Das Frühstück ist inklusive, der Pool liegt mitten im Park und Kinder haben Platz zum Toben. Entdecken Sie unsere [Familienzimmer](/de/zimmer) und buchen Sie direkt auf der offiziellen Website zum besten Preis.",
        },
      ],
    },
  },
};
