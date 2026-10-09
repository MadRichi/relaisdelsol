import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { locales, ogLocales, type Locale } from "@/i18n/config";

export const siteConfig = {
  name: "Agriturismo Relais del Sol",
  url: SITE_URL,
} as const;

const keywordsByLocale: Record<Locale, string[]> = {
  it: [
    "agriturismo lago di garda",
    "agriturismo lazise",
    "agriturismo pacengo",
    "agriturismo ca del sol",
    "agriturismo vicino gardaland",
    "agriturismo con piscina lago di garda",
    "camere vista lago garda",
    "glamping lago di garda",
  ],
  en: [
    "agriturismo lake garda",
    "farm stay lake garda",
    "lazise accommodation",
    "hotel near gardaland",
    "lake garda rooms with lake view",
    "glamping lake garda",
    "family holiday lake garda",
  ],
  de: [
    "agriturismo gardasee",
    "urlaub auf dem bauernhof gardasee",
    "unterkunft lazise",
    "unterkunft nähe gardaland",
    "zimmer mit seeblick gardasee",
    "glamping gardasee",
    "familienurlaub gardasee",
  ],
};

type GeneratePageMetadataInput = {
  title: string;
  description: string;
  /** URL della pagina nella lingua corrente. */
  path: string;
  locale?: Locale;
  /** URL equivalenti nelle altre lingue (hreflang). */
  alternates?: Record<Locale, string>;
  image?: string;
  noIndex?: boolean;
};

export function generatePageMetadata({
  title,
  description,
  path,
  locale = "it",
  alternates,
  image,
  noIndex,
}: GeneratePageMetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
  const imagePath = image ?? "/images/og-default.jpg";
  const imageUrl = imagePath.startsWith("http") ? imagePath : `${siteConfig.url}${imagePath}`;

  const languages = alternates
    ? {
        ...Object.fromEntries(locales.map((l) => [l, alternates[l]])),
        "x-default": alternates.it,
      }
    : undefined;

  return {
    title,
    description,
    keywords: keywordsByLocale[locale],
    alternates: {
      canonical: normalizedPath,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
