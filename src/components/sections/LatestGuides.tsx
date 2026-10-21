import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import GuideCard from "@/components/guide/GuideCard";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalizedGuides } from "@/lib/content/guides";
import { formatDate } from "@/lib/format-date";

/** Ultime 3 guide pubblicate, con link alla pagina della guida. */
export default function LatestGuides({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.guideSection;
  const latest = getLocalizedGuides(locale).slice(0, 3);
  if (!latest.length) return null;

  return (
    <div className="mx-auto mt-20 max-w-7xl px-6 md:px-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-light text-sol-bark md:text-4xl">{t.title}</h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">{t.text}</p>
        </div>
        <Button variant="outline" href={routes.guide[locale]} className="self-start md:self-auto">
          {t.cta}
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {latest.map((guide) => (
          <GuideCard
            key={guide.id}
            guide={guide}
            dateLabel={formatDate(guide.date, locale)}
            readMore={dict.guidePage.readMore}
            minutes={dict.guidePage.minutes}
          />
        ))}
      </div>
    </div>
  );
}
