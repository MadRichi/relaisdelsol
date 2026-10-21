import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import GuideCard from "@/components/guide/GuideCard";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalizedGuides } from "@/lib/content/guides";
import { formatDate } from "@/lib/format-date";

export default function GuideIndexView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).guidePage;
  const guides = getLocalizedGuides(locale);

  return (
    <>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/panoramica.jpg"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sol-bark/70" />
        <div className="absolute bottom-12 left-6 right-6 md:left-16">
          <SectionLabel>
            <span className="text-sol-cream">{t.label}</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-4xl font-light text-sol-cream md:text-6xl">{t.title}</h1>
        </div>
      </section>

      <section className="bg-sol-sand py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <p className="max-w-3xl font-sans text-base leading-relaxed text-sol-bark/70">{t.intro}</p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard
                key={guide.id}
                guide={guide}
                dateLabel={formatDate(guide.date, locale)}
                readMore={t.readMore}
                minutes={t.minutes}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
