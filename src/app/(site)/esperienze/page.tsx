import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SectionLabel from "@/components/ui/SectionLabel";
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter";

export const metadata: Metadata = {
  title: "Esperienze | Relais Del Sol — Lazise, Lago di Garda",
  description:
    "Scopri le esperienze del Relais Del Sol: parco con piscina a sfioro, colazione con prodotti locali, eventi privati e tutto il territorio del Lago di Garda.",
};

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

const poolInfo = [
  { label: "Orario piscina", value: "10:00 - 19:00" },
  { label: "Lettini", value: "Inclusi con ogni camera" },
  { label: "Chiosco bordo piscina", value: "10:00 - 19:00" },
  { label: "Campi sportivi", value: "Calcio e pallavolo" },
] as const;

const breakfastInfo = [
  { label: "Orario buffet", value: "8:00 – 10:00" },
  { label: "Prodotti", value: "Freschi e locali" },
  { label: "Senza glutine", value: "Disponibile" },
  { label: "Senza lattosio", value: "Disponibile" },
] as const;

const eventsInfo = [
  { label: "Ospiti max", value: "Su richiesta" },
  { label: "Vista", value: "Lago e vigneti" },
  { label: "Allestimento", value: "Personalizzabile" },
  { label: "Sopralluogo", value: "Gratuito" },
] as const;

const practicalInfo = [
  "A 50m: fermata autobus",
  "A 2 km: ospedale di Peschiera",
  "A 4 km: stazione ferroviaria di Peschiera",
] as const;

const territoryServices = [
  "Noleggio bici convenzionato nelle vicinanze",
  "Servizio transfer privato disponibile",
  "Sconti convenzionati in ristoranti e negozi della zona",
] as const;

const distanceCards = [
  { dist: "1.8 km", name: "Gardaland", desc: "Parco divertimenti n°1 in Italia" },
  { dist: "200 m", name: "Movieland Park", desc: "Parco tematico dedicato al cinema" },
  { dist: "200 m", name: "Caneva Aquapark", desc: "Uno dei parchi acquatici più grandi d'Italia" },
  { dist: "2 km", name: "Parco Natura Viva", desc: "Parco zoologico a Pastrengo" },
  { dist: "3 km", name: "Bardolino", desc: "Vino DOC e lungolago" },
  {
    dist: "3 km",
    name: "Terme Villa dei Cedri",
    desc: "Parco termale con alberi secolari",
  },
  { dist: "4 km", name: "Lazise", desc: "Borgo medievale sul lago" },
  {
    dist: "7 km",
    name: "Parco Sigurtà",
    desc: "Una delle oasi verdi più belle d'Italia",
  },
  { dist: "15 km", name: "Museo Nicolis", desc: "Museo dell'auto e della meccanica" },
  {
    dist: "20 km",
    name: "Verona",
    desc: "Patrimonio UNESCO — Romeo e Giulietta",
  },
] as const;

const weeklyMarkets = [
  {
    day: "Lunedì",
    places: "Peschiera del Garda, Colombare di Sirmione, Torri del Benaco",
  },
  { day: "Martedì", places: "Castelnuovo del Garda, Desenzano" },
  { day: "Mercoledì", places: "Lazise" },
  { day: "Giovedì", places: "Bardolino, Bussolengo" },
  { day: "Venerdì", places: "Garda" },
  { day: "Sabato", places: "Pacengo, Valeggio, Malcesine" },
  { day: "Domenica", places: "Rivoltella del Garda" },
] as const;

export default function EsperienzePage() {
  return (
    <>
      <NavbarThemeSetter theme="light" />
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/esperienze-hero.jpg"
          alt="Esperienze tra piscina, parco e Lago di Garda"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sol-bark/70" />

        <div className="absolute bottom-12 left-6 md:left-16">
          <SectionLabel>
            <span className="text-sol-cream">Cosa ti aspetta</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-5xl font-light text-sol-cream md:text-6xl">
            Esperienze
          </h1>
          <p className="mt-2 max-w-lg font-sans text-base text-sol-cream/80">
            Dal parco con piscina al borgo medievale di Lazise. Dalla colazione
            con i prodotti della terra al tramonto sul lago.
          </p>
        </div>
      </section>

      <section className="bg-sol-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <SectionLabel>Al Relais Del Sol</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              Le esperienze che ti aspettano qui
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            <article id="piscina" className="grid grid-cols-1 gap-0 bg-sol-mist md:grid-cols-2">
              <div className="min-h-[400px]">
                <ImageCarousel
                  images={[
                    {
                      src: "/images/services/piscina.jpg",
                      alt: "Piscina a sfioro del Relais Del Sol",
                    },
                    {
                      src: "/images/services/piscina-2.jpg",
                      alt: "Parco verde del Relais Del Sol",
                    },
                    {
                      src: "/images/services/piscina-3.jpg",
                      alt: "Area relax bordo piscina",
                    },
                    {
                      src: "/images/services/piscina-4.jpg",
                      alt: "Campi sportivi del Relais Del Sol",
                    },
                  ]}
                  aspectRatio="aspect-[4/3] md:aspect-auto md:h-full"
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-14">
                <SectionLabel>Relax</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-sol-bark">
                  Parco e piscina a sfioro
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
                  Un enorme parco con secolari cedri, abeti, pini marittimi e
                  magnolie che raggiungono quasi i 20 metri di altezza circonda il Relais. Al centro, la
                  piscina a sfioro rivestita in mosaico Bisazza, con getti
                  idromassaggio e sdraio per ogni camera. Si trovano inoltre un'area giochi attrezzata per i bambini e campi da calcio e pallavolo. Un posto dove il
                  pomeriggio non ha fretta.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {poolInfo.map((item) => (
                    <div key={item.label} className="bg-sol-sand p-4">
                      <p className="font-sans text-[10px] uppercase tracking-widest text-sol-bark/40">
                        {item.label}
                      </p>
                      <p className="mt-1 font-sans text-sm text-sol-bark">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-sans text-xs italic text-sol-bark/50">
                  Al chiosco: vino, olio, birra, panini, pizza, gelati e
                  bibite.
                </p>
              </div>
            </article>

            <article id="colazione" className="grid grid-cols-1 gap-0 bg-sol-mist md:grid-cols-2">
              <div className="order-2 relative min-h-[400px] overflow-hidden md:order-2">
                <Image
                  src="/images/services/colazione.jpg"
                  alt="Colazione con prodotti locali al Relais Del Sol"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 flex flex-col justify-center p-10 md:p-14">
                <SectionLabel>Ogni mattina</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-sol-bark">
                  La colazione del Relais
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
                  Nella splendida veranda affacciata sulla casa padronale, con
                  vista sul lago di Garda, ogni mattina il buffet si riempie di
                  prodotti italiani: dolci fatti in casa, mieli, marmellate,
                  uova, affettati, frutta fresca, yogurt, prodotti
                  dell&apos;acetaia. E poi caffe, cappuccino, succhi, te. La
                  colazione e inclusa nel soggiorno - ma la vista non ha prezzo.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {breakfastInfo.map((item) => (
                    <div key={item.label} className="bg-sol-sand p-4">
                      <p className="font-sans text-[10px] uppercase tracking-widest text-sol-bark/40">
                        {item.label}
                      </p>
                      <p className="mt-1 font-sans text-sm text-sol-bark">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-sans text-xs italic text-sol-bark/50">
                  Prodotti senza glutine e latte vegetale disponibili su
                  richiesta.
                </p>
              </div>
            </article>

            <article id="eventi" className="grid grid-cols-1 gap-0 bg-sol-mist md:grid-cols-2">
              <div className="min-h-[400px]">
                <ImageCarousel
                  images={[
                    {
                      src: "/images/services/eventi.jpg",
                      alt: "Evento privato al Relais Del Sol",
                    },
                    {
                      src: "/images/services/eventi-2.jpg",
                      alt: "Matrimonio al Relais Del Sol",
                    },
                    {
                      src: "/images/services/eventi-3.jpg",
                      alt: "Celebrazione in famiglia",
                    },
                    {
                      src: "/images/services/eventi-4.jpg",
                      alt: "Allestimento evento speciale",
                    },
                  ]}
                  aspectRatio="aspect-[4/3] md:aspect-auto md:h-full"
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-14">
                <SectionLabel>Momenti speciali</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-sol-bark">
                  Eventi privati
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
                  Il lago di Garda fa da sfondo, i vigneti incorniciano la
                  scena, la veranda guarda verso l&apos;acqua. Il Relais Del Sol
                  è la cornice perfetta per eventi privati e celebrazioni
                  speciali. Ogni dettaglio viene curato con la stessa cura che
                  mettiamo in ogni aspetto del Relais.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {eventsInfo.map((item) => (
                    <div key={item.label} className="bg-sol-sand p-4">
                      <p className="font-sans text-[10px] uppercase tracking-widest text-sol-bark/40">
                        {item.label}
                      </p>
                      <p className="mt-1 font-sans text-sm text-sol-bark">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-sans text-xs italic text-sol-bark/50">
                  Contattaci per un preventivo personalizzato.
                </p>
                <Link
                  href="/contatti"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wide text-sol-terracotta"
                >
                  Richiedi informazioni →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="territorio" className="bg-sol-sand py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>Intorno a noi</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              Lazise, il lago, e tutto il resto
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-sol-bark/70">
              Pacengo di Lazise è uno dei punti più strategici del Lago di
              Garda. A pochi passi c&apos;è tutto: il lago, i borghi medievali, le
              cantine, le terme. E quando vuoi staccare davvero, basta restare
              qui.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
              A soli 4 km sorge Lazise, uno dei borghi più belli del lago, con
              le sue mura medievali e il porto antico. A 3 km Bardolino,
              capitale del vino Bardolino DOC. A 20 km Verona, città di Romeo e
              Giulietta e patrimonio UNESCO.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {practicalInfo.map((item) => (
                <p key={item} className="flex items-center gap-3 font-sans text-sm text-sol-bark/70">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sol-terracotta" />
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {territoryServices.map((item) => (
                <p key={item} className="font-sans text-sm text-sol-bark/70">
                  <span className="mr-2 text-sol-terracotta">→</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {distanceCards.map((card) => (
              <article key={card.name} className="bg-sol-cream p-5">
                <p className="font-serif text-xl text-sol-bark">{card.name}</p>
                <p className="mt-0.5 font-sans text-xs text-sol-bark/50">{card.desc}</p>
                <p className="mt-3 font-sans text-xs uppercase tracking-widest text-sol-terracotta">
                  {card.dist}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>La vita locale</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-light text-sol-bark md:text-4xl">
              I mercati settimanali del lago
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
              Ogni giorno della settimana, in un paese diverso del lago, si
              tiene un mercato locale. Prodotti freschi, artigianato, il
              profumo del Lago di Garda. Un modo autentico di vivere il
              territorio.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-sol-bark/10">
            {weeklyMarkets.map((market) => (
              <div key={market.day} className="flex items-start gap-4 py-3">
                <p className="w-20 flex-shrink-0 pt-0.5 font-sans text-xs uppercase tracking-widest text-sol-terracotta">
                  {market.day}
                </p>
                <p className="font-sans text-sm text-sol-bark/70">{market.places}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-terracotta px-6 py-16 text-center">
        <SectionLabel>
          <span className="text-sol-cream/70">Prenota il tuo soggiorno</span>
        </SectionLabel>
        <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream md:text-4xl">
          Vivi tutto questo — a partire da Relais Del Sol
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button
            href={BOOKING_URL}
            className="rounded-none bg-sol-cream px-8 py-4 font-sans text-sm uppercase tracking-wide text-sol-bark hover:bg-sol-sand"
          >
            Verifica disponibilità
          </Button>
        </div>
      </section>
    </>
  );
}
