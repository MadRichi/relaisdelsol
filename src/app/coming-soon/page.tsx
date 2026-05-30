import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "In Arrivo — Relais del Sol",
  description:
    "Stiamo lavorando per voi. Il sito dell'Agriturismo Relais del Sol sarà presto online.",
  robots: {
    index: false,
    follow: false,
  },
};

const contactLinkClass =
  "text-sol-bark underline decoration-sol-bark/20 underline-offset-4 transition-colors hover:text-sol-terracotta hover:decoration-sol-terracotta";

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-8">
        <Image
          src="/images/logo.png"
          alt="Relais del Sol"
          width={180}
          height={80}
          className="h-auto w-40 object-contain md:w-44"
          priority
        />

        <div className="space-y-3">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-sol-terracotta">
            Prossimamente
          </p>
          <h1 className="font-serif text-4xl font-light text-sol-bark md:text-5xl">
            Presto online
          </h1>
          <p className="font-sans text-base text-sol-bark/70">
            Stiamo lavorando per voi
          </p>
        </div>

        <div className="space-y-2 font-sans text-sm text-sol-bark/60">
          <p>
            Email:{" "}
            <Link href="mailto:info@relaisdelsol.it" className={contactLinkClass}>
              info@relaisdelsol.it
            </Link>
          </p>
          <p>
            Telefono:{" "}
            <Link href="tel:+390456490008" className={contactLinkClass}>
              +39 045 649 0008
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
