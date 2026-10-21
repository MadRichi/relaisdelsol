import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import RichText from "@/components/guide/RichText";
import GuideCard from "@/components/guide/GuideCard";
import PhotoCredit from "@/components/guide/PhotoCredit";
import { guidePath, guideSlugs, locales, routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalizedGuide, getLocalizedGuides, guides, type GuideBlock } from "@/lib/content/guides";
import { formatDate } from "@/lib/format-date";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getArticleSchema, getBreadcrumbSchema, getFaqSchema } from "@/lib/seo/schemas";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";

export function guideIdFor(slug: string, locale: Locale) {
  return Object.keys(guideSlugs).find((id) => guideSlugs[id][locale] === slug);
}

export function guideStaticParams(locale: Locale) {
  return guides.map((guide) => ({ slug: guideSlugs[guide.id][locale] }));
}

export function guideMetadata(id: string, locale: Locale) {
  const base = guides.find((g) => g.id === id);
  if (!base) return {};
  const guide = getLocalizedGuide(base, locale);
  const metadata = generatePageMetadata({
    title: guide.metaTitle,
    description: guide.description,
    path: guide.path,
    locale,
    alternates: Object.fromEntries(locales.map((l) => [l, guidePath(id, l)])) as Record<Locale, string>,
    image: guide.image.src,
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article" as const,
      publishedTime: guide.date,
      modifiedTime: guide.updated ?? guide.date,
    },
  };
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 font-serif text-3xl font-light text-sol-bark">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 font-serif text-xl text-sol-bark">{block.text}</h3>;
    case "list":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 font-sans text-base leading-relaxed text-sol-bark/80">
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "facts":
      return (
        <aside className="mt-8 border-l-2 border-sol-terracotta bg-sol-sand p-6">
          <p className="font-sans text-xs uppercase tracking-widest text-sol-terracotta-deep">{block.title}</p>
          <ul className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-sol-bark/80">
            {block.items.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </aside>
      );
    case "faq":
      return (
        <section className="mt-12">
          <h2 className="font-serif text-3xl font-light text-sol-bark">{block.title}</h2>
          <div className="mt-6 divide-y divide-sol-bark/15 border-y border-sol-bark/15">
            {block.items.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-sol-bark [&::-webkit-details-marker]:hidden">
                  <h3>{item.q}</h3>
                  <span
                    aria-hidden="true"
                    className="font-sans text-xl text-sol-terracotta-deep transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/80">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      );
    case "highlight":
      return <p className="mt-10 font-serif text-2xl italic text-sol-bark">{block.text}</p>;
    default:
      return (
        <p className="mt-4 font-sans text-base leading-relaxed text-sol-bark/80">
          <RichText text={block.text} />
        </p>
      );
  }
}

export default function GuideArticleView({ id, locale }: { id: string; locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.guidePage;
  const guide = getLocalizedGuide(guides.find((g) => g.id === id)!, locale);
  const related = getLocalizedGuides(locale).filter((g) => g.id !== id).slice(0, 3);

  const faqItems = guide.blocks.flatMap((block) => (block.type === "faq" ? block.items : []));
  const schema = [
    ...(faqItems.length ? [getFaqSchema(faqItems, locale)] : []),
    getArticleSchema({
      title: guide.title,
      description: guide.description,
      path: guide.path,
      image: guide.image.src,
      date: guide.date,
      updated: guide.updated,
      locale,
    }),
    getBreadcrumbSchema([
      { name: dict.nav.home, path: routes.home[locale] },
      { name: t.title, path: routes.guide[locale] },
      { name: guide.title, path: guide.path },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src={guide.image.src}
          alt={guide.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sol-bark/20 to-sol-bark/80" />
        {guide.image.credit ? <PhotoCredit credit={guide.image.credit} className="right-4 top-24" /> : null}
      </section>

      <article className="bg-sol-cream pb-20">
        <div className="mx-auto -mt-40 max-w-3xl px-6">
          <header className="relative bg-sol-cream px-0 pt-8 md:px-10 md:pt-10">
            <Link
              href={routes.guide[locale]}
              className="font-sans text-xs uppercase tracking-widest text-sol-terracotta-deep hover:text-sol-bark"
            >
              {t.backToGuides}
            </Link>
            <p className="mt-4 font-sans text-[11px] uppercase tracking-widest text-sol-bark/70">
              {guide.category} · {t.publishedOn} <time dateTime={guide.date}>{formatDate(guide.date, locale)}</time> ·{" "}
              {guide.readingMinutes} {t.minutes}
            </p>
            <h1 className="mt-3 font-serif text-3xl font-light leading-tight text-sol-bark md:text-5xl">
              {guide.title}
            </h1>
          </header>

          <div className="md:px-10">
            {guide.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}

            <aside className="mt-14 bg-sol-bark p-8 text-center md:p-10">
              <SectionLabel>
                <span className="text-sol-cream/70">{t.ctaLabel}</span>
              </SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream">{t.ctaTitle}</h2>
              <p className="mt-3 font-sans text-sm text-sol-cream/80">{t.ctaText}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button href={BOOKING_URL} {...bookingLinkProps}>
                  {dict.common.checkAvailability}
                </Button>
                <Button variant="ghost" href={routes.rooms[locale]} className="text-sol-cream">
                  {t.ctaRooms}
                </Button>
              </div>
            </aside>
          </div>
        </div>

        {related.length ? (
          <div className="mx-auto mt-20 max-w-7xl px-6 md:px-16">
            <SectionLabel>{t.related}</SectionLabel>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((item) => (
                <GuideCard
                  key={item.id}
                  guide={item}
                  dateLabel={formatDate(item.date, locale)}
                  readMore={t.readMore}
                  minutes={t.minutes}
                />
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </>
  );
}
