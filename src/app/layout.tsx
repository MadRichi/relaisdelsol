import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NavbarThemeProvider } from "@/lib/navbar-theme";
import { getLodgingBusinessSchema } from "@/lib/seo/schemas";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.relaisdelsol.it"),
  title: "Agriturismo Relais del Sol | Pacengo di Lazise, Lago di Garda",
  description:
    "Agriturismo sul Lago di Garda a Pacengo di Lazise. Camere, agriglamping, piscina a sfioro e prodotti della nostra terra. Prenota direttamente.",
  keywords: [
    "agriturismo lago di garda",
    "agriturismo pacengo",
    "agriturismo lazise",
    "agriglamping lago di garda",
    "agriturismo con piscina verona",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.relaisdelsol.it",
    siteName: "Relais del Sol",
    title: "Agriturismo Relais del Sol | Pacengo di Lazise, Lago di Garda",
    description:
      "Agriturismo sul Lago di Garda a Pacengo di Lazise. Camere, agriglamping, piscina e prodotti della nostra terra.",
    images: [
      {
        url: "/images/hero.jpg",
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
  const lodgingBusinessSchema = getLodgingBusinessSchema();

  return (
    <html lang="it">
      <head>
        <script
          type="text/javascript"
          src="https://embeds.iubenda.com/widgets/28d07542-847b-487d-a307-d535a312f3a2.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lodgingBusinessSchema),
          }}
        />
      </head>
      <body className="bg-sol-cream text-sol-bark antialiased overflow-x-hidden">
        <NavbarThemeProvider>{children}</NavbarThemeProvider>
      </body>
    </html>
  );
}
