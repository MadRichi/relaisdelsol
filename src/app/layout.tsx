import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Montserrat, Playfair_Display } from "next/font/google";
import { NavbarThemeProvider } from "@/lib/navbar-theme";
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
  title: "Agriturismo Relais del Sol | Lazise, Lago di Garda",
  robots: { index: true, follow: true },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="it" className={`${playfair.variable} ${montserrat.variable}`} suppressHydrationWarning>
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
