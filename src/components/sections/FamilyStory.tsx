import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FamilyStory() {
  return (
    <section className="bg-sol-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-2">
        <div className="relative min-h-[400px] overflow-hidden md:min-h-[600px]">
          <Image
            src="/images/relaisdelsolagriturismopacengoFamily.jpg"
            alt="La famiglia Pietropoli, il cuore di Relais del Sol"
            fill
            className="object-cover"
          />

          {/*<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sol-bark/80 to-transparent p-8">
            <p className="font-serif text-lg italic text-sol-cream">
              Ogni dettaglio è una scelta che abbiamo fatto per te.
            </p>
            <p className="mt-2 font-sans text-xs uppercase tracking-wide text-sol-cream/70">
              — Famiglia Pietropoli
            </p>
          </div>
          */}
        </div>

        <div className="flex flex-col justify-center bg-sol-sand p-12 md:p-16">
          <SectionLabel>Chi siamo</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
            Una famiglia, un posto, una scelta
          </h2>

          <p className="mt-6 font-sans text-sm leading-relaxed text-sol-bark/70">
          Ci sono luoghi che cambiano nome, si rinnovano, si trasformano.
          E poi ci sono luoghi che, pur evolvendo, restano fedeli alla propria anima.
          Relais del Sol nasce dall’esperienza e dalla storia dell’Agriturismo Ca’ del Sol, un luogo di accoglienza immerso nel verde, nel cuore della campagna gardesana, a pochi passi dal Lago di Garda.
          Qui la natura non è uno sfondo: è parte dell’esperienza. Gli ulivi, la luce, i profumi della terra, il silenzio della campagna e l’atmosfera rilassata raccontano ogni giorno un modo di ospitare autentico, semplice e curato.
          </p>

          <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
          Sabrina ha immaginato questo luogo come un rifugio accogliente, romantico e naturale, dove sentirsi bene senza formalità inutili. Ogni dettaglio nasce da una scelta precisa: offrire agli ospiti un soggiorno rilassante, elegante e sincero, fatto di comfort, quiete e piccoli gesti di cura.
          Relais del Sol è un agriturismo di charme sul Lago di Garda, pensato per chi cerca il piacere delle cose vere: una camera accogliente, una colazione genuina, un bagno in piscina, una pedalata tra lago e colline, un tramonto tra gli ulivi.
          </p>

          <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
            Un luogo dove ritrovare tempo, spazio e leggerezza.
            <br />
            Con la naturalezza dell’ospitalità italiana.
          </p>

          {/*<Link
            href="/chi-siamo"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wide text-sol-terracotta transition-all hover:gap-3"
          >
            La nostra storia
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          */}
        </div>
      </div>
    </section>
  );
}
