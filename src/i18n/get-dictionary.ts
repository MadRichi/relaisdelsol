import type { Locale } from "./config";
import it, { type Dictionary } from "./dictionaries/it";
import en from "./dictionaries/en";
import de from "./dictionaries/de";

const dictionaries: Record<Locale, Dictionary> = { it, en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
