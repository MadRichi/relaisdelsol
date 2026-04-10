import type { Metadata } from "next";

export const siteConfig = {
  name: "Agriturismo Ca' del Sol",
  description:
    "Agriturismo sul Lago di Garda a Pacengo di Lazise: camere eleganti, agricamping luxury, piscina, colazione e atmosfera autentica tra campagna e lago.",
  url: "https://www.cadelsol.com",
  keywords: [
    "agriturismo lago di garda",
    "agriturismo Lazise",
    "glamping lago di garda",
    "mobilhome luxury lago di garda",
    "agriturismo con piscina Verona",
    "agriturismo dog friendly lago di garda",
  ],
} as const;

type GeneratePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  image,
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
    metadataBase: new URL(siteConfig.url),
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
          width: 1200,
          height: 630,
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
  };
}
