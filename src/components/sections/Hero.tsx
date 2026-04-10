"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

const ITALIAN_MONTHS = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const WEEKDAY_LABELS = ["Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"];

type DateFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const formatDateForDisplay = (value: string) => {
  if (!value) return "Seleziona data";
  const parsedDate = new Date(`${value}T00:00:00`);
  return parsedDate.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatDateKey = (year: number, month: number, day: number) =>
  `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

function DateField({ label, value, onChange }: DateFieldProps) {
  const today = new Date();
  const normalizedToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const initialDate = value ? new Date(`${value}T00:00:00`) : normalizedToday;
  const [isOpen, setIsOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!value) return;
    const selected = new Date(`${value}T00:00:00`);
    setViewMonth(selected.getMonth());
    setViewYear(selected.getFullYear());
  }, [value]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node | null;
      if (!targetNode) return;
      if (containerRef.current?.contains(targetNode)) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1);
  const firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7;

  const goToPreviousMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
      return;
    }
    setViewMonth((prev) => prev - 1);
  };

  const goToNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
      return;
    }
    setViewMonth((prev) => prev + 1);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-1 cursor-pointer flex-col px-6 py-5 transition-colors hover:bg-sol-cream/5"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="mb-1 block font-sans text-[10px] uppercase tracking-[0.2em] text-sol-cream/50">
        {label}
      </span>
      <span
        className={`font-sans text-sm font-light ${
          value ? "text-sol-cream" : "text-sol-cream/40"
        }`}
      >
        {formatDateForDisplay(value)}
      </span>

      {isOpen ? (
        <div className="absolute bottom-full left-0 z-50 mb-2 w-72 border border-sol-cream/15 bg-sol-bark/95 p-4 shadow-xl backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <button
              type="button"
              className="cursor-pointer px-2 font-serif text-xl text-sol-cream/60 hover:text-sol-cream"
              onClick={(event) => {
                event.stopPropagation();
                goToPreviousMonth();
              }}
            >
              ‹
            </button>
            <span className="font-sans text-xs uppercase tracking-widest text-sol-cream">
              {ITALIAN_MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              className="cursor-pointer px-2 font-serif text-xl text-sol-cream/60 hover:text-sol-cream"
              onClick={(event) => {
                event.stopPropagation();
                goToNextMonth();
              }}
            >
              ›
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7">
            {WEEKDAY_LABELS.map((weekday) => (
              <span
                key={weekday}
                className="py-1 text-center font-sans text-[10px] text-sol-cream/30"
              >
                {weekday}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: firstDayIndex }).map((_, index) => (
              <span key={`empty-${index}`} className="invisible w-full aspect-square" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const dateKey = formatDateKey(viewYear, viewMonth, day);
              const currentDate = new Date(viewYear, viewMonth, day);
              const isSelected = value === dateKey;
              const isToday = currentDate.getTime() === normalizedToday.getTime();
              const isPast = currentDate.getTime() < normalizedToday.getTime();

              return (
                <button
                  key={dateKey}
                  type="button"
                  disabled={isPast}
                  className={`aspect-square w-full cursor-pointer rounded-none font-sans text-xs transition-colors ${
                    isSelected
                      ? "bg-sol-terracotta text-white hover:bg-sol-terracotta"
                      : isPast
                      ? "cursor-not-allowed pointer-events-none text-sol-cream/20"
                      : "text-sol-cream/70 hover:bg-sol-cream/10 hover:text-sol-cream"
                  } ${isToday && !isSelected ? "font-medium text-sol-cream" : ""}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    if (isPast) return;
                    onChange(dateKey);
                    setIsOpen(false);
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function Hero() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState<number>(2);

  const handleBookingClick = () => {
    const url = `https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR${
      checkin ? `&checkin=${checkin}` : ""
    }${checkout ? `&checkout=${checkout}` : ""}${
      guests ? `&adults=${guests}` : ""
    }`;

    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-screen h-screen w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Vista del lago e della campagna di Ca' del Sol"
        fill
        priority
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(92,74,50,0.7) 100%)",
        }}
      />

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
              className="text-sol-cream border-sol-cream"
            >
              Prenota Direttamente
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-sol-cream/60 animate-bounce">
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
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 gap-0 divide-x divide-sol-cream/20">
            <DateField label="Arrivo" value={checkin} onChange={setCheckin} />

            <DateField label="Partenza" value={checkout} onChange={setCheckout} />

            <div className="relative flex flex-1 select-none flex-col px-6 py-5 transition-colors hover:bg-sol-cream/5">
              <span className="mb-1 block font-sans text-[10px] uppercase tracking-[0.2em] text-sol-cream/50">
                Ospiti
              </span>
              <div className="relative flex h-full w-full items-center">
                <div
                  className="absolute left-0 top-0 z-10 h-full w-1/2 cursor-pointer"
                  onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
                />
                <div
                  className="absolute right-0 top-0 z-10 h-full w-1/2 cursor-pointer"
                  onClick={() => setGuests((prev) => Math.min(6, prev + 1))}
                />
                <div className="pointer-events-none flex w-full items-center justify-between">
                  <span className="font-serif text-lg text-sol-cream/50">−</span>
                  <span className="font-sans text-sm font-light text-sol-cream">
                    {guests} {guests === 1 ? "ospite" : "ospiti"}
                  </span>
                  <span className="font-serif text-lg text-sol-cream/50">+</span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleBookingClick}
            className="w-full whitespace-nowrap bg-sol-terracotta px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-sol-terracotta/90 md:w-64 md:py-5"
          >
            Verifica disponibilità
          </button>
        </div>
      </div>
    </section>
  );
}
