import RoomCard from "@/components/cards/RoomCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { rooms } from "@/lib/content/rooms";

export default function RoomsPreview() {
  return (
    <section className="bg-sol-cream py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionLabel>Dove dormire</SectionLabel>
        <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
          Camere pensate per farti stare bene
        </h2>
        <p className="mt-4 font-sans text-base text-sol-bark/70">
          Ogni stanza è diversa. Tutte hanno una cosa in comune: ti faranno
          venire voglia di restare un giorno in più.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-8 px-6 md:px-16">
        {rooms.slice(0, 3).map((room) => (
          <RoomCard
            key={room.slug}
            slug={room.slug}
            name={room.name}
            shortDescription={room.shortDescription}
            badge={room.badge}
            features={room.features}
            image={room.images[0]}
            href={`/camere/${room.slug}`}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" href="/camere">
          Vedi tutte le camere
        </Button>
      </div>
    </section>
  );
}
