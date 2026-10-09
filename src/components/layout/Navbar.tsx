"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useNavbarTheme } from "@/lib/navbar-theme";
import Button from "../ui/Button";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";
import { alternatePaths, locales, routes, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type NavbarProps = {
  locale: Locale;
  dict: Dictionary["nav"];
  bookNow: string;
};

function joinClasses(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ locale, dict, bookNow }: NavbarProps) {
  const { theme } = useNavbarTheme();
  const pathname = usePathname();
  const languagePaths = alternatePaths(pathname ?? "/");
  const navLinks = [
    { label: dict.links.rooms, href: routes.rooms[locale] },
    { label: dict.links.glamping, href: routes.glamping[locale] },
    { label: dict.links.experiences, href: routes.experiences[locale] },
    { label: dict.links.about, href: routes.about[locale] },
    { label: dict.links.contact, href: routes.contact[locale] },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY >= 60);
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
    theme === "dark" ? "hover:text-sol-terracotta-deep" : "hover:text-sol-cream/70";

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
          href={routes.home[locale]}
          className="flex flex-1 items-center justify-center gap-2 transition-all duration-300 md:flex-none md:justify-start"
          onClick={closeMobileMenu}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={36}
            height={36}
            className="object-contain"
          />
          <span
            className={joinClasses(
              "font-serif text-2xl",
              isScrolled ? "text-sol-bark" : transparentTextClass,
            )}
            style={!isScrolled ? { textShadow: "0 1px 3px rgba(0,0,0,0.4)" } : undefined}
          >
            Relais Del Sol
          </span>
        </Link>

        <nav className="ml-10 hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={joinClasses(
                "font-sans text-sm uppercase tracking-wide transition-colors",
                isScrolled
                  ? "text-sol-bark hover:text-sol-terracotta-deep font-medium"
                  : joinClasses(transparentTextClass, transparentHoverClass, "font-medium"),
              )}
              style={!isScrolled ? { textShadow: "0 1px 3px rgba(0,0,0,0.4)" } : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-5 md:flex">
          <nav aria-label={dict.language} className="flex items-center gap-1 font-sans text-xs uppercase tracking-wide">
            {locales.map((l) => (
              <Link
                key={l}
                href={languagePaths[l]}
                hrefLang={l}
                lang={l}
                aria-current={l === locale ? "true" : undefined}
                className={joinClasses(
                  "px-1 py-1 transition-colors",
                  l === locale ? "font-semibold underline underline-offset-4" : "opacity-80 hover:opacity-100",
                  isScrolled ? "text-sol-bark" : transparentTextClass,
                )}
                style={!isScrolled ? { textShadow: "0 1px 3px rgba(0,0,0,0.4)" } : undefined}
              >
                {l}
              </Link>
            ))}
          </nav>
          <Button variant="primary" size="sm" href={BOOKING_URL} {...bookingLinkProps}>
            {bookNow}
          </Button>
        </div>

        <button
          type="button"
          className={joinClasses(
            "ml-auto inline-flex h-10 w-10 items-center justify-center md:hidden",
            isScrolled ? "text-sol-bark" : transparentTextClass,
          )}
          aria-label={isMobileMenuOpen ? dict.closeMenu : dict.openMenu}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {isMobileMenuOpen ? dict.closeMenu : dict.openMenu}
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
                className="font-sans text-sm uppercase tracking-wide text-sol-bark transition-colors hover:text-sol-terracotta-deep"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" href={BOOKING_URL} {...bookingLinkProps}>
              {bookNow}
            </Button>
            <div className="mt-2 flex items-center gap-4 font-sans text-xs uppercase tracking-wide">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={languagePaths[l]}
                  hrefLang={l}
                  lang={l}
                  onClick={closeMobileMenu}
                  aria-current={l === locale ? "true" : undefined}
                  className={joinClasses(
                    "px-2 py-1 text-sol-bark",
                    l === locale ? "font-semibold underline underline-offset-4" : "opacity-70",
                  )}
                >
                  {l}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
