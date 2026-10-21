import type { Guide } from "../guides";

const COMUNE = "https://www.comune.lazise.vr.it/";
const NAVIGAZIONE = "https://www.navigazionelaghi.it/";
const VILLA_DEI_CEDRI = "https://www.villadeicedri.it/";
const MUSEO_DEL_VINO = "https://www.museodelvino.it/";

/** Guida evergreen: cosa vedere e cosa fare a Lazise, il borgo più vicino al Relais. */
export const LAZISE_GUIDE: Guide = {
  id: "cosa-vedere-a-lazise",
  date: "2026-10-21",
  image: {
    src: "/images/guide/lazise-porto.jpg",
    width: 2000,
    height: 1023,
  },
  translations: {
    it: {
      title: "Cosa vedere a Lazise: guida al borgo medievale sul Lago di Garda",
      metaTitle: "Cosa vedere a Lazise: centro storico, castello, lungolago e spiagge",
      description:
        "Cosa vedere e cosa fare a Lazise, sul Lago di Garda: mura e castello scaligero, porto vecchio e Dogana Veneta, lungolago fino a Bardolino, spiagge, mercato del mercoledì, la sera, con i bambini e se piove.",
      excerpt:
        "Mura medievali, il porticciolo, il lungolago fino a Bardolino e il mercato del mercoledì: tutto quello che c'è da vedere a Lazise, anche in un giorno solo.",
      category: "Lazise",
      imageAlt: "Il porto vecchio di Lazise con le barche e le case colorate sul lungolago",
      blocks: [
        {
          type: "p",
          text: "**Lazise** è uno dei borghi più belli della sponda veronese del Lago di Garda: un centro storico racchiuso dalle mura medievali, un porticciolo con le case colorate affacciate sull'acqua e un lungolago che invita a camminare dalla mattina al tramonto. È piccola, si gira a piedi e regala il meglio a chi la vive con calma.",
        },
        {
          type: "p",
          text: "Il Relais del Sol è a **Pacengo di Lazise**, a 8 minuti dal centro: Lazise è il paese dove andiamo a fare la spesa, a prendere un gelato e a passeggiare la sera. Ecco cosa consigliamo ai nostri ospiti, con le cose da vedere, le domande più frequenti e qualche consiglio pratico.",
        },
        {
          type: "facts",
          title: "Lazise in breve",
          items: [
            "**Dal Relais del Sol**: 4,6 km · 8 minuti in auto",
            "**Per visitarla**: mezza giornata per il centro, una giornata intera con lago e lungolago",
            "**Mercato settimanale**: il mercoledì mattina",
            "**Da non perdere**: mura e Castello Scaligero, porto vecchio, Dogana Veneta, San Nicolò",
            "**A piedi o in bici**: lungolago pianeggiante fino a Bardolino, circa 5 km",
            "**In battello**: dal porto verso Bardolino, Garda e gli altri paesi del lago",
          ],
        },
        { type: "h2", text: "Il centro storico e le mura medievali" },
        {
          type: "p",
          text: "Il centro di Lazise è ancora circondato dalla **cinta muraria merlata**, con torri e tre porte d'accesso: **Porta Cansignorio**, **Porta San Zeno** e **Porta del Lion**. Dentro le mura le auto non entrano: si cammina tra vicoli, piazzette, botteghe e case dalle facciate pastello, con il lago che compare in fondo a ogni strada.",
        },
        {
          type: "p",
          text: "Un consiglio: oltre al cuore del paese, fai il giro esterno delle mura. In circa un'ora a passo tranquillo si vedono le torri, i tratti meglio conservati della cinta e gli scorci verso il castello, lontano dalla folla del lungolago.",
        },
        { type: "h2", text: "Il Castello Scaligero" },
        {
          type: "p",
          text: "Il **Castello Scaligero**, nella parte sud del borgo, è il simbolo di Lazise: le sue torri merlate sono legate al periodo della signoria degli Scaligeri di Verona, che fortificarono molti paesi del lago. Il castello è di **proprietà privata** e l'interno non è visitabile, ma vale la pena girarci intorno: le torri e le mura si apprezzano benissimo dall'esterno, soprattutto nella luce del tardo pomeriggio.",
        },
        { type: "h2", text: "Il porto vecchio, la Dogana Veneta e San Nicolò" },
        {
          type: "p",
          text: "Il **porto vecchio** è il punto più fotografato di Lazise: barche di legno, i caffè sotto i portici e le case colorate che si specchiano nell'acqua. Su un lato si affaccia la **Dogana Veneta**, l'antico edificio che durante il dominio di Venezia serviva da arsenale e dogana per i traffici del lago; oggi ospita mostre ed eventi.",
        },
        {
          type: "p",
          text: "Proprio sul porto si trova anche la piccola **chiesa di San Nicolò**, di origine romanica, con resti di affreschi trecenteschi di scuola giottesca. Vicino a Porta San Zeno c'è invece la chiesa parrocchiale dei **Santi Zenone e Martino**.",
        },
        { type: "h2", text: "Perché Lazise è detta il primo libero comune d'Italia" },
        {
          type: "p",
          text: "Nel **983** l'imperatore **Ottone II** concesse a Lazise, con un diploma, una serie di privilegi: il diritto di fortificarsi, di pescare e di riscuotere dazi sui traffici del lago. Per questo il paese si fregia del titolo di **primo libero comune d'Italia**. Gli storici discutono su quanto quei privilegi corrispondano a un \"comune\" in senso pieno, ma il documento resta una testimonianza rara dell'importanza che Lazise aveva già mille anni fa.",
        },
        { type: "h2", text: "Il lungolago e la passeggiata fino a Bardolino" },
        {
          type: "p",
          text: "Dal centro parte la **passeggiata a lago verso Bardolino**: circa **5 km pianeggianti** tra spiaggette, ulivi e prati, percorribili a piedi, in bici o con il passeggino. A piedi serve poco più di un'ora per tratta; chi vuole camminare ancora può proseguire fino a **Garda**. Per tornare indietro, nella bella stagione, si può prendere il battello.",
        },
        {
          type: "p",
          text: "Il lungolago è bello a ogni ora, ma il momento migliore è il **tramonto**: il sole scende dietro la sponda bresciana e il lago si colora di arancio.",
        },
        { type: "h2", text: "Le spiagge di Lazise" },
        {
          type: "p",
          text: "Appena fuori dal centro c'è la **spiaggia di Lazise**, lunga e in parte sabbiosa, con tratti liberi e tratti attrezzati con lettini e ombrelloni. Lungo la costa verso Bardolino e verso Pacengo si alternano spiaggette di ghiaia e prati all'ombra degli alberi, ideali per chi cerca un angolo più tranquillo. La **spiaggia di Pacengo** è a 15 minuti a piedi dal Relais. Per chi viaggia con il cane, le regole di accesso alle spiagge cambiano da tratto a tratto: verifica i cartelli sul posto.",
        },
        { type: "h2", text: "Il mercato del mercoledì" },
        {
          type: "p",
          text: "Il **mercoledì mattina** Lazise ospita il mercato settimanale, molto frequentato da residenti e turisti: abbigliamento, pelletteria, casalinghi, frutta e prodotti tipici. Conviene arrivare presto, perché in alta stagione i parcheggi si riempiono in fretta. Gli altri mercati della zona, giorno per giorno, sono nella nostra pagina [Esperienze](/esperienze#territorio).",
        },
        { type: "h2", text: "Cosa fare a Lazise la sera" },
        {
          type: "p",
          text: "La sera Lazise dà il meglio: le mura illuminate, i ristoranti e i bar sul porto, il passeggio sul lungolago con un gelato in mano. È il posto ideale per un **aperitivo con un calice di Bardolino o di Chiaretto**, i vini di queste colline, e per una cena a base di pesce di lago. In estate il centro si anima spesso con concerti, mercatini ed eventi: il calendario aggiornato è sul sito del [Comune di Lazise](" + COMUNE + ").",
        },
        { type: "h2", text: "Lazise con i bambini" },
        {
          type: "list",
          items: [
            "**Il centro chiuso al traffico** permette ai bambini di camminare in sicurezza tra vicoli e piazzette.",
            "**Il porto e il giro in battello**: guardare le barche è già un'attrazione, salirci è un'avventura.",
            "**La passeggiata verso Bardolino** è piana e adatta anche a bici e passeggini.",
            "**I parchi divertimento sono vicinissimi**: Movieland e Caneva Aquapark sono tra Lazise e Pacengo, Gardaland a pochi minuti. Ne parliamo nella guida [Lago di Garda con bambini](/guida-lago-di-garda/lago-di-garda-con-bambini-dove-dormire-gardaland-movieland).",
          ],
        },
        { type: "h2", text: "Cosa fare a Lazise se piove" },
        {
          type: "list",
          items: [
            "**Terme Villa dei Cedri** a Colà di Lazise: un parco termale con piscine di acqua termale calda all'aperto, piacevoli anche con il cielo grigio e nelle sere d'autunno. Dal Relais sono a 4 minuti d'auto. [villadeicedri.it](" + VILLA_DEI_CEDRI + ")",
            "**SEA LIFE Aquarium Gardaland**, al coperto, a pochi minuti da Lazise.",
            "**Museo del Vino Zeni** a Bardolino, per scoprire come nasce il vino del lago. [museodelvino.it](" + MUSEO_DEL_VINO + ")",
            "**Verona**, a circa 35 minuti: l'Arena, piazza delle Erbe e i portici del centro sono perfetti per una giornata di pioggia.",
          ],
        },
        { type: "h2", text: "Lazise in un giorno: un itinerario" },
        {
          type: "list",
          items: [
            "**Mattina**: caffè sul porto vecchio, giro del centro storico e delle mura, uno sguardo al Castello Scaligero e a San Nicolò. Se è mercoledì, il mercato.",
            "**Pranzo**: in centro o con un picnic sui prati del lungolago.",
            "**Pomeriggio**: passeggiata o pedalata verso Bardolino, oppure qualche ora in spiaggia. Chi preferisce può andare in battello e tornare a piedi.",
            "**Sera**: aperitivo al tramonto sul lungolago e cena in centro, con le mura illuminate.",
          ],
        },
        { type: "h2", text: "Consigli pratici: parcheggio e come arrivare" },
        {
          type: "p",
          text: "Il centro storico è zona pedonale e si parcheggia nei **parcheggi a pagamento appena fuori dalle mura**, a pochi minuti a piedi dal porto. In estate e nei giorni di mercato conviene arrivare la mattina presto, oppure lasciare l'auto a casa: dalla nostra zona Lazise si raggiunge in pochi minuti anche in bici. Dal porto partono i battelli della [Navigazione Lago di Garda](" + NAVIGAZIONE + ") verso gli altri paesi del lago.",
        },
        {
          type: "faq",
          title: "Domande frequenti",
          items: [
            {
              q: "Cosa vedere a Lazise in un giorno?",
              a: "Il centro storico con le mura e le tre porte, il Castello Scaligero (dall'esterno), il porto vecchio con la Dogana Veneta e la chiesa di San Nicolò, poi la passeggiata sul lungolago verso Bardolino e il tramonto sul lago.",
            },
            {
              q: "Il Castello Scaligero di Lazise si può visitare?",
              a: "No, il castello è di proprietà privata e l'interno non è aperto al pubblico. Si può però ammirare dall'esterno, camminando lungo le mura del borgo.",
            },
            {
              q: "Che giorno c'è il mercato a Lazise?",
              a: "Il mercato settimanale di Lazise è il mercoledì mattina. Nei dintorni ce n'è uno quasi ogni giorno: il sabato, per esempio, a Pacengo.",
            },
            {
              q: "Perché Lazise è considerata il primo libero comune d'Italia?",
              a: "Perché nel 983 l'imperatore Ottone II le concesse con un diploma privilegi come il diritto di fortificarsi, di pescare e di riscuotere dazi. È una tradizione molto sentita, anche se gli storici discutono sul significato esatto di quei privilegi.",
            },
            {
              q: "Quanto dista Lazise da Bardolino?",
              a: "Circa 5 km. Si possono percorrere a piedi o in bici lungo la passeggiata a lago, pianeggiante, oppure in battello dal porto di Lazise.",
            },
            {
              q: "Dove dormire vicino a Lazise?",
              a: "Fuori dal centro si trova più tranquillità e spazio. Il Relais del Sol, a Pacengo di Lazise, è a 8 minuti d'auto dal centro, con camere vista lago, piscina e un parco di 13 ettari.",
            },
          ],
        },
        { type: "h2", text: "Dormire a due passi da Lazise" },
        {
          type: "p",
          text: "Il Relais del Sol è un agriturismo a gestione familiare sulle colline di Pacengo: la sera torni dal lungolago di Lazise e trovi silenzio, il parco e la vista sul lago. Scegli tra le [camere vista lago](/camere/camera-superior-vista-lago), le [family suite](/camere/family-suite-vista-lago) e le altre [camere](/camere), e prenota sul sito ufficiale per avere il miglior prezzo.",
        },
      ],
    },
    en: {
      title: "Things to do in Lazise: a guide to the medieval village on Lake Garda",
      metaTitle: "Things to do in Lazise: old town, castle, lakefront and beaches",
      description:
        "What to see and do in Lazise on Lake Garda: the walls and Scaliger castle, the old harbour and Venetian Customs House, the lakeside walk to Bardolino, beaches, the Wednesday market, evenings, kids and rainy days.",
      excerpt:
        "Medieval walls, the little harbour, the lakeside path to Bardolino and the Wednesday market: everything worth seeing in Lazise, even if you only have one day.",
      category: "Lazise",
      imageAlt: "The old harbour of Lazise with boats and colourful houses along the lakefront",
      blocks: [
        {
          type: "p",
          text: "**Lazise** is one of the loveliest villages on the Verona shore of Lake Garda: an old town enclosed by medieval walls, a little harbour lined with colourful houses and a lakefront that invites you to stroll from morning to sunset. It is small, easy to explore on foot and best enjoyed at a slow pace.",
        },
        {
          type: "p",
          text: "Relais del Sol is in **Pacengo di Lazise**, 8 minutes from the centre: Lazise is where we go shopping, grab an ice cream and walk in the evening. Here is what we recommend to our guests, with the main sights, the most common questions and a few practical tips.",
        },
        {
          type: "facts",
          title: "Lazise at a glance",
          items: [
            "**From Relais del Sol**: 4.6 km · 8 minutes by car",
            "**Time needed**: half a day for the old town, a full day with the lake and lakefront",
            "**Weekly market**: Wednesday morning",
            "**Don't miss**: the walls and Scaliger Castle, the old harbour, the Venetian Customs House, San Nicolò",
            "**On foot or by bike**: a flat lakeside path to Bardolino, about 5 km",
            "**By boat**: ferries from the harbour to Bardolino, Garda and other lake villages",
          ],
        },
        { type: "h2", text: "The old town and the medieval walls" },
        {
          type: "p",
          text: "The centre of Lazise is still surrounded by its **crenellated walls**, with towers and three gates: **Porta Cansignorio**, **Porta San Zeno** and **Porta del Lion**. Cars are not allowed inside the walls, so you wander through lanes, small squares, shops and pastel-coloured houses, with the lake appearing at the end of every street.",
        },
        {
          type: "p",
          text: "Tip: besides the heart of the village, walk around the outside of the walls. In about an hour at a relaxed pace you will see the towers, the best-preserved stretches of the walls and views of the castle, away from the crowds on the lakefront.",
        },
        { type: "h2", text: "The Scaliger Castle" },
        {
          type: "p",
          text: "The **Scaliger Castle** in the southern part of the village is the symbol of Lazise: its crenellated towers date back to the rule of the Scaligeri, the lords of Verona who fortified many towns around the lake. The castle is **privately owned** and the inside cannot be visited, but it is well worth walking around it: the towers and walls look their best from outside, especially in the late afternoon light.",
        },
        { type: "h2", text: "The old harbour, the Venetian Customs House and San Nicolò" },
        {
          type: "p",
          text: "The **old harbour** is the most photographed spot in Lazise: wooden boats, cafés under the arcades and colourful houses reflected in the water. On one side stands the **Dogana Veneta**, the old building that served as an arsenal and customs house for lake trade under the Republic of Venice; today it hosts exhibitions and events.",
        },
        {
          type: "p",
          text: "Right on the harbour you will also find the small **church of San Nicolò**, Romanesque in origin, with remains of 14th-century frescoes from the school of Giotto. Near Porta San Zeno is the parish church of **Santi Zenone e Martino**.",
        },
        { type: "h2", text: "Why Lazise is called Italy's first free municipality" },
        {
          type: "p",
          text: "In **983** Emperor **Otto II** granted Lazise a set of privileges by charter: the right to build fortifications, to fish and to levy duties on lake traffic. That is why the village proudly calls itself **Italy's first free municipality** (\"primo libero comune d'Italia\"). Historians debate how far those privileges amounted to a true commune, but the charter remains rare evidence of how important Lazise already was a thousand years ago.",
        },
        { type: "h2", text: "The lakefront and the walk to Bardolino" },
        {
          type: "p",
          text: "From the centre, the **lakeside path to Bardolino** runs for about **5 flat kilometres** past small beaches, olive trees and lawns. You can walk it, cycle it or push a pram along it. On foot it takes a little over an hour each way; if you want to keep going, it continues to **Garda**. In the warmer months you can take the ferry back.",
        },
        {
          type: "p",
          text: "The lakefront is lovely at any time of day, but the best moment is **sunset**, when the sun drops behind the western shore and the lake turns orange.",
        },
        { type: "h2", text: "Lazise beaches" },
        {
          type: "p",
          text: "Just outside the centre is **Lazise beach**, long and partly sandy, with free stretches and areas with sunbeds and umbrellas. Along the shore towards Bardolino and Pacengo you will find small pebble beaches and shady lawns, perfect if you prefer a quieter spot. **Pacengo beach** is a 15-minute walk from Relais del Sol. If you are travelling with a dog, beach access rules vary from one stretch to another, so check the signs on site.",
        },
        { type: "h2", text: "The Wednesday market" },
        {
          type: "p",
          text: "On **Wednesday mornings** Lazise holds its weekly market, popular with locals and visitors alike: clothing, leather goods, household items, fruit and local products. Arrive early, because in high season car parks fill up quickly. The other markets in the area, day by day, are listed on our [Experiences](/en/experiences#territorio) page.",
        },
        { type: "h2", text: "Lazise in the evening" },
        {
          type: "p",
          text: "Evening is when Lazise shines: the illuminated walls, restaurants and bars around the harbour, and the lakefront stroll with an ice cream in hand. It is the perfect place for an **aperitivo with a glass of Bardolino or Chiaretto**, the wines of these hills, and a dinner of lake fish. In summer the centre often hosts concerts, markets and events: the up-to-date calendar is on the [Comune di Lazise](" + COMUNE + ") website.",
        },
        { type: "h2", text: "Lazise with kids" },
        {
          type: "list",
          items: [
            "**The car-free old town** lets children walk safely through the lanes and squares.",
            "**The harbour and a boat trip**: watching the boats is fun, getting on one is an adventure.",
            "**The walk towards Bardolino** is flat and suitable for bikes and prams.",
            "**The theme parks are very close**: Movieland and Caneva Aquapark are between Lazise and Pacengo, Gardaland just a few minutes away. More in our guide [Lake Garda with kids](/en/lake-garda-guide/lake-garda-with-kids-where-to-stay-gardaland-movieland).",
          ],
        },
        { type: "h2", text: "Things to do in Lazise when it rains" },
        {
          type: "list",
          items: [
            "**Villa dei Cedri thermal park** in Colà di Lazise: warm outdoor thermal pools, lovely even under grey skies and on autumn evenings. It is 4 minutes by car from Relais del Sol. [villadeicedri.it](" + VILLA_DEI_CEDRI + ")",
            "**SEA LIFE Aquarium Gardaland**, indoors and just a few minutes from Lazise.",
            "**Zeni Wine Museum** in Bardolino, to discover how the local wine is made. [museodelvino.it](" + MUSEO_DEL_VINO + ")",
            "**Verona**, about 35 minutes away: the Arena, Piazza delle Erbe and the arcaded streets are perfect for a rainy day.",
          ],
        },
        { type: "h2", text: "Lazise in one day: a suggested itinerary" },
        {
          type: "list",
          items: [
            "**Morning**: coffee on the old harbour, a walk through the old town and around the walls, a look at the Scaliger Castle and San Nicolò. If it is Wednesday, the market.",
            "**Lunch**: in the centre, or a picnic on the lakeside lawns.",
            "**Afternoon**: walk or cycle towards Bardolino, or a few hours on the beach. You can also take the ferry one way and walk back.",
            "**Evening**: sunset aperitivo on the lakefront and dinner in the old town, with the walls lit up.",
          ],
        },
        { type: "h2", text: "Practical tips: parking and getting there" },
        {
          type: "p",
          text: "The old town is pedestrian-only; you park in the **paid car parks just outside the walls**, a few minutes' walk from the harbour. In summer and on market days it is best to arrive early in the morning, or leave the car behind: from our area Lazise is just minutes away by bike. Ferries run by [Navigazione Lago di Garda](" + NAVIGAZIONE + ") leave from the harbour to the other lake villages.",
        },
        {
          type: "faq",
          title: "Frequently asked questions",
          items: [
            {
              q: "What can you see in Lazise in one day?",
              a: "The old town with its walls and three gates, the Scaliger Castle (from outside), the old harbour with the Venetian Customs House and the church of San Nicolò, then the lakeside walk towards Bardolino and the sunset over the lake.",
            },
            {
              q: "Can you visit the Scaliger Castle in Lazise?",
              a: "No, the castle is privately owned and the inside is not open to the public. You can still admire it from outside by walking along the village walls.",
            },
            {
              q: "What day is market day in Lazise?",
              a: "Lazise's weekly market is on Wednesday morning. There is a market in a nearby village almost every day, for example in Pacengo on Saturday.",
            },
            {
              q: "Why is Lazise called Italy's first free municipality?",
              a: "Because in 983 Emperor Otto II granted it privileges by charter, such as the right to build fortifications, to fish and to levy duties. It is a cherished local tradition, although historians debate the exact meaning of those privileges.",
            },
            {
              q: "How far is Lazise from Bardolino?",
              a: "About 5 km. You can walk or cycle along the flat lakeside path, or take the ferry from Lazise harbour.",
            },
            {
              q: "Where to stay near Lazise?",
              a: "Outside the centre you get more peace and space. Relais del Sol, in Pacengo di Lazise, is 8 minutes by car from the old town, with lake-view rooms, a pool and 13 hectares of grounds.",
            },
          ],
        },
        { type: "h2", text: "Stay just minutes from Lazise" },
        {
          type: "p",
          text: "Relais del Sol is a family-run agriturismo on the Pacengo hills: in the evening you come back from the Lazise lakefront to silence, green grounds and a view of the lake. Choose from the [lake-view rooms](/en/rooms/superior-room-lake-view), the [family suites](/en/rooms/family-suite-lake-view) and our other [rooms](/en/rooms), and book on the official website for the best price.",
        },
      ],
    },
    de: {
      title: "Lazise Sehenswürdigkeiten: Reiseführer für das mittelalterliche Städtchen am Gardasee",
      metaTitle: "Lazise Sehenswürdigkeiten: Altstadt, Burg, Uferpromenade und Strand",
      description:
        "Was man in Lazise am Gardasee sehen und unternehmen kann: Stadtmauer und Skaligerburg, alter Hafen und Dogana Veneta, Uferweg nach Bardolino, Strände, Markt am Mittwoch, abends, mit Kindern und bei Regen.",
      excerpt:
        "Mittelalterliche Mauern, der kleine Hafen, der Uferweg nach Bardolino und der Markt am Mittwoch: alles, was man in Lazise sehen sollte – auch an nur einem Tag.",
      category: "Lazise",
      imageAlt: "Der alte Hafen von Lazise mit Booten und bunten Häusern an der Uferpromenade",
      blocks: [
        {
          type: "p",
          text: "**Lazise** ist einer der schönsten Orte am Veroneser Ufer des Gardasees: eine Altstadt innerhalb mittelalterlicher Mauern, ein kleiner Hafen mit bunten Häusern direkt am Wasser und eine Uferpromenade, die vom Morgen bis zum Sonnenuntergang zum Bummeln einlädt. Lazise ist klein, lässt sich gut zu Fuß entdecken und zeigt sich am schönsten, wenn man sich Zeit nimmt.",
        },
        {
          type: "p",
          text: "Das Relais del Sol liegt in **Pacengo di Lazise**, 8 Minuten vom Zentrum entfernt: In Lazise kaufen wir ein, holen uns ein Eis und gehen abends spazieren. Hier ist, was wir unseren Gästen empfehlen – mit den Sehenswürdigkeiten, den häufigsten Fragen und praktischen Tipps.",
        },
        {
          type: "facts",
          title: "Lazise auf einen Blick",
          items: [
            "**Vom Relais del Sol**: 4,6 km · 8 Minuten mit dem Auto",
            "**Zeitbedarf**: ein halber Tag für die Altstadt, ein ganzer Tag mit See und Uferpromenade",
            "**Wochenmarkt**: Mittwochvormittag",
            "**Nicht verpassen**: Stadtmauer und Skaligerburg, alter Hafen, Dogana Veneta, San Nicolò",
            "**Zu Fuß oder mit dem Rad**: flacher Uferweg nach Bardolino, etwa 5 km",
            "**Mit dem Schiff**: vom Hafen nach Bardolino, Garda und in andere Orte am See",
          ],
        },
        { type: "h2", text: "Die Altstadt und die mittelalterliche Stadtmauer" },
        {
          type: "p",
          text: "Das Zentrum von Lazise ist noch immer von der **zinnenbewehrten Stadtmauer** umgeben, mit Türmen und drei Toren: **Porta Cansignorio**, **Porta San Zeno** und **Porta del Lion**. Innerhalb der Mauern fahren keine Autos: Man schlendert durch Gassen, über kleine Plätze, vorbei an Läden und pastellfarbenen Häusern – und am Ende jeder Straße taucht der See auf.",
        },
        {
          type: "p",
          text: "Unser Tipp: Gehen Sie nicht nur durch den Ortskern, sondern auch außen um die Mauern herum. In etwa einer Stunde gemütlichen Spaziergangs sehen Sie die Türme, die am besten erhaltenen Mauerabschnitte und schöne Blicke auf die Burg – abseits des Trubels an der Promenade.",
        },
        { type: "h2", text: "Die Skaligerburg" },
        {
          type: "p",
          text: "Die **Skaligerburg** (Castello Scaligero) im Süden des Ortes ist das Wahrzeichen von Lazise: Ihre Zinnentürme gehen auf die Herrschaft der Scaliger zurück, der Herren von Verona, die viele Orte am See befestigten. Die Burg ist in **Privatbesitz** und kann innen nicht besichtigt werden, doch ein Rundgang lohnt sich: Türme und Mauern wirken von außen am schönsten, besonders im Licht des späten Nachmittags.",
        },
        { type: "h2", text: "Der alte Hafen, die Dogana Veneta und San Nicolò" },
        {
          type: "p",
          text: "Der **alte Hafen** ist das meistfotografierte Motiv von Lazise: Holzboote, Cafés unter den Arkaden und bunte Häuser, die sich im Wasser spiegeln. An einer Seite steht die **Dogana Veneta**, das alte Gebäude, das zur Zeit der Republik Venedig als Arsenal und Zollhaus für den Handel auf dem See diente; heute finden dort Ausstellungen und Veranstaltungen statt.",
        },
        {
          type: "p",
          text: "Direkt am Hafen liegt auch die kleine **Kirche San Nicolò**, romanischen Ursprungs, mit Resten von Fresken aus dem 14. Jahrhundert aus der Schule Giottos. In der Nähe der Porta San Zeno steht die Pfarrkirche **Santi Zenone e Martino**.",
        },
        { type: "h2", text: "Warum Lazise als erste freie Gemeinde Italiens gilt" },
        {
          type: "p",
          text: "Im Jahr **983** gewährte Kaiser **Otto II.** Lazise per Urkunde eine Reihe von Privilegien: das Recht, sich zu befestigen, zu fischen und Zölle auf den Handel am See zu erheben. Deshalb trägt der Ort stolz den Titel **erste freie Gemeinde Italiens** (\"primo libero comune d'Italia\"). Historiker diskutieren, wie weit diese Privilegien einer echten Gemeinde entsprachen – die Urkunde bleibt dennoch ein seltenes Zeugnis dafür, wie bedeutend Lazise schon vor tausend Jahren war.",
        },
        { type: "h2", text: "Die Uferpromenade und der Weg nach Bardolino" },
        {
          type: "p",
          text: "Vom Zentrum aus führt der **Uferweg nach Bardolino** über rund **5 flache Kilometer** vorbei an kleinen Stränden, Olivenbäumen und Wiesen – zu Fuß, mit dem Fahrrad oder mit dem Kinderwagen. Zu Fuß braucht man etwas mehr als eine Stunde pro Strecke; wer weiterlaufen möchte, kommt bis nach **Garda**. In der warmen Jahreszeit kann man mit dem Schiff zurückfahren.",
        },
        {
          type: "p",
          text: "Die Promenade ist zu jeder Tageszeit schön, der beste Moment ist aber der **Sonnenuntergang**, wenn die Sonne hinter dem Westufer versinkt und sich der See orange färbt.",
        },
        { type: "h2", text: "Die Strände von Lazise" },
        {
          type: "p",
          text: "Direkt außerhalb des Zentrums liegt der **Strand von Lazise**, lang und teilweise sandig, mit freien Abschnitten und Bereichen mit Liegen und Sonnenschirmen. Entlang des Ufers Richtung Bardolino und Pacengo wechseln sich kleine Kiesstrände und schattige Wiesen ab – ideal, wenn Sie es ruhiger mögen. Der **Strand von Pacengo** ist 15 Gehminuten vom Relais del Sol entfernt. Wer mit Hund reist: Die Regeln für den Strandzugang unterscheiden sich von Abschnitt zu Abschnitt, achten Sie auf die Schilder vor Ort.",
        },
        { type: "h2", text: "Der Markt am Mittwoch" },
        {
          type: "p",
          text: "Am **Mittwochvormittag** findet in Lazise der Wochenmarkt statt, bei Einheimischen und Urlaubern gleichermaßen beliebt: Kleidung, Lederwaren, Haushaltswaren, Obst und regionale Produkte. Kommen Sie früh, denn in der Hochsaison sind die Parkplätze schnell voll. Die anderen Märkte der Umgebung, Tag für Tag, finden Sie auf unserer Seite [Erlebnisse](/de/erlebnisse#territorio).",
        },
        { type: "h2", text: "Lazise am Abend" },
        {
          type: "p",
          text: "Am Abend zeigt sich Lazise von seiner besten Seite: beleuchtete Mauern, Restaurants und Bars am Hafen und der Bummel an der Promenade mit einem Eis in der Hand. Der perfekte Ort für einen **Aperitivo mit einem Glas Bardolino oder Chiaretto**, den Weinen dieser Hügel, und ein Abendessen mit Fisch aus dem See. Im Sommer gibt es im Zentrum oft Konzerte, Märkte und Veranstaltungen: den aktuellen Kalender finden Sie auf der Website der [Gemeinde Lazise](" + COMUNE + ").",
        },
        { type: "h2", text: "Lazise mit Kindern" },
        {
          type: "list",
          items: [
            "**Die autofreie Altstadt**: Kinder können sicher durch Gassen und über Plätze laufen.",
            "**Der Hafen und eine Schifffahrt**: Boote anschauen macht Spaß, mitfahren ist ein Abenteuer.",
            "**Der Weg Richtung Bardolino** ist flach und auch für Fahrräder und Kinderwagen geeignet.",
            "**Die Freizeitparks sind ganz nah**: Movieland und Caneva Aquapark liegen zwischen Lazise und Pacengo, Gardaland nur wenige Minuten entfernt. Mehr dazu in unserem Ratgeber [Gardasee mit Kindern](/de/gardasee-reisefuehrer/gardasee-mit-kindern-unterkunft-gardaland-movieland).",
          ],
        },
        { type: "h2", text: "Was tun in Lazise bei Regen" },
        {
          type: "list",
          items: [
            "**Thermalpark Villa dei Cedri** in Colà di Lazise: warme Thermalbecken im Freien, schön auch bei grauem Himmel und an Herbstabenden. Mit dem Auto 4 Minuten vom Relais del Sol. [villadeicedri.it](" + VILLA_DEI_CEDRI + ")",
            "**SEA LIFE Aquarium Gardaland**, überdacht und nur wenige Minuten von Lazise entfernt.",
            "**Weinmuseum Zeni** in Bardolino, um zu erfahren, wie der Wein vom See entsteht. [museodelvino.it](" + MUSEO_DEL_VINO + ")",
            "**Verona**, etwa 35 Minuten entfernt: Arena, Piazza delle Erbe und die Arkaden der Altstadt sind ideal für einen Regentag.",
          ],
        },
        { type: "h2", text: "Lazise an einem Tag: ein Vorschlag" },
        {
          type: "list",
          items: [
            "**Vormittag**: Kaffee am alten Hafen, Rundgang durch die Altstadt und um die Mauern, ein Blick auf die Skaligerburg und San Nicolò. Wenn Mittwoch ist: der Markt.",
            "**Mittag**: im Zentrum oder als Picknick auf den Wiesen am Ufer.",
            "**Nachmittag**: zu Fuß oder mit dem Rad Richtung Bardolino, oder ein paar Stunden am Strand. Man kann auch mit dem Schiff hinfahren und zu Fuß zurückkehren.",
            "**Abend**: Aperitivo bei Sonnenuntergang an der Promenade und Abendessen in der Altstadt, mit den beleuchteten Mauern.",
          ],
        },
        { type: "h2", text: "Praktische Tipps: Parken und Anreise" },
        {
          type: "p",
          text: "Die Altstadt ist Fußgängerzone; geparkt wird auf den **gebührenpflichtigen Parkplätzen direkt vor den Mauern**, wenige Gehminuten vom Hafen. Im Sommer und an Markttagen kommen Sie am besten früh am Morgen – oder lassen das Auto stehen: Von uns aus ist Lazise auch mit dem Fahrrad in wenigen Minuten erreichbar. Vom Hafen fahren die Schiffe der [Navigazione Lago di Garda](" + NAVIGAZIONE + ") zu den anderen Orten am See.",
        },
        {
          type: "faq",
          title: "Häufige Fragen",
          items: [
            {
              q: "Was kann man in Lazise an einem Tag sehen?",
              a: "Die Altstadt mit Stadtmauer und drei Toren, die Skaligerburg (von außen), den alten Hafen mit der Dogana Veneta und der Kirche San Nicolò, dann den Uferweg Richtung Bardolino und den Sonnenuntergang über dem See.",
            },
            {
              q: "Kann man die Skaligerburg in Lazise besichtigen?",
              a: "Nein, die Burg ist in Privatbesitz und innen nicht öffentlich zugänglich. Von außen lässt sie sich aber bei einem Spaziergang entlang der Stadtmauer gut bewundern.",
            },
            {
              q: "Wann ist Markt in Lazise?",
              a: "Der Wochenmarkt in Lazise ist am Mittwochvormittag. In der Umgebung gibt es fast jeden Tag einen Markt, zum Beispiel samstags in Pacengo.",
            },
            {
              q: "Warum gilt Lazise als erste freie Gemeinde Italiens?",
              a: "Weil Kaiser Otto II. dem Ort 983 per Urkunde Privilegien gewährte, etwa das Recht, sich zu befestigen, zu fischen und Zölle zu erheben. Eine gepflegte Tradition, auch wenn Historiker die genaue Bedeutung dieser Privilegien diskutieren.",
            },
            {
              q: "Wie weit ist Lazise von Bardolino entfernt?",
              a: "Etwa 5 km. Man kann die Strecke auf dem flachen Uferweg zu Fuß oder mit dem Rad zurücklegen oder vom Hafen in Lazise das Schiff nehmen.",
            },
            {
              q: "Wo übernachten in der Nähe von Lazise?",
              a: "Außerhalb des Zentrums findet man mehr Ruhe und Platz. Das Relais del Sol in Pacengo di Lazise liegt 8 Autominuten von der Altstadt entfernt, mit Zimmern mit Seeblick, Pool und 13 Hektar Park.",
            },
          ],
        },
        { type: "h2", text: "Übernachten nur wenige Minuten von Lazise" },
        {
          type: "p",
          text: "Das Relais del Sol ist ein familiengeführter Agriturismo auf den Hügeln von Pacengo: Abends kommen Sie von der Promenade in Lazise zurück in die Stille, ins Grüne und mit Blick auf den See. Wählen Sie zwischen den [Zimmern mit Seeblick](/de/zimmer/superior-zimmer-seeblick), den [Familiensuiten](/de/zimmer/familiensuite-seeblick) und unseren weiteren [Zimmern](/de/zimmer), und buchen Sie auf der offiziellen Website zum besten Preis.",
        },
      ],
    },
  },
};
