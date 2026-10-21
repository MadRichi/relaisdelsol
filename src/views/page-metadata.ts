import type { Metadata } from "next";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { generatePageMetadata } from "@/lib/seo/metadata";

type MetaKey = "home" | "rooms" | "glamping" | "experiences" | "about" | "contact" | "guide";

const images: Record<MetaKey, string> = {
  home: "/images/og-default.jpg",
  rooms: "/images/camere-hero.jpg",
  glamping: "/images/agricamping-hero.jpg",
  experiences: "/images/esperienze-hero.jpg",
  about: "/images/chi-siamo-hero.jpg",
  contact: "/images/og-default.jpg",
  guide: "/images/panoramica.jpg",
};

export function pageMetadata(locale: Locale, key: MetaKey): Metadata {
  const meta = getDictionary(locale).meta[key];
  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    path: routes[key][locale],
    locale,
    alternates: { ...routes[key] },
    image: images[key],
  });
}
