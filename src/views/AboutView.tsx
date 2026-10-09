import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function AboutView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).aboutPage;

  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/chi-siamo-hero.jpg"
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
          <h1 className="mt-3 font-serif text-5xl font-light text-sol-cream md:text-6xl">
            {t.title}
          </h1>
          <p className="mt-2 font-sans text-lg text-sol-cream/80">{t.subtitle}</p>
        </div>
      </section>

      <section className="bg-sol-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>{t.rootsLabel}</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              {t.rootsTitle}
            </h2>
            {t.rootsParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? "mt-6" : "mt-4"} font-sans text-sm leading-relaxed text-sol-bark/70`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative bg-sol-sand p-10 md:p-14">
            <p className="pointer-events-none absolute top-4 left-6 font-serif text-8xl leading-none text-sol-terracotta/20">
              &ldquo;
            </p>
            <blockquote className="relative z-10 font-serif text-xl leading-relaxed italic text-sol-bark/80">
              {t.quote}
            </blockquote>
            <p className="mt-6 font-sans text-xs uppercase tracking-widest text-sol-bark/70">
              {t.quoteAuthor}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sol-sand py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel>{t.valuesLabel}</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              {t.valuesTitle}
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {t.values.map((value, index) => (
              <article key={value.title} className="bg-sol-cream p-8">
                <p className="font-serif text-5xl font-light text-sol-terracotta/30">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-xl text-sol-bark">{value.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
          <div className="relative min-h-[500px] overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt={t.placeImageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionLabel>{t.placeLabel}</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-light text-sol-bark md:text-4xl">
              {t.placeTitle}
            </h2>
            {t.placeParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? "mt-6" : "mt-4"} font-sans text-sm leading-relaxed text-sol-bark/70`}
              >
                {paragraph}
              </p>
            ))}
            <Button href={routes.experiences[locale]} variant="outline" className="mt-8">
              {t.placeCta}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-sol-terracotta px-6 py-16 text-center">
        <SectionLabel>
          <span className="text-sol-cream/70">{t.ctaLabel}</span>
        </SectionLabel>
        <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream md:text-4xl">
          {t.ctaTitle}
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href={BOOKING_URL} {...bookingLinkProps} variant="light" size="xl">
            {t.ctaButton}
          </Button>
        </div>
      </section>
    </>
  );
}
