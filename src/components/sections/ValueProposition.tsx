import Divider from "@/components/ui/Divider";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function ValueProposition({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).valueProposition;

  return (
    <section className="bg-sol-sand py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionLabel>{t.label}</SectionLabel>
        <Divider className="mt-4" />
        <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
          {t.title}
        </h2>
        <p className="mt-6 font-sans text-sm leading-relaxed text-sol-bark/70">{t.intro}</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-stretch gap-12 px-6 md:grid-cols-3 md:px-16">
        {t.items.map((item) => (
          <article key={item.title} className="h-full flex flex-col">
            <h3 className="font-serif text-3xl text-sol-bark/70 mb-3">
              {item.title}
            </h3>
            <p className="mt-auto font-sans text-sm leading-relaxed text-sol-bark/70">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
