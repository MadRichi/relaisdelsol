import SectionLabel from "@/components/ui/SectionLabel";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getFaqSchema } from "@/lib/seo/schemas";

export default function Faq({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).faq;

  return (
    <section className="bg-sol-cream py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(t.items, locale)) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-12 divide-y divide-sol-bark/15 border-y border-sol-bark/15">
          {t.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-sol-bark [&::-webkit-details-marker]:hidden">
                <h3>{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="font-sans text-xl text-sol-terracotta-deep transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
