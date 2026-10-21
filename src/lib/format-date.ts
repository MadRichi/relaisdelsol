import type { Locale } from "@/i18n/config";

const intlLocale: Record<Locale, string> = { it: "it-IT", en: "en-GB", de: "de-DE" };

export function formatDate(isoDate: string, locale: Locale) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString(intlLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
