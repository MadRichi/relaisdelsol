import type { ReactNode } from "react";
import StickyBookingBar from "@/components/booking/StickyBookingBar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLodgingBusinessSchema, getWebSiteSchema } from "@/lib/seo/schemas";

type LocaleShellProps = {
  locale: Locale;
  children: ReactNode;
};

export default function LocaleShell({ locale, children }: LocaleShellProps) {
  const t = getDictionary(locale);
  const structuredData = [getLodgingBusinessSchema(locale), getWebSiteSchema()];

  return (
    <div lang={locale}>
      {locale !== "it" ? (
        // Il layout radice è unico (lang="it"): aggiorna la lingua del documento per EN/DE
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang="${locale}"` }} />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar locale={locale} dict={t.nav} bookNow={t.common.bookNow} />
      <main>{children}</main>
      <Footer locale={locale} />
      <StickyBookingBar label={t.stickyBar.label} text={t.stickyBar.text} cta={t.common.bookNow} />
    </div>
  );
}
