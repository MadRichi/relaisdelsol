import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function DirectBookingBanner({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).directBooking;

  return (
    <section className="bg-sol-terracotta py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <SectionLabel>
            <span className="text-sol-cream/70">{t.label}</span>
          </SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-cream md:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {t.items.map((item, index) => (
            <article key={item.title} className="border-t border-sol-cream/30 pt-8">
              <p className="font-serif text-5xl font-light text-sol-cream/20">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-xl text-sol-cream">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-sol-cream/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="ghost"
            size="lg"
            href={BOOKING_URL}
            {...bookingLinkProps}
            className="text-sol-cream"
          >
            {t.cta}
          </Button>
          <p className="mt-4 text-center font-sans text-xs italic text-sol-cream/50">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}
