import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const serviceCards = [
  {
    image: "/images/services/colazione.jpg",
    imageAlt: "Colazione con prodotti locali e fatti in casa",
    label: "Ogni mattina",
    title: "Colazione con i sapori di casa",
    description:
      "Marmellate fatte in casa, formaggi locali, pane fresco e i prodotti della nostra terra. La colazione a Relais del Sol è il momento in cui capisci che questo posto è diverso.",
    href: "/esperienze#colazione",
  },
  {
    image: "/images/services/piscina.jpg",
    imageAlt: "Parco verde e piscina a sfioro",
    label: "Relax",
    title: "Parco e piscina a sfioro",
    description:
      "Un grande parco verde dove il tempo si dilata. La piscina a sfioro guarda verso il lago — ci sono pomeriggi qui che non dimenticherai.",
    href: "/esperienze#piscina",
  },
  {
    image: "/images/services/eventi.jpg",
    imageAlt: "Allestimento per matrimonio o evento privato",
    label: "Momenti speciali",
    title: "Matrimoni ed eventi privati",
    description:
      "La cornice naturale di Relais del Sol diventa lo sfondo perfetto per il tuo evento. Eventi privati e celebrazioni speciali: ci occupiamo di ogni dettaglio.",
    href: "/esperienze#eventi",
  },
] as const;

export default function ServicesHighlight() {
  return (
    <section className="bg-sol-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionLabel>La tua esperienza</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
            Tutto quello che rende speciale il soggiorno
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 items-stretch md:grid-cols-3">
          {serviceCards.map((card) => (
            <Link key={card.title} href={card.href} className="block">
              <article className="group h-full flex flex-col overflow-hidden bg-sol-mist transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

                <div className="pt-6 px-6 pb-8 flex flex-col flex-1">
                <SectionLabel>{card.label}</SectionLabel>
                <h3 className="mt-2 font-serif text-2xl text-sol-bark">{card.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">
                  {card.description}
                </p>
                  <span className="mt-auto pt-4 inline-flex font-sans text-xs uppercase tracking-wide text-sol-terracotta">
                  Scopri →
                </span>
              </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
