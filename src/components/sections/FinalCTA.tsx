import Link from "next/link";
import { BOOKING_URL, bookingLinkProps, contact } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="bg-sol-bark py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl font-light text-sol-cream md:text-5xl">
          Pronto a vivere Relais del Sol?
        </h2>
        <p className="mt-4 font-sans text-sm text-sol-cream/70">
          Prenota direttamente sul sito ufficiale. Il prezzo migliore è sempre
          qui.
        </p>
        <Link
          href={BOOKING_URL}
          {...bookingLinkProps}
          className="mt-8 inline-flex rounded-none bg-sol-terracotta px-10 py-4 font-sans text-sm uppercase tracking-wide text-white transition-colors hover:bg-sol-terracotta/90"
        >
          Prenota Ora
        </Link>
        <p className="mt-4 font-sans text-xs text-sol-cream/40">
          Oppure chiamaci:{" "}
          <Link
            href={contact.phoneHref}
            className="text-sol-cream/60 transition-colors hover:text-sol-cream"
          >
            {contact.phoneDisplay}
          </Link>
        </p>
      </div>
    </section>
  );
}
