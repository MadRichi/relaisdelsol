import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const siteConfig = {
  name: "Agriturismo Relais del Sol",
  description:
    "Agriturismo sul Lago di Garda a Pacengo di Lazise: camere eleganti, agriglamping in mobilhome, piscina, colazione e atmosfera autentica tra campagna e lago.",
  url: SITE_URL,
  keywords: [
    "agriturismo lago di garda",
    "agriturismo Lazise",
    "agriturismo Pacengo",
    "glamping lago di garda",
    "mobilhome lago di garda",
    "agriturismo con piscina Verona",
    "camere vista lago di garda",
  ],
} as const;

type GeneratePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: GeneratePageMetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteConfig.url}${normalizedPath}`;
  const imagePath = image ?? "/images/og-default.jpg";
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : `${siteConfig.url}${imagePath}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      type: "website",
      locale: "it_IT",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
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
