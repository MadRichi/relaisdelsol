import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/forms/ContactForm";
import { contact, mapEmbedSrc } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function ContactView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.contactPage;

  return (
    <>
      <section className="bg-sol-bark pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <SectionLabel>
            <span className="text-sol-cream/60">{t.label}</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-5xl font-light text-sol-cream md:text-6xl">
            {t.title}
          </h1>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="flex min-h-[500px] flex-col bg-sol-bark p-8 md:p-12">
              <h2 className="font-serif text-2xl font-light text-sol-cream">
                {t.visitTitle}
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-sol-cream/80">
                {t.visitText}
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-cream/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21C12 21 5 14.5 5 10A7 7 0 0 1 19 10C19 14.5 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                      {t.address}
                    </p>
                    <p className="mt-0.5 whitespace-pre-line font-sans text-sm text-sol-cream">
                      {"Loc. Casa Antonia, 1\n37017 Pacengo di Lazise (VR)"}
                    </p>
                    <Link
                      href={contact.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 font-sans text-xs text-sol-cream/60 transition-colors hover:text-sol-cream"
                    >
                      {t.openMaps}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-cream/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 7.5C9 11.1 11.9 14 15.5 14V16.5C10.5 16.5 6.5 12.5 6.5 7.5H9Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                      {t.phone}
                    </p>
                    <Link
                      href={contact.phoneHref}
                      className="mt-0.5 font-sans text-sm text-sol-cream transition-colors hover:text-sol-cream/80"
                    >
                      {contact.phoneDisplay}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-cream/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6.5C4 5.1 5.1 4 6.5 4H17.5C18.9 4 20 5.1 20 6.5V13.5C20 14.9 18.9 16 17.5 16H9L5 20V16.3C4.4 15.9 4 15.2 4 14.5V6.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                      {t.whatsapp}
                    </p>
                    <Link
                      href={contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 font-sans text-sm text-sol-cream transition-colors hover:text-sol-cream/80"
                    >
                      {contact.whatsappDisplay}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-sol-cream/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <div className="flex flex-col">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                      {t.email}
                    </p>
                    <Link
                      href={`mailto:${contact.email}`}
                      className="mt-0.5 font-sans text-sm text-sol-cream transition-colors hover:text-sol-cream/80"
                    >
                      {contact.email}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-sol-cream/15 pt-8">
                <p className="font-sans text-[10px] uppercase tracking-widest text-sol-cream/50">
                  {t.hoursLabel}
                </p>
                <p className="mt-2 font-sans text-sm text-sol-cream">
                  {t.hours}
                </p>
              </div>
            </div>

            <div className="min-h-[500px] h-full w-full">
              <iframe
                data-cmp-ab="1"
                src={mapEmbedSrc(locale)}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
                className="h-full min-h-[500px] w-full border-0"
              />
            </div>
          </div>

          <div className="mt-0">
            <ContactForm dict={dict.contactForm} locale={locale} />
          </div>
        </div>
      </section>

    </>
  );
}
