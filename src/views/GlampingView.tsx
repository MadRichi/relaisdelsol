import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import AgricampingGallery from "@/components/gallery/AgricampingGallery";
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter";
import { BOOKING_URL, bookingLinkProps, contact } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function GlampingView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.glampingPage;
  const images = Array.from({ length: 10 }, (_, index) => ({
    src: `/images/agricamping/agricamping-${index + 1}.jpg`,
    alt: `${t.galleryAlt} (${index + 1})`,
    width: 1200,
    height: 800,
  }));

  return (
    <>
      <NavbarThemeSetter theme="light" />
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/agricamping-hero.jpg"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(92,74,50,0.7)]" />
        <div className="absolute bottom-12 left-6 md:left-16">
          <SectionLabel>
            <span className="text-sol-cream">{t.label}</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-4xl font-light text-sol-cream md:text-6xl">
            {t.title}
          </h1>
          <p className="mt-2 max-w-lg font-sans text-base text-sol-cream/80">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>{t.experienceLabel}</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-light text-sol-bark md:text-4xl">
              {t.experienceTitle}
            </h2>
            {t.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? "mt-6" : "mt-4"} font-sans text-sm leading-relaxed text-sol-bark/70`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.features.map((feature) => (
              <div key={feature.label} className="bg-sol-mist p-5">
                <p className="font-serif text-3xl font-light text-sol-terracotta-deep">
                  {feature.value}
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-wide text-sol-bark/60">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-sand py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="text-center">
            <SectionLabel>{t.includesLabel}</SectionLabel>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {t.amenities.map((amenity) => (
              <span
                key={amenity}
                className="bg-sol-cream px-5 py-3 font-sans text-xs uppercase tracking-wide text-sol-bark/70"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-cream py-12 md:py-16">
        <div className="mb-8 text-center">
          <SectionLabel>{t.galleryLabel}</SectionLabel>
        </div>
        <AgricampingGallery images={images} labels={dict.roomDetail.gallery} />
      </section>

      <section className="bg-sol-terracotta py-16 text-center">
        <div className="px-6">
          <SectionLabel>
            <span className="text-sol-cream/70">{dict.common.bookDirect}</span>
          </SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream md:text-4xl">
            {t.ctaTitle}
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button
              href={BOOKING_URL}
              {...bookingLinkProps}
              variant="light"
              size="xl"
            >
              {dict.common.checkAvailability}
            </Button>
            <p className="mt-2 font-sans text-xs text-sol-cream/60">
              {dict.common.orCallUs}{" "}
              <Link href={contact.phoneHref} className="underline underline-offset-2">
                {contact.phoneDisplay}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
