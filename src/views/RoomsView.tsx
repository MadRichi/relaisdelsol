import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import RoomCard from "@/components/cards/RoomCard";
import { getLocalizedRooms, getRoomFacts } from "@/lib/content/rooms";
import { BOOKING_URL, bookingLinkProps, contact } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function RoomsView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.roomsPage;
  const rooms = getLocalizedRooms(locale);

  return (
    <>
      <section className="relative h-64 overflow-hidden md:h-96">
        <Image
          src="/images/camere-hero.jpg"
          alt={t.heroAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(92,74,50,0.7)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <SectionLabel>
            <span className="text-sol-cream">{t.label}</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-5xl font-light text-sol-cream md:text-6xl">
            {t.title}
          </h1>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="font-sans text-base leading-relaxed text-sol-bark/70">{t.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {t.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-wide text-sol-bark/70"
              >
                <span className="h-1 w-1 rounded-full bg-sol-terracotta" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-sand py-16 md:py-24">
        <h2 className="sr-only">{t.listTitle}</h2>
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:px-16">
          {rooms.map((room) => (
            <RoomCard
              key={room.slug}
              slug={room.slug}
              name={room.name}
              shortDescription={room.shortDescription}
              badge={room.badge}
              features={room.features}
              facts={getRoomFacts(room)}
              image={room.images[0]}
              href={room.path}
              label={dict.roomCard.label}
              cta={dict.roomCard.cta}
            />
          ))}
        </div>
      </section>

      <section className="bg-sol-terracotta py-16 text-center">
        <div className="px-6">
          <SectionLabel>
            <span className="text-sol-cream/70">{dict.common.bookDirect}</span>
          </SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream md:text-4xl">
            {t.ctaTitle}
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={BOOKING_URL} {...bookingLinkProps} variant="light" size="xl">
              {dict.common.checkAvailability}
            </Button>
            <p className="mt-2 font-sans text-xs text-sol-cream/60">
              {dict.common.orCallUs}{" "}
              <Link href={contact.phoneHref} className="underline underline-offset-2">
                {contact.phoneDisplay}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
