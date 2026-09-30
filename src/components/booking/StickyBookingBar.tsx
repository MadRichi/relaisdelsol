"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";

export default function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-sol-bark px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex flex-col justify-center">
          <span className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
            Miglior prezzo garantito
          </span>
          <span className="font-sans text-xs font-light text-sol-cream">
            Prenota sul sito ufficiale
          </span>
        </div>
        <Link
          href={BOOKING_URL}
          {...bookingLinkProps}
          tabIndex={isVisible ? 0 : -1}
          className="flex items-center justify-center rounded-none bg-sol-terracotta px-5 py-3 font-sans text-xs uppercase tracking-wide text-white"
        >
          Prenota Ora
        </Link>
      </div>
    </div>
  );
}
