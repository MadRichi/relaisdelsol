import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function FamilyStory({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).familyStory;

  return (
    <section className="bg-sol-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-2">
        <div className="relative min-h-[400px] overflow-hidden md:min-h-[600px]">
          <Image
            src="/images/relaisdelsolagriturismopacengoFamily.jpg"
            alt={t.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-sol-sand p-12 md:p-16">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
            {t.title}
          </h2>

          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`${index === 0 ? "mt-6" : "mt-4"} font-sans text-sm leading-relaxed text-sol-bark/70`}
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
            {t.closing[0]}
            <br />
            {t.closing[1]}
          </p>

          <Link
            href={routes.about[locale]}
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wide text-sol-terracotta-deep transition-all hover:gap-3"
          >
            {t.cta}
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
        </div>
      </div>
    </section>
  );
}
