import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function LocationTeaser() {
  return (
    <section className="bg-sol-sand py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-0 md:px-16">
        <div className="flex flex-col justify-center">
          <SectionLabel>Dove siamo</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
            A due passi dal lago, lontano dal caos
          </h2>
          <p className="mt-6 font-sans text-sm leading-relaxed text-sol-bark/70">
            Pacengo di Lazise è una delle frazioni più tranquille della sponda
            veronese del Lago di Garda. Siamo a 5 minuti a piedi dall&apos;acqua, a
            10 minuti da Lazise, a 20 minuti da Bardolino.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sol-terracotta" />
              <p className="font-sans text-sm text-sol-bark/70">
                Loc. Casa Antonia, 1 — 37017 Pacengo di Lazise (VR)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sol-terracotta" />
              <p className="font-sans text-sm text-sol-bark/70">
                5 min a piedi dal lago
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sol-terracotta" />
              <p className="font-sans text-sm text-sol-bark/70">
                10 min da Lazise, 20 min da Bardolino
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="primary"
              href="https://www.google.com/maps/dir/?api=1&destination=Loc.+Casa+Antonia+1+Pacengo+di+Lazise"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ottieni indicazioni
            </Button>
            <Button variant="outline" href="/esperienze#territorio">
              Scopri la zona
            </Button>
          </div>
        </div>

        <div className="min-h-[400px] overflow-hidden rounded-none md:min-h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.5!2d10.7378!3d45.5083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzI5LjkiTiAxMMKwNDQnMTYuMSJF!5e0!3m2!1sit!2sit!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Posizione Agriturismo Relais del Sol"
            className="min-h-[400px] w-full md:min-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
