import { guidePath, guideSlugs, type Locale } from "@/i18n/config";
import { FAMILY_GUIDE } from "./guides/lago-di-garda-con-bambini";
import { LAZISE_GUIDE } from "./guides/cosa-vedere-a-lazise";

/**
 * Blocchi di contenuto di un articolo.
 * Nel testo sono supportati link `[testo](url)` e grassetto `**testo**`.
 */
export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "facts"; title: string; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "faq"; title: string; items: { q: string; a: string }[] };

export interface GuideTranslation {
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  imageAlt: string;
  blocks: GuideBlock[];
}

export interface Guide {
  id: string;
  /** Data di pubblicazione (YYYY-MM-DD). */
  date: string;
  updated?: string;
  image: {
    src: string;
    width: number;
    height: number;
    /** Credito obbligatorio per foto con licenza Creative Commons. */
    credit?: { author: string; license: string; url: string };
  };
  /** In evidenza: mostrato prima degli altri (es. articoli stagionali). */
  pinned?: boolean;
  translations: Record<Locale, GuideTranslation>;
}

const ZUCCALAND = "https://www.visitverona.it/it/eventi/zuccaland";
const SAN_ZENO =
  "https://comune.sanzenodimontagna.vr.it/notizie/3659568/tornano-castagne-16-ottobre-tre-weekend-festa";
const GARDALAND = "https://www.gardaland.it/esplora-gardaland/eventi-aperture-speciali/magic-halloween/";

export const guides: Guide[] = [
  LAZISE_GUIDE,
  FAMILY_GUIDE,
  {
    id: "halloween-autunno-2026",
    date: "2026-10-21",
    // Stagionale: in evidenza fino a inizio novembre, poi togliere `pinned`
    pinned: true,
    image: { src: "/images/guide/zucche-relais-del-sol.jpg", width: 2000, height: 1500 },
    translations: {
      it: {
        title: "Halloween e sapori d'autunno sul Lago di Garda: un weekend tra zucche, borghi e tradizioni",
        metaTitle: "Halloween sul Lago di Garda 2026: weekend d'autunno tra zucche e castagne",
        description:
          "Zuccaland a Villafranca, la Festa del Marrone di San Zeno di Montagna e Magic Halloween a Gardaland: idee e date per un weekend d'autunno 2026 sul Lago di Garda.",
        excerpt:
          "Zucche, castagne, borghi e Halloween: le date dell'autunno 2026 e il nostro itinerario per un weekend sul Lago di Garda.",
        category: "Eventi d'autunno",
        imageAlt: "Le zucche del nostro orto con lanterne davanti alla casa padronale del Relais del Sol",
        blocks: [
          { type: "p", text: "**Le zucche non fanno soltanto paura. Raccontano anche il sapore dell'autunno.**" },
          {
            type: "p",
            text: "Al Relais del Sol, a Pacengo di Lazise, Halloween comincia molto prima del 31 ottobre. Comincia nel nostro orto, dove coltiviamo le zucche che, con le loro forme generose e i colori vivaci, annunciano l'arrivo di una delle stagioni più affascinanti del Lago di Garda.",
          },
          {
            type: "p",
            text: "L'autunno è il momento in cui la campagna cambia volto. I vigneti si tingono di sfumature dorate, gli ulivi accompagnano gli ultimi raccolti e nei borghi tornano le feste dedicate ai prodotti della terra. È anche il periodo ideale per scoprire il Garda da una prospettiva diversa, lontano dall'affollamento estivo, tra tradizioni gastronomiche, passeggiate panoramiche e piccoli piaceri di stagione.",
          },
          { type: "p", text: "Perché non approfittarne per organizzare un **weekend d'autunno sul Lago di Garda**?" },
          {
            type: "facts",
            title: "Le date da segnare (autunno 2026)",
            items: [
              "**Zuccaland**, Villafranca di Verona: 24–25 ottobre, 31 ottobre–1° novembre, 7–8 novembre · ingresso libero",
              "**Festa del Marrone di San Zeno DOP**, San Zeno di Montagna: 16–18, 22–25 ottobre e 30 ottobre–1° novembre",
              "**Magic Halloween a Gardaland**: fino al 1° novembre · Venerdì da Paura 23 e 30 ottobre · Halloween Party 31 ottobre",
            ],
          },
          { type: "h2", text: "Le zucche del nostro orto: l'autunno comincia dalla terra" },
          {
            type: "p",
            text: "Al Relais del Sol la stagionalità non è soltanto un'ispirazione: fa parte della nostra vita quotidiana. Coltiviamo le nostre verdure, produciamo olio extravergine di oliva e vino e viviamo a stretto contatto con i ritmi della campagna gardesana.",
          },
          {
            type: "p",
            text: "In ottobre sono le zucche a prendersi la scena. Simbolo di Halloween, certo, ma soprattutto prodotto autentico della nostra terra e ingrediente protagonista di tante ricette della tradizione autunnale. Ed è proprio da qui che vogliamo partire per suggerirti qualche esperienza nei dintorni.",
          },
          { type: "h2", text: "Zuccaland a Villafranca: un mondo dedicato alle zucche" },
          {
            type: "p",
            text: "Se ami l'atmosfera di Halloween, segna sul calendario i weekend del **24–25 ottobre**, del **31 ottobre–1° novembre** e del **7–8 novembre 2026**. Il Castello Scaligero di Villafranca di Verona, a circa 30 minuti d'auto dal Relais, ospita Zuccaland, il festival d'autunno che celebra la zucca tra gastronomia, laboratori creativi, mercatini, intrattenimento e allestimenti a tema.",
          },
          {
            type: "p",
            text: "Un'occasione divertente per le famiglie, ma anche per chi ama scoprire i prodotti di stagione: cucina a base di zucca, laboratori di intaglio e pittura, spettacoli e, il **31 ottobre**, una grande festa di Halloween. L'ingresso è libero, dalle 10:00 alle 23:00 (il 31 ottobre fino all'01:00).",
          },
          { type: "p", text: "[Scopri il programma di Zuccaland su Visit Verona →](" + ZUCCALAND + ")" },
          { type: "h2", text: "A San Zeno di Montagna si celebrano castagne e marroni DOP" },
          {
            type: "p",
            text: "Dalle zucche alle castagne il passo è breve, almeno per chi ama i sapori dell'autunno. A San Zeno di Montagna, sulle pendici del Monte Baldo e a circa 35 minuti d'auto dal Relais, torna la tradizionale **Festa del Marrone di San Zeno DOP e Festa delle Castagne**.",
          },
          {
            type: "p",
            text: "L'edizione 2026 anima piazza Schena nei fine settimana del **16–18 ottobre**, **22–25 ottobre** e **30 ottobre–1° novembre**, con il mercato del marrone DOP, specialità gastronomiche, i prodotti dei castanicoltori e appuntamenti dedicati alla tradizione locale. È l'occasione per passeggiare in un borgo di montagna, ammirare i colori autunnali del Baldo e scoprire uno dei prodotti più caratteristici di questo territorio.",
          },
          { type: "p", text: "[Consulta il programma sul sito del Comune di San Zeno di Montagna →](" + SAN_ZENO + ")" },
          { type: "h2", text: "E per chi ama Halloween? C'è anche Gardaland" },
          {
            type: "p",
            text: "A soli 2 km dal Relais del Sol, Gardaland si trasforma per **Magic Halloween**, in programma fino al **1° novembre 2026**. Decorazioni a tema, spettacoli, attrazioni e atmosfere misteriose rendono il parco una tappa perfetta per chi viaggia con bambini o desidera aggiungere un pizzico di adrenalina al weekend.",
          },
          {
            type: "p",
            text: "Sono previsti anche i **Venerdì da Paura** del 23 e 30 ottobre (dalle 17:00 alle 22:00) e la grande festa di Halloween del **31 ottobre**.",
          },
          { type: "p", text: "[Scopri Magic Halloween sul sito di Gardaland →](" + GARDALAND + ")" },
          { type: "h2", text: "Il nostro suggerimento per un weekend d'autunno sul Garda" },
          { type: "h3", text: "Sabato: prodotti locali, zucche e atmosfere gardesane" },
          {
            type: "p",
            text: "Comincia la giornata con una passeggiata al **mercato di Pacengo**, dove il sabato si ritrova un piccolo spaccato della vita locale. Puoi poi dedicare qualche ora a Zuccaland, a Villafranca, prima di raggiungere il Relais del Sol per il tuo soggiorno.",
          },
          {
            type: "p",
            text: "Nel tardo pomeriggio concediti una visita a **Lazise**, a 8 minuti d'auto: il centro storico, le mura medievali e il lungolago hanno un fascino particolare quando la luce autunnale accompagna il tramonto.",
          },
          { type: "h3", text: "Domenica: colazione in agriturismo e sapori del Monte Baldo" },
          {
            type: "p",
            text: "Dopo la [colazione al Relais](/esperienze#colazione), parti alla scoperta di San Zeno di Montagna e della sua Festa del Marrone. Tra prodotti tipici, mercatini e scorci panoramici, potrai vivere una domenica dedicata alle tradizioni del territorio.",
          },
          {
            type: "p",
            text: "E se preferisci un weekend tutto dedicato ad Halloween, puoi sostituire una delle escursioni con una giornata a Gardaland.",
          },
          { type: "h2", text: "Relais del Sol: il tuo soggiorno d'autunno tra campagna e Lago di Garda" },
          {
            type: "p",
            text: "La nostra posizione a Pacengo di Lazise è ideale per alternare le escursioni alla scoperta del territorio con il piacere di soggiornare in un agriturismo di charme immerso nella natura. Tra vigneti, ulivi e un grande parco, il Relais del Sol offre un'accoglienza autentica, [camere curate](/camere) e un'atmosfera country-romantica.",
          },
          {
            type: "p",
            text: "Ottobre è anche l'ultimo mese della nostra stagione 2026: da novembre ci prenderemo una pausa invernale per tornare ad accoglierti nella primavera 2027. Prima di salutarci, però, c'è ancora tempo per un ultimo weekend sul Lago di Garda, tra i colori dell'autunno, i profumi della campagna e le tradizioni che rendono speciale questo territorio.",
          },
          { type: "highlight", text: "🎃 Le nostre zucche ti aspettano. E noi anche." },
        ],
      },
      en: {
        title: "Halloween and autumn flavours on Lake Garda: a weekend of pumpkins, villages and traditions",
        metaTitle: "Halloween on Lake Garda 2026: an autumn weekend of pumpkins and chestnuts",
        description:
          "Zuccaland in Villafranca, the Chestnut Festival in San Zeno di Montagna and Magic Halloween at Gardaland: ideas and dates for an autumn 2026 weekend on Lake Garda.",
        excerpt:
          "Pumpkins, chestnuts, villages and Halloween: the autumn 2026 dates and our itinerary for a weekend on Lake Garda.",
        category: "Autumn events",
        imageAlt: "Pumpkins from our garden with lanterns in front of the Relais del Sol manor house",
        blocks: [
          { type: "p", text: "**Pumpkins aren't only scary. They also tell the taste of autumn.**" },
          {
            type: "p",
            text: "At Relais del Sol, in Pacengo di Lazise, Halloween starts long before 31 October. It starts in our vegetable garden, where we grow the pumpkins whose generous shapes and bright colours announce one of the most fascinating seasons on Lake Garda.",
          },
          {
            type: "p",
            text: "Autumn is when the countryside changes its face. The vineyards turn golden, the olive trees see the last harvests and the villages bring back their festivals dedicated to local produce. It's also the perfect time to discover Lake Garda from a different perspective, away from the summer crowds, among food traditions, scenic walks and small seasonal pleasures.",
          },
          { type: "p", text: "So why not plan an **autumn weekend on Lake Garda**?" },
          {
            type: "facts",
            title: "Dates for your diary (autumn 2026)",
            items: [
              "**Zuccaland**, Villafranca di Verona: 24–25 October, 31 October–1 November, 7–8 November · free entry",
              "**San Zeno PDO Chestnut Festival**, San Zeno di Montagna: 16–18, 22–25 October and 30 October–1 November",
              "**Magic Halloween at Gardaland**: until 1 November · Scary Fridays 23 and 30 October · Halloween Party 31 October",
            ],
          },
          { type: "h2", text: "Pumpkins from our garden: autumn starts from the land" },
          {
            type: "p",
            text: "At Relais del Sol seasonality isn't just an inspiration: it's part of our daily life. We grow our own vegetables, produce extra virgin olive oil and wine and live in close contact with the rhythms of the Garda countryside.",
          },
          {
            type: "p",
            text: "In October the pumpkins take centre stage. A symbol of Halloween, of course, but above all a genuine product of our land and the star of many traditional autumn recipes. And that's where we want to start to suggest a few experiences nearby.",
          },
          { type: "h2", text: "Zuccaland in Villafranca: a world of pumpkins" },
          {
            type: "p",
            text: "If you love the Halloween atmosphere, mark the weekends of **24–25 October**, **31 October–1 November** and **7–8 November 2026** in your calendar. The Scaliger Castle in Villafranca di Verona, about 30 minutes by car from the Relais, hosts Zuccaland, an autumn festival celebrating pumpkins with food, creative workshops, markets, entertainment and themed decorations.",
          },
          {
            type: "p",
            text: "A fun day out for families and for anyone who loves seasonal produce: pumpkin dishes, carving and painting workshops, shows and, on **31 October**, a big Halloween party. Entry is free, from 10:00 to 23:00 (until 01:00 on 31 October).",
          },
          { type: "p", text: "[See the Zuccaland programme on Visit Verona (in Italian) →](" + ZUCCALAND + ")" },
          { type: "h2", text: "San Zeno di Montagna celebrates PDO chestnuts" },
          {
            type: "p",
            text: "From pumpkins to chestnuts is a short step for lovers of autumn flavours. In San Zeno di Montagna, on the slopes of Monte Baldo and about 35 minutes by car from the Relais, the traditional **San Zeno PDO Chestnut Festival** (Festa del Marrone e Festa delle Castagne) is back.",
          },
          {
            type: "p",
            text: "The 2026 edition fills Piazza Schena on the weekends of **16–18 October**, **22–25 October** and **30 October–1 November**, with the PDO chestnut market, local specialities, products from the chestnut growers and events celebrating local tradition. It's a chance to stroll through a mountain village, admire the autumn colours of Monte Baldo and discover one of the area's most distinctive products.",
          },
          { type: "p", text: "[See the programme on the San Zeno di Montagna town website (in Italian) →](" + SAN_ZENO + ")" },
          { type: "h2", text: "And for Halloween lovers? There's Gardaland too" },
          {
            type: "p",
            text: "Just 2 km from Relais del Sol, Gardaland transforms for **Magic Halloween**, running until **1 November 2026**. Themed decorations, shows, rides and mysterious atmospheres make the park a perfect stop if you're travelling with children or want to add a touch of adrenaline to your weekend.",
          },
          {
            type: "p",
            text: "There are also the **Scary Fridays** (Venerdì da Paura) on 23 and 30 October (from 17:00 to 22:00) and the big Halloween party on **31 October**.",
          },
          { type: "p", text: "[Discover Magic Halloween on the Gardaland website →](" + GARDALAND + ")" },
          { type: "h2", text: "Our suggestion for an autumn weekend on Lake Garda" },
          { type: "h3", text: "Saturday: local produce, pumpkins and lakeside atmosphere" },
          {
            type: "p",
            text: "Start the day with a stroll around the **Pacengo market**, held on Saturdays and a little slice of local life. Then spend a few hours at Zuccaland in Villafranca before checking in at Relais del Sol.",
          },
          {
            type: "p",
            text: "In the late afternoon, visit **Lazise**, 8 minutes away by car: the historic centre, the medieval walls and the lakeside promenade are especially charming when the autumn light accompanies the sunset.",
          },
          { type: "h3", text: "Sunday: farmhouse breakfast and Monte Baldo flavours" },
          {
            type: "p",
            text: "After [breakfast at the Relais](/en/experiences#colazione), head to San Zeno di Montagna and its Chestnut Festival. With local products, markets and panoramic views, it's a Sunday devoted to the traditions of the area.",
          },
          {
            type: "p",
            text: "And if you'd rather spend the whole weekend on Halloween, swap one of the trips for a day at Gardaland.",
          },
          { type: "h2", text: "Relais del Sol: your autumn stay between countryside and Lake Garda" },
          {
            type: "p",
            text: "Our location in Pacengo di Lazise is ideal for combining trips around the area with the pleasure of staying at a charming agriturismo surrounded by nature. Among vineyards, olive trees and a large park, Relais del Sol offers genuine hospitality, [carefully furnished rooms](/en/rooms) and a romantic country atmosphere.",
          },
          {
            type: "p",
            text: "October is also the last month of our 2026 season: from November we take a winter break and will be back to welcome you in spring 2027. Before we say goodbye, there's still time for one last weekend on Lake Garda, among autumn colours, the scents of the countryside and the traditions that make this area special.",
          },
          { type: "highlight", text: "🎃 Our pumpkins are waiting for you. And so are we." },
        ],
      },
      de: {
        title: "Halloween und Herbstgenuss am Gardasee: ein Wochenende mit Kürbissen, Dörfern und Traditionen",
        metaTitle: "Halloween am Gardasee 2026: Herbstwochenende mit Kürbissen und Kastanien",
        description:
          "Zuccaland in Villafranca, das Kastanienfest in San Zeno di Montagna und Magic Halloween in Gardaland: Ideen und Termine für ein Herbstwochenende 2026 am Gardasee.",
        excerpt:
          "Kürbisse, Kastanien, Dörfer und Halloween: die Termine im Herbst 2026 und unser Tipp für ein Wochenende am Gardasee.",
        category: "Herbst-Events",
        imageAlt: "Kürbisse aus unserem Garten mit Laternen vor dem Herrenhaus des Relais del Sol",
        blocks: [
          { type: "p", text: "**Kürbisse machen nicht nur Angst. Sie erzählen auch vom Geschmack des Herbstes.**" },
          {
            type: "p",
            text: "Im Relais del Sol in Pacengo di Lazise beginnt Halloween lange vor dem 31. Oktober. Es beginnt in unserem Gemüsegarten, wo wir die Kürbisse anbauen, die mit ihren üppigen Formen und kräftigen Farben eine der schönsten Jahreszeiten am Gardasee ankündigen.",
          },
          {
            type: "p",
            text: "Im Herbst verändert das Land sein Gesicht. Die Weinberge färben sich golden, die Olivenbäume begleiten die letzten Ernten und in den Dörfern kehren die Feste rund um die Produkte der Region zurück. Es ist auch die ideale Zeit, den Gardasee aus einem anderen Blickwinkel zu entdecken – fernab vom Sommertrubel, zwischen kulinarischen Traditionen, Panoramawanderungen und kleinen Freuden der Saison.",
          },
          { type: "p", text: "Warum also nicht ein **Herbstwochenende am Gardasee** planen?" },
          {
            type: "facts",
            title: "Die Termine (Herbst 2026)",
            items: [
              "**Zuccaland**, Villafranca di Verona: 24.–25. Oktober, 31. Oktober–1. November, 7.–8. November · Eintritt frei",
              "**Fest der Marrone di San Zeno g.U.**, San Zeno di Montagna: 16.–18., 22.–25. Oktober und 30. Oktober–1. November",
              "**Magic Halloween in Gardaland**: bis 1. November · Gruselfreitage am 23. und 30. Oktober · Halloween-Party am 31. Oktober",
            ],
          },
          { type: "h2", text: "Kürbisse aus unserem Garten: Der Herbst beginnt in der Erde" },
          {
            type: "p",
            text: "Im Relais del Sol ist Saisonalität nicht nur Inspiration, sondern Teil unseres Alltags. Wir bauen unser eigenes Gemüse an, produzieren natives Olivenöl extra und Wein und leben im Rhythmus der Landschaft am Gardasee.",
          },
          {
            type: "p",
            text: "Im Oktober stehen die Kürbisse im Mittelpunkt. Natürlich ein Symbol für Halloween, aber vor allem ein echtes Produkt unserer Erde und Hauptzutat vieler traditioneller Herbstrezepte. Genau hier möchten wir beginnen, um Ihnen ein paar Erlebnisse in der Umgebung vorzuschlagen.",
          },
          { type: "h2", text: "Zuccaland in Villafranca: eine Welt voller Kürbisse" },
          {
            type: "p",
            text: "Wenn Sie die Halloween-Stimmung lieben, merken Sie sich die Wochenenden **24.–25. Oktober**, **31. Oktober–1. November** und **7.–8. November 2026** vor. Die Skaligerburg in Villafranca di Verona, etwa 30 Autominuten vom Relais entfernt, ist Schauplatz von Zuccaland, einem Herbstfestival rund um den Kürbis mit Gastronomie, Kreativworkshops, Märkten, Unterhaltung und herbstlicher Dekoration.",
          },
          {
            type: "p",
            text: "Ein schöner Ausflug für Familien und alle, die saisonale Produkte lieben: Kürbisgerichte, Workshops zum Schnitzen und Bemalen, Shows und am **31. Oktober** eine große Halloween-Party. Der Eintritt ist frei, von 10:00 bis 23:00 Uhr (am 31. Oktober bis 1:00 Uhr).",
          },
          { type: "p", text: "[Zum Programm von Zuccaland auf Visit Verona (auf Italienisch) →](" + ZUCCALAND + ")" },
          { type: "h2", text: "San Zeno di Montagna feiert Kastanien und Maronen g.U." },
          {
            type: "p",
            text: "Von Kürbissen zu Kastanien ist es nur ein kleiner Schritt – zumindest für Liebhaber herbstlicher Aromen. In San Zeno di Montagna, an den Hängen des Monte Baldo und etwa 35 Autominuten vom Relais entfernt, findet wieder das traditionelle **Fest der Marrone di San Zeno g.U. und Kastanienfest** statt.",
          },
          {
            type: "p",
            text: "Die Ausgabe 2026 belebt die Piazza Schena an den Wochenenden **16.–18. Oktober**, **22.–25. Oktober** und **30. Oktober–1. November** mit dem Markt der Marrone g.U., regionalen Spezialitäten, Produkten der Kastanienbauern und Veranstaltungen rund um die lokale Tradition. Eine Gelegenheit, durch ein Bergdorf zu bummeln, die Herbstfarben des Monte Baldo zu bewundern und eines der typischsten Produkte der Region zu entdecken.",
          },
          { type: "p", text: "[Zum Programm auf der Website der Gemeinde San Zeno di Montagna (auf Italienisch) →](" + SAN_ZENO + ")" },
          { type: "h2", text: "Und für Halloween-Fans? Gibt es Gardaland" },
          {
            type: "p",
            text: "Nur 2 km vom Relais del Sol entfernt verwandelt sich Gardaland für **Magic Halloween**, das noch bis zum **1. November 2026** läuft. Thematische Dekoration, Shows, Attraktionen und geheimnisvolle Stimmung machen den Park zu einem idealen Ziel für Familien mit Kindern oder alle, die ihrem Wochenende etwas Nervenkitzel verleihen möchten.",
          },
          {
            type: "p",
            text: "Außerdem gibt es die **Gruselfreitage** (Venerdì da Paura) am 23. und 30. Oktober (von 17:00 bis 22:00 Uhr) und die große Halloween-Party am **31. Oktober**.",
          },
          { type: "p", text: "[Magic Halloween auf der Website von Gardaland entdecken →](" + GARDALAND + ")" },
          { type: "h2", text: "Unser Tipp für ein Herbstwochenende am Gardasee" },
          { type: "h3", text: "Samstag: regionale Produkte, Kürbisse und Gardasee-Flair" },
          {
            type: "p",
            text: "Beginnen Sie den Tag mit einem Bummel über den **Wochenmarkt von Pacengo**, der samstags ein kleines Stück Alltagsleben zeigt. Danach können Sie ein paar Stunden in Zuccaland in Villafranca verbringen, bevor Sie im Relais del Sol einchecken.",
          },
          {
            type: "p",
            text: "Am späten Nachmittag lohnt sich ein Besuch in **Lazise**, nur 8 Autominuten entfernt: Die Altstadt, die mittelalterliche Stadtmauer und die Seepromenade haben einen besonderen Zauber, wenn das Herbstlicht den Sonnenuntergang begleitet.",
          },
          { type: "h3", text: "Sonntag: Frühstück auf dem Agriturismo und Aromen des Monte Baldo" },
          {
            type: "p",
            text: "Nach dem [Frühstück im Relais](/de/erlebnisse#colazione) geht es nach San Zeno di Montagna zum Kastanienfest. Mit regionalen Produkten, Märkten und Panoramablicken wird der Sonntag ganz den Traditionen der Region gewidmet.",
          },
          {
            type: "p",
            text: "Und wenn Sie das ganze Wochenende Halloween widmen möchten, ersetzen Sie einen der Ausflüge einfach durch einen Tag in Gardaland.",
          },
          { type: "h2", text: "Relais del Sol: Ihr Herbstaufenthalt zwischen Land und Gardasee" },
          {
            type: "p",
            text: "Unsere Lage in Pacengo di Lazise ist ideal, um Ausflüge in die Umgebung mit einem Aufenthalt in einem charmanten Agriturismo mitten in der Natur zu verbinden. Zwischen Weinbergen, Olivenbäumen und einem großen Park bietet das Relais del Sol echte Gastfreundschaft, [liebevoll eingerichtete Zimmer](/de/zimmer) und eine romantische Landhaus-Atmosphäre.",
          },
          {
            type: "p",
            text: "Der Oktober ist auch der letzte Monat unserer Saison 2026: Ab November machen wir Winterpause und empfangen Sie wieder im Frühjahr 2027. Bevor wir uns verabschieden, bleibt aber noch Zeit für ein letztes Wochenende am Gardasee – zwischen Herbstfarben, dem Duft des Landes und den Traditionen, die diese Region so besonders machen.",
          },
          { type: "highlight", text: "🎃 Unsere Kürbisse warten auf Sie. Und wir auch." },
        ],
      },
    },
  },
];

export type LocalizedGuide = GuideTranslation & {
  id: string;
  date: string;
  updated?: string;
  image: Guide["image"];
  slug: string;
  path: string;
  readingMinutes: number;
};

function blockText(block: GuideBlock): string[] {
  if (block.type === "faq") return [block.title, ...block.items.flatMap((item) => [item.q, item.a])];
  if ("items" in block) return [...block.items, "title" in block ? block.title : ""];
  return [block.text];
}

function readingMinutes(blocks: GuideBlock[]) {
  const words = blocks
    .flatMap(blockText)
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getLocalizedGuide(guide: Guide, locale: Locale): LocalizedGuide {
  const t = guide.translations[locale];
  return {
    ...t,
    id: guide.id,
    date: guide.date,
    updated: guide.updated,
    image: guide.image,
    slug: guideSlugs[guide.id][locale],
    path: guidePath(guide.id, locale),
    readingMinutes: readingMinutes(t.blocks),
  };
}

/** Articoli nella lingua richiesta: prima quelli in evidenza, poi dal più recente. */
export function getLocalizedGuides(locale: Locale): LocalizedGuide[] {
  return [...guides]
    .sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)) || b.date.localeCompare(a.date))
    .map((guide) => getLocalizedGuide(guide, locale));
}
