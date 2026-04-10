import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

export default function DirectBookingBanner() {
  return (
    <section className="bg-sol-terracotta py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionLabel>
            <span className="text-sol-cream/70">Prenota direttamente</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-cream md:text-5xl">
            Il prezzo migliore è sempre sul nostro sito
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <article className="border-t border-sol-cream/30 pt-8">
            <p className="font-serif text-5xl font-light text-sol-cream/20">01</p>
            <h3 className="mt-2 font-serif text-xl text-sol-cream">
              Prezzo garantito
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-sol-cream/80">
              Prenoti direttamente da noi e hai la certezza di pagare il prezzo
              più basso disponibile. Nessun sito intermedio può batterlo.
            </p>
          </article>

          <article className="border-t border-sol-cream/30 pt-8">
            <p className="font-serif text-5xl font-light text-sol-cream/20">02</p>
            <h3 className="mt-2 font-serif text-xl text-sol-cream">
              Regalo di benvenuto
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-sol-cream/80">
              Chi prenota sul sito ufficiale riceve in omaggio un regalo esclusivo.
            </p>
          </article>

          <article className="border-t border-sol-cream/30 pt-8">
            <p className="font-serif text-5xl font-light text-sol-cream/20">03</p>
            <h3 className="mt-2 font-serif text-xl text-sol-cream">Flessibilità</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-sol-cream/80">
              Condizioni di cancellazione più vantaggiose rispetto alle OTA.
              Perché preferiamo un ospite sereno a una prenotazione forzata.
            </p>
          </article>
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="ghost"
            size="lg"
            href={BOOKING_URL}
            className="border-sol-cream text-sol-cream hover:bg-sol-cream/10"
          >
            Prenota Ora — Sito Ufficiale
          </Button>
          <p className="mt-4 text-center font-sans text-xs italic text-sol-cream/50">
            Nessuna commissione. Nessun intermediario. Solo noi e te.
          </p>
        </div>
      </div>
    </section>
  );
}
