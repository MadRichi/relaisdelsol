"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useNavbarTheme } from "@/lib/navbar-theme";
import Button from "../ui/Button";

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

const navLinks = [
  { label: "Camere", href: "/camere" },
  { label: "Agricamping", href: "/agricamping" },
  { label: "Esperienze", href: "/esperienze" },
  { label: "Prodotti", href: "/prodotti" },
  { label: "Chi Siamo", href: "/chi-siamo" },
] as const;

function joinClasses(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { theme } = useNavbarTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const transparentTextClass = theme === "dark" ? "text-sol-bark" : "text-sol-cream";
  const transparentHoverClass =
    theme === "dark" ? "hover:text-sol-terracotta" : "hover:text-sol-cream/70";

  return (
    <header
      className={joinClasses(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled && "bg-sol-cream shadow-sm",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 md:px-8">
        <div className="w-10 md:hidden" />

        <Link
          href="/"
          className={joinClasses(
            "flex-1 text-center font-serif text-2xl italic md:flex-none md:text-left",
            isScrolled ? "text-sol-bark" : transparentTextClass,
          )}
          onClick={closeMobileMenu}
        >
          Ca&apos; del Sol
        </Link>

        <nav className="ml-10 hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={joinClasses(
                "font-sans text-sm uppercase tracking-wide transition-colors",
                isScrolled
                  ? "text-sol-bark hover:text-sol-terracotta"
                  : joinClasses(transparentTextClass, transparentHoverClass),
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <Button variant="primary" size="sm" href={BOOKING_URL}>
            Prenota Ora
          </Button>
        </div>

        <button
          type="button"
          className={joinClasses(
            "ml-auto inline-flex h-10 w-10 items-center justify-center md:hidden",
            isScrolled ? "text-sol-bark" : transparentTextClass,
          )}
          aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <>
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <path
                  d="M4 7H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="md:hidden fixed inset-0 top-20 bg-sol-cream z-40">
          <nav className="flex h-full flex-col items-center justify-center gap-8 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-sans text-sm uppercase tracking-wide text-sol-bark transition-colors hover:text-sol-terracotta"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" href={BOOKING_URL}>
              Prenota Ora
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
