import Link from "next/link";
import Button from "../ui/Button";

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Camere", href: "/camere" },
  { label: "Agriglamping", href: "/agricamping" },
  { label: "Esperienze", href: "/esperienze" },
  { label: "Prodotti", href: "/prodotti" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-sol-bark text-sol-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <p className="font-serif text-2xl italic text-sol-cream">Ca&apos; del Sol</p>
            <p className="font-sans text-sm text-sol-cream/80">
              Dove la campagna tocca il lago
            </p>
            <p className="font-sans text-sm leading-relaxed text-sol-cream/80">
              Loc. Casa Antonia, 1 — 37017 Pacengo di Lazise (VR)
            </p>
            <p className="font-sans text-sm">
              <Link
                href="tel:+390456490008"
                className="text-sol-cream/80 transition-colors hover:text-sol-cream"
              >
                +39 045 649 0008
              </Link>
            </p>
            <p className="font-sans text-sm">
              <Link
                href="mailto:agriturismo@cadelsol.com"
                className="text-sol-cream/80 transition-colors hover:text-sol-cream"
              >
                agriturismo@cadelsol.com
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-sans text-xs uppercase tracking-widest text-sol-cream">
              Esplora
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-sol-cream/70 transition-colors hover:text-sol-cream"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <p className="font-sans text-xs uppercase tracking-widest text-sol-cream">
              Prenota Direttamente
            </p>
            <p className="font-sans text-sm leading-relaxed text-sol-cream/80">
              Il prezzo migliore è sempre sul nostro sito ufficiale.
            </p>
            <Button
              variant="outline"
              href={BOOKING_URL}
              className="border-sol-cream text-sol-cream hover:bg-sol-cream/10"
            >
              Verifica Disponibilità
            </Button>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com"
                className="text-sol-cream/80 transition-colors hover:text-sol-cream"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
                </svg>
              </Link>

              <Link
                href="https://www.facebook.com"
                className="text-sol-cream/80 transition-colors hover:text-sol-cream"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M14 8H16V5H14C11.8 5 10 6.8 10 9V11H8V14H10V20H13V14H15.5L16 11H13V9C13 8.4 13.4 8 14 8Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-sol-cream/20 pt-6">
          <div className="flex flex-col gap-2 font-sans text-xs text-sol-cream/70 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Ca&apos; del Sol. Tutti i diritti riservati.</p>
            <div className="flex items-center gap-4">
              <p>P.IVA 01930050230</p>
              <Link href="/privacy-policy" className="hover:text-sol-cream transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
