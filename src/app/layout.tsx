import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NavbarThemeProvider } from "@/lib/navbar-theme";
import { siteConfig } from "@/lib/seo/metadata";
import { getLodgingBusinessSchema } from "@/lib/seo/schemas";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agriturismo Relais del Sol | Lazise, Lago di Garda",
  description: siteConfig.description,
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
