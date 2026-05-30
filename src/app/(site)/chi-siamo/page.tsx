import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Chi Siamo | Relais Del Sol — Lazise, Lago di Garda",
  description:
    "La storia del Relais Del Sol a Pacengo di Lazise. Una famiglia, una passione per l'ospitalità autentica e un angolo di campagna veneta sul Lago di Garda.",
};

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

const values = [
  {
    number: "01",
    title: "Autenticita",
    description:
      "Niente qui è costruito per sembrare quello che non è. I prodotti vengono dalla nostra terra, le ricette dalla nostra tradizione, l'accoglienza dal nostro carattere.",
  },
  {
    number: "02",
    title: "Cura del dettaglio",
    description:
      "Ogni tessuto scelto, ogni profumo nella stanza, ogni ingrediente sulla tavola della colazione. La qualita non e un obiettivo - e un'abitudine.",
  },
  {
    number: "03",
    title: "Rispetto per la natura",
    description:
      "Viviamo in un posto straordinario e lo trattiamo con rispetto. Prodotti ecocompatibili, filiera corta, stagionalita: scelte concrete, non slogan.",
  },
  {
    number: "04",
    title: "Ospitalita vera",
    description:
      "Non vogliamo ospiti soddisfatti. Vogliamo ospiti che tornano. C'è differenza - e si sente dal primo momento in cui si varca il cancello.",
  },
] as const;

export default function ChiSiamoPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/family.jpg"
          alt="La storia del Relais Del Sol"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sol-bark/70" />

        <div className="absolute bottom-12 left-6 md:left-16">
          <SectionLabel>
            <span className="text-sol-cream">La nostra storia</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-5xl font-light text-sol-cream md:text-6xl">
            Chi Siamo
          </h1>
          <p className="mt-2 font-sans text-lg text-sol-cream/80">
            Una famiglia, un posto, una scelta.
          </p>
        </div>
      </section>

      <section className="bg-sol-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>Le nostre radici</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              Un posto che esiste perche qualcuno lo ha scelto
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-sol-bark/70">
              Il Relais Del Sol non è nato da un progetto imprenditoriale. È
              nato dall&apos;amore per questo angolo del Lago di Garda, dalla
              volonta di condividere qualcosa di autentico con chi arriva da
              lontano cercando qualcosa di diverso.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
              Pacengo di Lazise, a pochi passi dal Lago di Garda, è il posto
              dove la nostra famiglia ha scelto di mettere radici. E ogni anno,
              da questa terra, nascono i prodotti, le esperienze e
              l&apos;accoglienza che rendono ogni soggiorno diverso dagli altri.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
              Accogliamo ogni ospite con la stessa cura con cui si
              accoglie qualcuno a casa propria. Perche in fondo, questo posto è
              casa - e quando ci si sente a casa, si torna sempre.
            </p>
          </div>

          <div className="relative bg-sol-sand p-10 md:p-14">
            <p className="pointer-events-none absolute top-4 left-6 font-serif text-8xl leading-none text-sol-terracotta/20">
              &ldquo;
            </p>
            <blockquote className="relative z-10 font-serif text-xl leading-relaxed italic text-sol-bark/80">
              Abbiamo scelto di aprire le porte di casa nostra perché crediamo
              che la vera ospitalità non si insegna - si sente.
            </blockquote>
            <p className="mt-6 font-sans text-xs uppercase tracking-widest text-sol-bark/40">
              - La nostra famiglia
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sol-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel>Quello in cui crediamo</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              I valori che guidano ogni scelta
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.number} className="bg-sol-cream p-8">
                <p className="font-serif text-5xl font-light text-sol-terracotta/30">
                  {value.number}
                </p>
                <h3 className="mt-2 font-serif text-xl text-sol-bark">
                  {value.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
          <div className="relative min-h-[500px] overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Il Relais Del Sol a Pacengo di Lazise"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionLabel>Il nostro posto</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-light text-sol-bark md:text-4xl">
              Pacengo di Lazise - dove tutto e vicino e il rumore e lontano
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-sol-bark/70">
              Il Relais sorge tra i vigneti e gli oliveti della sponda veronese
              del Lago di Garda. A cinque minuti a piedi c&apos;e il lago. A
              quattro chilometri il borgo medievale di Lazise. Gardaland è a
              meno di due chilometri.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
              Ma la cosa più bella di questo posto è che puoi anche non andare
              da nessuna parte. Il parco, la piscina, la veranda, il rumore del lago la mattina - a volte la vacanza migliore è
              quella che non ti porta lontano.
            </p>
            <Button href="/esperienze" variant="outline" className="mt-8">
              Scopri le esperienze
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-sol-mist px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-sans text-xs italic text-sol-bark/30">
            - Sezione in aggiornamento. Contenuti definitivi in arrivo. -
          </p>
        </div>
      </section>

      <section className="bg-sol-terracotta px-6 py-16 text-center">
        <SectionLabel>
          <span className="text-sol-cream/70">Vieni a trovarci</span>
        </SectionLabel>
        <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream md:text-4xl">
          La storia più bella è quella che si vive di persona
        </h2>
        <div className="mt-8 flex justify-center">
          <Button
            href={BOOKING_URL}
            className="rounded-none bg-sol-cream px-8 py-4 font-sans text-sm uppercase tracking-wide text-sol-bark hover:bg-sol-sand"
          >
            Prenota il tuo soggiorno
          </Button>
        </div>
      </section>
    </>
  );
}
