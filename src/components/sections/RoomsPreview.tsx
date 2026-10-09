import RoomCard from "@/components/cards/RoomCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalizedRooms, getRoomFacts } from "@/lib/content/rooms";

export default function RoomsPreview({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.roomsPreview;
  const allRooms = getLocalizedRooms(locale);
  const featuredRooms = allRooms.filter((room) => room.featured);

  return (
    <section className="bg-sol-cream py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionLabel>{t.label}</SectionLabel>
        <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 font-sans text-base text-sol-bark/70">{t.text}</p>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-8 px-6 md:px-16">
        {featuredRooms.map((room) => (
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

      <div className="mt-12 flex justify-center">
        <Button variant="outline" href={routes.rooms[locale]}>
          {t.viewAll.replace("{count}", String(allRooms.length))}
        </Button>
      </div>
    </section>
  );
}
