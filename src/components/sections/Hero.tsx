"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    // Try immediately
    tryPlay();

    // Try when video metadata is loaded
    video.addEventListener("loadeddata", tryPlay);

    // Try when page becomes visible
    document.addEventListener("visibilitychange", tryPlay);

    // Try on first user interaction (iOS fallback)
    const onInteraction = () => {
      tryPlay();
      document.removeEventListener("touchstart", onInteraction);
    };
    document.addEventListener("touchstart", onInteraction);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      document.removeEventListener("touchstart", onInteraction);
    };
  }, []);

  return (
    <section className="relative min-h-screen h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/agriturismorelaisdelsolpacengo.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(92,74,50,0.7)]" />

      <div className="absolute inset-x-0 bottom-36 md:bottom-44 px-6 md:px-16">
        <div className="max-w-4xl">
          <SectionLabel>
            <span className="text-sol-cream">Pacengo di Lazise · Lago di Garda</span>
          </SectionLabel>

          <h1 className="mt-3 whitespace-pre-line font-serif text-5xl font-light leading-tight text-sol-cream md:text-7xl">
            {"Dove la campagna\ntocca il lago"}
          </h1>

          <p className="mt-4 max-w-xl font-sans text-base text-sol-cream/80 md:text-lg">
            Un angolo d&apos;Italia dove il tempo rallenta, la campagna profuma di
            vino e ulivi, e il lago è sempre lì — a due passi, a fare da sfondo
            alla tua vacanza più bella.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href="/camere">
              Scopri le Camere
            </Button>
            <Button
              variant="ghost"
              href={BOOKING_URL}
              {...bookingLinkProps}
              className="text-sol-cream"
            >
              Prenota Direttamente
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 text-sol-cream/60 animate-bounce md:block">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-sol-bark/85 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center px-6 py-4 md:px-16 md:py-5">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-sol-cream/50">
              Prenotazione diretta
            </span>
            <span className="mt-1 font-sans text-sm font-light text-sol-cream">
              Miglior prezzo garantito · Nessuna commissione
            </span>
          </div>

          <Link
            href={BOOKING_URL}
            {...bookingLinkProps}
            className="flex w-full items-center justify-center whitespace-nowrap bg-sol-terracotta px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-sol-terracotta/90 md:w-64 md:py-5"
          >
            Verifica disponibilità
          </Link>
        </div>
      </div>
    </section>
  );
}
