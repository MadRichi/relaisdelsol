"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, GTM_ID } from "@/lib/site";

type Gtag = (...args: unknown[]) => void;

function track(event: string, params: Record<string, string>) {
  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  gtag?.("event", event, params);
}

/**
 * Google Analytics 4 e Google Tag Manager con Consent Mode v2.
 * Il consenso di default (negato) è impostato nel layout radice prima di ogni altro script;
 * iubenda lo aggiorna quando l'utente sceglie. Il tag viene caricato dopo la pagina.
 */
export default function Analytics() {
  useEffect(() => {
    // Clic verso il booking engine e contatti diretti: le conversioni principali del sito
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const params = { link_text: link.textContent?.trim().slice(0, 80) ?? "", page_path: location.pathname };
      if (href.includes("booking.slope.it")) track("booking_click", params);
      else if (href.startsWith("tel:")) track("phone_click", params);
      else if (href.includes("wa.me")) track("whatsapp_click", params);
      else if (href.startsWith("mailto:")) track("email_click", params);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-config" strategy="lazyOnload">
        {`gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
      <Script id="gtm" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    </>
  );
}

export { track };
