import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFoundView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-sol-cream px-6 text-center">
      <SectionLabel>{t.label}</SectionLabel>
      <h1 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">{t.title}</h1>
      <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-sol-bark/70">{t.text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href={routes.home[locale]}
          className="inline-flex h-11 items-center bg-sol-terracotta px-5 font-sans text-sm uppercase tracking-wide text-white"
        >
          {t.home}
        </Link>
        <Link
          href={routes.rooms[locale]}
          className="inline-flex h-11 items-center border border-sol-terracotta px-5 font-sans text-sm uppercase tracking-wide text-sol-terracotta-deep"
        >
          {t.rooms}
        </Link>
      </div>
    </section>
  );
}
