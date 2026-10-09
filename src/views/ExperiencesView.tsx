import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SectionLabel from "@/components/ui/SectionLabel";
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const poolImages = [
  "/images/services/piscina.jpg",
  "/images/services/piscina-2.jpg",
  "/images/services/piscina-3.jpg",
  "/images/services/piscina-4.jpg",
  "/images/services/chiosco.jpg",
  "/images/services/parco.jpg",
];
const breakfastImages = [
  "/images/services/colazione-buffet.jpg",
  "/images/services/colazione-sala.jpg",
  "/images/services/colazione.jpg",
  "/images/services/colazione-veranda.jpg",
];
const eventImages = [
  "/images/services/eventi-2.jpg",
  "/images/services/eventi-veranda.jpg",
  "/images/services/eventi-3.jpg",
  "/images/services/eventi-4.jpg",
];

function withAlts(sources: string[], alts: string[]) {
  return sources.map((src, index) => ({ src, alt: alts[index] }));
}

function InfoGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.label} className="bg-sol-sand p-4">
          <p className="font-sans text-[10px] uppercase tracking-widest text-sol-bark/70">
            {item.label}
          </p>
          <p className="mt-1 font-sans text-sm text-sol-bark">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default function ExperiencesView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.experiencesPage;
  const carouselLabels = dict.carousel;

  return (
    <>
      <NavbarThemeSetter theme="light" />
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/esperienze-hero.jpg"
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
          <p className="mt-2 max-w-lg font-sans text-base text-sol-cream/80">{t.subtitle}</p>
        </div>
      </section>

      <section className="bg-sol-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <SectionLabel>{t.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              {t.sectionTitle}
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            <article id="piscina" className="grid grid-cols-1 gap-0 bg-sol-mist md:grid-cols-2">
              <div className="min-h-[400px]">
                <ImageCarousel
                  images={withAlts(poolImages, t.pool.images)}
                  labels={carouselLabels}
                  aspectRatio="aspect-[4/3] md:aspect-auto md:h-full"
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-14">
                <SectionLabel>{t.pool.label}</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-sol-bark">{t.pool.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">{t.pool.text}</p>
                <InfoGrid items={t.pool.info} />
                <p className="mt-4 font-sans text-xs italic text-sol-bark/70">{t.pool.note}</p>
              </div>
            </article>

            <article id="colazione" className="grid grid-cols-1 gap-0 bg-sol-mist md:grid-cols-2">
              <div className="order-2 min-h-[400px]">
                <ImageCarousel
                  images={withAlts(breakfastImages, t.breakfast.images)}
                  labels={carouselLabels}
                  aspectRatio="aspect-[4/3] md:aspect-auto md:h-full"
                />
              </div>
              <div className="order-1 flex flex-col justify-center p-10 md:p-14">
                <SectionLabel>{t.breakfast.label}</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-sol-bark">{t.breakfast.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
                  {t.breakfast.text}
                </p>
                <InfoGrid items={t.breakfast.info} />
                <p className="mt-4 font-sans text-xs italic text-sol-bark/70">{t.breakfast.note}</p>
              </div>
            </article>

            <article id="eventi" className="grid grid-cols-1 gap-0 bg-sol-mist md:grid-cols-2">
              <div className="min-h-[400px]">
                <ImageCarousel
                  images={withAlts(eventImages, t.events.images)}
                  labels={carouselLabels}
                  aspectRatio="aspect-[4/3] md:aspect-auto md:h-full"
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-14">
                <SectionLabel>{t.events.label}</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-sol-bark">{t.events.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">{t.events.text}</p>
                <InfoGrid items={t.events.info} />
                <p className="mt-4 font-sans text-xs italic text-sol-bark/70">{t.events.note}</p>
                <Link
                  href={routes.contact[locale]}
                  className="mt-6 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wide text-sol-terracotta-deep"
                >
                  {t.events.cta}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="territorio" className="bg-sol-sand py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>{t.territory.label}</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
              {t.territory.title}
            </h2>
            {t.territory.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? "mt-6" : "mt-4"} font-sans text-sm leading-relaxed text-sol-bark/70`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 flex flex-col gap-3">
              {t.territory.practical.map((item) => (
                <p key={item} className="flex items-center gap-3 font-sans text-sm text-sol-bark/70">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sol-terracotta" />
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {t.territory.services.map((item) => (
                <p key={item} className="font-sans text-sm text-sol-bark/70">
                  <span className="mr-2 text-sol-terracotta-deep">→</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.territory.places.map((card) => (
              <article key={card.name} className="bg-sol-cream p-5">
                <h3 className="font-serif text-xl text-sol-bark">{card.name}</h3>
                <p className="mt-0.5 font-sans text-xs text-sol-bark/70">{card.desc}</p>
                <p className="mt-3 font-sans text-xs uppercase tracking-widest text-sol-terracotta-deep">
                  {card.dist}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>{t.markets.label}</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-light text-sol-bark md:text-4xl">
              {t.markets.title}
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">{t.markets.text}</p>
          </div>

          <div className="flex flex-col divide-y divide-sol-bark/10">
            {t.markets.days.map((market) => (
              <div key={market.day} className="flex items-start gap-4 py-3">
                <p className="w-28 flex-shrink-0 pt-0.5 font-sans text-xs uppercase tracking-widest text-sol-terracotta-deep">
                  {market.day}
                </p>
                <p className="font-sans text-sm text-sol-bark/70">{market.places}</p>
              </div>
            ))}
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
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button href={BOOKING_URL} {...bookingLinkProps} variant="light" size="xl">
            {dict.common.checkAvailability}
          </Button>
        </div>
      </section>
    </>
  );
}
