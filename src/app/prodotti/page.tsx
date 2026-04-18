import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Prodotti | Relais Del Sol — Lazise, Lago di Garda",
  description:
    "Vino e olio extravergine prodotti dal Relais Del Sol a Pacengo di Lazise. Acquistali direttamente in struttura.",
};

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

const galleryImages = [
  "/images/prodotti/prodotti-1.jpg",
  "/images/prodotti/prodotti-2.jpg",
  "/images/prodotti/prodotti-3.jpg",
  "/images/prodotti/prodotti-4.jpg",
] as const;

export default function ProdottiPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/prodotti/vino.jpg"
          alt="Prodotti del Relais Del Sol"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sol-bark/70" />

        <div className="absolute bottom-12 left-6 md:left-16">
          <SectionLabel>
            <span className="text-sol-cream">Dalla nostra terra</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-5xl font-light text-sol-cream md:text-6xl">
            I Prodotti del Relais
          </h1>
          <p className="mt-2 max-w-lg font-sans text-base text-sol-cream/80">
            Vino, olio extravergine. Puoi degustarli in struttura e portarteli a
            casa.
          </p>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-sans text-base leading-relaxed text-sol-bark/70">
            Nella saletta vicino alla reception, tra le bottiglie allineate
            sugli scaffali, si racconta la storia di questa terra. Il vino e
            l&apos;olio nascono qui, a Pacengo di Lazise, tra i vigneti e gli
            oliveti che circondano il Relais. Puoi degustarli durante il tuo
            soggiorno e portarli a casa come ricordo di un posto che non si
            dimentica.
          </p>
        </div>
      </section>

      <section className="bg-sol-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="text-center">
            <SectionLabel>La nostra produzione</SectionLabel>
            <h2 className="mt-4 mb-16 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              Cosa produciamo
            </h2>
          </div>

          <div className="flex flex-col gap-20">
            <article className="grid grid-cols-1 gap-0 md:grid-cols-2">
              <div className="relative min-h-[400px] overflow-hidden">
                <Image
                  src="/images/prodotti/prodotti-4.jpg"
                  alt="Vino del Relais Del Sol"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center bg-sol-cream p-10 md:p-14">
                <SectionLabel>Dalla vigna</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-sol-bark">
                  Vino — Rosso, Bianco e Rosé
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
                  I vigneti del Relais crescono sulle colline che guardano il
                  lago. Il risultato sono vini che parlano di questo territorio:
                  il rosso strutturato delle colline veronesi, il bianco fresco
                  e minerale, il rosé elegante per le serate estive. Tutti
                  disponibili in struttura, da assaporare in veranda o da
                  portare a casa.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-sol-sand px-4 py-2 font-sans text-xs uppercase tracking-wide text-sol-bark/70">
                    Vino Rosso
                  </span>
                  <span className="bg-sol-sand px-4 py-2 font-sans text-xs uppercase tracking-wide text-sol-bark/70">
                    Vino Bianco
                  </span>
                  <span className="bg-sol-sand px-4 py-2 font-sans text-xs uppercase tracking-wide text-sol-bark/70">
                    Vino Rosé
                  </span>
                </div>
                <p className="mt-4 font-sans text-xs italic text-sol-bark/40">
                  Disponibile in struttura — assortimento soggetto a
                  stagionalità
                </p>
              </div>
            </article>

            <article className="grid grid-cols-1 gap-0 md:grid-cols-2">
              <div className="order-1 flex flex-col justify-center bg-sol-cream p-10 md:p-14">
                <SectionLabel>Dal frantoio</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-sol-bark">
                  Olio Extravergine di Oliva
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
                  Gli ulivi del Relais hanno radici profonde in questa terra.
                  L&apos;olio che ne ricaviamo è extravergine, pressato a freddo,
                  con un profilo aromatico che ricorda il Lago di Garda:
                  delicato, fruttato, con una leggera nota erbacea. Perfetto a
                  crudo, su una bruschetta, o come condimento per esaltare i
                  sapori semplici della cucina veneta.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-sol-sand px-4 py-2 font-sans text-xs uppercase tracking-wide text-sol-bark/70">
                    Extravergine
                  </span>
                  <span className="bg-sol-sand px-4 py-2 font-sans text-xs uppercase tracking-wide text-sol-bark/70">
                    Pressato a freddo
                  </span>
                  <span className="bg-sol-sand px-4 py-2 font-sans text-xs uppercase tracking-wide text-sol-bark/70">
                    Produzione propria
                  </span>
                </div>
                <p className="mt-4 font-sans text-xs italic text-sol-bark/40">
                  Disponibile in struttura — quantità limitata per stagione
                </p>
              </div>
              <div className="order-2 relative min-h-[400px] overflow-hidden">
                <Image
                  src="/images/prodotti/prodotti-5.jpg"
                  alt="Olio extravergine del Relais Del Sol"
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-sol-bark py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>
              <span className="text-sol-cream/60">Dove trovarli</span>
            </SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-light text-sol-cream md:text-4xl">
              Come acquistare i nostri prodotti
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-sol-cream/70">
              Tutti i prodotti sono disponibili nella saletta espositiva vicino
              alla reception, aperta durante tutto il soggiorno. Puoi anche
              trovarli al chiosco bordo piscina durante la stagione estiva.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <article className="border border-sol-cream/15 bg-sol-cream/10 p-5">
              <p className="font-sans text-xs uppercase tracking-widest text-sol-cream/50">
                Saletta prodotti
              </p>
              <p className="mt-1 font-sans text-sm text-sol-cream">
                Vicino alla reception — aperta tutto il giorno
              </p>
            </article>
            <article className="border border-sol-cream/15 bg-sol-cream/10 p-5">
              <p className="font-sans text-xs uppercase tracking-widest text-sol-cream/50">
                Chiosco piscina
              </p>
              <p className="mt-1 font-sans text-sm text-sol-cream">
                Disponibile in stagione — 10:00/19:00
              </p>
            </article>
            <article className="border border-sol-cream/15 bg-sol-cream/10 p-5">
              <p className="font-sans text-xs uppercase tracking-widest text-sol-cream/50">
                Acquisto e spedizione
              </p>
              <p className="mt-1 font-sans text-sm text-sol-cream">
                Contattaci per ordini e spedizioni a domicilio
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-sol-sand py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="mb-8 text-center">
            <SectionLabel>I nostri prodotti</SectionLabel>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/3] cursor-pointer overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Prodotti del Relais Del Sol ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-terracotta px-6 py-16 text-center">
        <SectionLabel>
          <span className="text-sol-cream/70">Vieni a trovarci</span>
        </SectionLabel>
        <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream md:text-4xl">
          I prodotti si assaggiano. Poi si portano a casa.
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
