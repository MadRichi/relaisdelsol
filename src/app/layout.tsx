import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Montserrat, Playfair_Display } from "next/font/google";
import { NavbarThemeProvider } from "@/lib/navbar-theme";
import { getLodgingBusinessSchema, getWebSiteSchema } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Agriturismo Relais del Sol (ex Ca' del Sol) | Lazise, Lago di Garda",
  description:
    "Agriturismo a Pacengo di Lazise sul Lago di Garda, già Agriturismo Ca' del Sol: camere vista lago, family suite, mobilhome, piscina a sfioro e 13 ettari di parco. Prenota sul sito ufficiale.",
  keywords: [
    "agriturismo lago di garda",
    "agriturismo pacengo",
    "agriturismo lazise",
    "agriturismo ca del sol",
    "relais del sol lazise",
    "agriglamping lago di garda",
    "agriturismo con piscina lago di garda",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: "Relais del Sol",
    title: "Agriturismo Relais del Sol (ex Ca' del Sol) | Lazise, Lago di Garda",
    description:
      "Agriturismo sul Lago di Garda a Pacengo di Lazise. Camere, agriglamping, piscina e prodotti della nostra terra.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Agriturismo Relais del Sol",
      },
    ],
  },
  robots: { index: true, follow: true },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = [getLodgingBusinessSchema(), getWebSiteSchema()];

  return (
    <html lang="it" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="bg-sol-cream text-sol-bark antialiased overflow-x-hidden">
        <Script
          src="https://embeds.iubenda.com/widgets/28d07542-847b-487d-a307-d535a312f3a2.js"
          strategy="afterInteractive"
        />
        <NavbarThemeProvider>{children}</NavbarThemeProvider>
      </body>
    </html>
  );
}
