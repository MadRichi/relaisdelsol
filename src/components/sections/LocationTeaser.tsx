import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { contact, mapEmbedSrc } from "@/lib/site";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function LocationTeaser({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).location;
  const address = `${contact.address.street} — ${contact.address.postalCode} ${contact.address.locality} (${contact.address.region})`;

  return (
    <section className="bg-sol-sand py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-0 md:px-16">
        <div className="flex flex-col justify-center">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-6 font-sans text-sm leading-relaxed text-sol-bark/70">{t.text}</p>

          <div className="mt-8 flex flex-col gap-3">
            {[address, ...t.bullets].map((line) => (
              <div key={line} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-sol-terracotta" />
                <p className="font-sans text-sm text-sol-bark/70">{line}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="primary"
              href={contact.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.directions}
            </Button>
            <Button variant="outline" href={`${routes.experiences[locale]}#territorio`}>
              {t.discoverArea}
            </Button>
          </div>
        </div>

        <div className="min-h-[400px] overflow-hidden rounded-none md:min-h-[500px]">
          <iframe
            data-cmp-ab="1"
            src={mapEmbedSrc(locale)}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t.mapTitle}
            className="min-h-[400px] w-full border-0 md:min-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
