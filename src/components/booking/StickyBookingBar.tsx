"use client";

import { useEffect, useState } from "react";

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

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
      className={`fixed bottom-0 left-0 right-0 z-50 min-h-[64px] bg-sol-bark px-4 py-3 pb-[env(safe-area-inset-bottom)] flex items-center transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col justify-center py-3">
          <span className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
            Miglior prezzo garantito
          </span>
          <span className="font-sans text-xs font-light text-sol-cream">
            Prenota sul sito ufficiale
          </span>
        </div>
        <button
          type="button"
          onClick={() => window.open(BOOKING_URL, "_blank")}
          className="my-1 rounded-none bg-sol-terracotta px-5 py-2 font-sans text-xs uppercase tracking-wide text-white flex items-center justify-center"
        >
          Prenota Ora
        </button>
      </div>
    </div>
  );
}
