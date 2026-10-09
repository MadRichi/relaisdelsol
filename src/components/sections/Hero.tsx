"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";
import type { Dictionary } from "@/i18n/get-dictionary";

const VIDEO_MOBILE = "/videos/hero-mobile.mp4";
const VIDEO_DESKTOP = "/videos/hero-desktop.mp4";

type NetworkInformation = { saveData?: boolean };

type HeroProps = {
  dict: Dictionary["hero"];
  roomsHref: string;
  checkAvailability: string;
};

export default function Hero({ dict, roomsHref, checkAvailability }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: NetworkInformation }).connection?.saveData;
    if (prefersReducedMotion || saveData) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      video.play().catch(() => {});
    };
    const onPlaying = () => setIsPlaying(true);
    const onInteraction = () => {
      tryPlay();
      document.removeEventListener("touchstart", onInteraction);
    };

    // Il video parte solo dopo il caricamento della pagina: l'immagine resta
    // l'elemento principale (LCP) e il video non rallenta il primo rendering.
    const startVideo = () => {
      video.src = window.matchMedia("(min-width: 768px)").matches ? VIDEO_DESKTOP : VIDEO_MOBILE;
      video.load();
      video.addEventListener("loadeddata", tryPlay);
      video.addEventListener("playing", onPlaying);
      document.addEventListener("visibilitychange", tryPlay);
      // Fallback iOS: prima interazione dell'utente
      document.addEventListener("touchstart", onInteraction, { passive: true });
      tryPlay();
    };

    let timeoutId: number | undefined;
    const schedule = () => {
      timeoutId = window.setTimeout(startVideo, 300);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("load", schedule);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("playing", onPlaying);
      document.removeEventListener("visibilitychange", tryPlay);
      document.removeEventListener("touchstart", onInteraction);
    };
  }, []);

  return (
    <section className="relative min-h-screen h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt={dict.imageAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(92,74,50,0.7)]" />

      <div className="absolute inset-x-0 bottom-36 md:bottom-44 px-6 md:px-16">
        <div className="max-w-4xl">
          <SectionLabel>
            <span className="text-sol-cream">{dict.label}</span>
          </SectionLabel>

          <h1 className="mt-3 whitespace-pre-line font-serif text-5xl font-light leading-tight text-sol-cream md:text-7xl">
            {dict.title}
          </h1>

          <p className="mt-4 max-w-xl font-sans text-base text-sol-cream/80 md:text-lg">
            {dict.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href={roomsHref}>
              {dict.discoverRooms}
            </Button>
            <Button
              variant="ghost"
              href={BOOKING_URL}
              {...bookingLinkProps}
              className="text-sol-cream"
            >
              {dict.bookDirect}
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
              {dict.barLabel}
            </span>
            <span className="mt-1 font-sans text-sm font-light text-sol-cream">
              {dict.barText}
            </span>
          </div>

          <Link
            href={BOOKING_URL}
            {...bookingLinkProps}
            className="flex w-full items-center justify-center whitespace-nowrap bg-sol-terracotta px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-sol-terracotta/90 md:w-64 md:py-5"
          >
            {checkAvailability}
          </Link>
        </div>
      </div>
    </section>
  );
}
