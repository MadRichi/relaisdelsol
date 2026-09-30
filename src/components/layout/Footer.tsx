import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { BOOKING_URL, bookingLinkProps, contact } from "@/lib/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Camere", href: "/camere" },
  { label: "Agriglamping", href: "/agricamping" },
  { label: "Esperienze", href: "/esperienze" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-sol-bark text-sol-cream/80">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-28 md:px-8 md:pb-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Relais Del Sol"
                width={80}
                height={80}
                className="object-contain w-20 h-auto"
              />
              <p className="font-serif text-2xl text-sol-cream">
                Relais Del Sol
              </p>
            </div>
            <p className="font-sans text-sm text-sol-cream/80">
              Dove la campagna tocca il lago
            </p>
            <p className="font-sans text-sm leading-relaxed text-sol-cream/80">
              {contact.address.street} — {contact.address.postalCode} {contact.address.locality} ({contact.address.region})
            </p>
            <p className="font-sans text-sm">
              <Link
                href={contact.phoneHref}
                className="text-sol-cream/80 transition-colors hover:text-sol-cream"
              >
                {contact.phoneDisplay}
              </Link>
            </p>
            <p className="font-sans text-sm">
              <Link
                href={`mailto:${contact.email}`}
                className="text-sol-cream/80 transition-colors hover:text-sol-cream"
              >
                {contact.email}
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
              variant="ghost"
              href={BOOKING_URL}
              {...bookingLinkProps}
              className="text-sol-cream"
            >
              Verifica Disponibilità
            </Button>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/relaisdelsol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-sol-cream/80 transition-colors hover:text-sol-cream"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="40"
                  height="40"
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
                href="https://www.facebook.com/RelaisdelSol"
                className="text-sol-cream/80 transition-colors hover:text-sol-cream"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="40"
                  height="40"
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
            <p>© {new Date().getFullYear()} Relais del Sol. Tutti i diritti riservati.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p>P.IVA 01930050230</p>
              <Link href="/privacy-policy" className="hover:text-sol-cream transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-sol-cream transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
