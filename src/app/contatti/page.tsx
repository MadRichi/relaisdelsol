import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contatti | Agriturismo Relais del Sol — Lazise, Lago di Garda",
  description:
    "Contatta l'Agriturismo Relais del Sol a Pacengo di Lazise. Telefono, email, mappa e modulo di contatto.",
};

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.5!2d10.7378!3d45.5083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzI5LjkiTiAxMMKwNDQnMTYuMSJF!5e0!3m2!1sit!2sit!4v1234567890";

export default function ContattiPage() {
  return (
    <>
      <section className="bg-sol-bark pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <SectionLabel>
            <span className="text-sol-cream/60">Siamo qui per te</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-5xl font-light text-sol-cream md:text-6xl">
            Contatti
          </h1>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="flex min-h-[500px] flex-col bg-sol-bark p-8 md:p-12">
              <h2 className="font-serif text-2xl font-light text-sol-cream">
                Vieni a trovarci
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-sol-cream/80">
                Siamo a Pacengo di Lazise, a pochi minuti dal lago e dal centro storico.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-cream/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21C12 21 5 14.5 5 10A7 7 0 0 1 19 10C19 14.5 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                      Indirizzo
                    </p>
                    <p className="mt-0.5 whitespace-pre-line font-sans text-sm text-sol-cream">
                      {"Loc. Casa Antonia, 1\n37017 Pacengo di Lazise (VR)"}
                    </p>
                    <Link
                      href="https://www.google.com/maps/dir/?api=1&destination=Loc.+Casa+Antonia+1+Pacengo+di+Lazise"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 font-sans text-xs text-sol-cream/60 transition-colors hover:text-sol-cream"
                    >
                      Apri in Maps →
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-cream/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 7.5C9 11.1 11.9 14 15.5 14V16.5C10.5 16.5 6.5 12.5 6.5 7.5H9Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                      Telefono
                    </p>
                    <Link
                      href="tel:+390456490008"
                      className="mt-0.5 font-sans text-sm text-sol-cream transition-colors hover:text-sol-cream/80"
                    >
                      +39 045 649 0008
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-cream/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6.5C4 5.1 5.1 4 6.5 4H17.5C18.9 4 20 5.1 20 6.5V13.5C20 14.9 18.9 16 17.5 16H9L5 20V16.3C4.4 15.9 4 15.2 4 14.5V6.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                      WhatsApp
                    </p>
                    <Link
                      href="https://wa.me/390456490008"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 font-sans text-sm text-sol-cream transition-colors hover:text-sol-cream/80"
                    >
                      +39 045 649 0008
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-cream/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                      Email
                    </p>
                    <Link
                      href="mailto:agriturismo@cadelsol.com"
                      className="mt-0.5 font-sans text-sm text-sol-cream transition-colors hover:text-sol-cream/80"
                    >
                      agriturismo@cadelsol.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-sol-cream/15 pt-8">
                <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                  Orari di ricevimento
                </p>
                <p className="mt-2 font-sans text-sm text-sol-cream">
                  Tutti i giorni: 8:00 – 20:00
                </p>
              </div>
            </div>

            <div className="min-h-[500px] h-full w-full">
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Agriturismo Relais del Sol"
                className="h-full min-h-[500px] w-full border-0"
              />
            </div>
          </div>

          <div className="mt-0">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-sol-terracotta py-16 text-center">
        <div className="px-6">
          <SectionLabel>
            <span className="text-sol-cream/70">Prenota direttamente</span>
          </SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream md:text-4xl">
            Miglior prezzo garantito sul sito ufficiale
          </h2>
          <div className="mt-6 flex flex-col items-center gap-4">
            <Button
              href={BOOKING_URL}
              className="rounded-none bg-sol-cream px-8 py-4 font-sans text-sm uppercase tracking-wide text-sol-bark transition-colors hover:bg-sol-sand"
            >
              Verifica disponibilità
            </Button>
            <p className="mt-2 font-sans text-xs text-sol-cream/60">
              Oppure chiamaci:{" "}
              <Link href="tel:+390456490008" className="underline underline-offset-2">
                +39 045 649 0008
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
