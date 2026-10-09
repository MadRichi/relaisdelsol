import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const cardMedia = [
  { image: "/images/services/colazione-buffet.jpg", anchor: "#colazione" },
  { image: "/images/services/piscina.jpg", anchor: "#piscina" },
  { image: "/images/services/eventi-2.jpg", anchor: "#eventi" },
] as const;

export default function ServicesHighlight({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.services;

  return (
    <section className="bg-sol-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 items-stretch md:grid-cols-3">
          {t.cards.map((card, index) => (
            <Link
              key={card.title}
              href={`${routes.experiences[locale]}${cardMedia[index].anchor}`}
              className="block"
            >
              <article className="group h-full flex flex-col overflow-hidden bg-sol-mist transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cardMedia[index].image}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="pt-6 px-6 pb-8 flex flex-col flex-1">
                  <SectionLabel>{card.label}</SectionLabel>
                  <h3 className="mt-2 font-serif text-2xl text-sol-bark">{card.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">
                    {card.description}
                  </p>
                  <span className="mt-auto pt-4 inline-flex font-sans text-xs uppercase tracking-wide text-sol-terracotta-deep">
                    {dict.common.discover}
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
