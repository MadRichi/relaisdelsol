import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/lib/content/rooms";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getRoomSchema } from "@/lib/seo/schemas";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";
import RoomGallery from "./RoomGallery";

type RoomPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};

  return generatePageMetadata({
    title: `${room.name} | Agriturismo Relais del Sol`,
    description: room.shortDescription,
    path: `/camere/${room.slug}`,
    image: room.images[0]?.src,
  });
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const roomSchema = getRoomSchema(room);
  const facts = [
    { label: "Dimensione", value: room.size },
    { label: "Ospiti", value: room.guests },
    { label: "Letti", value: room.beds },
    { label: "Posizione", value: room.floor },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));
  const roomIndex = rooms.indexOf(room);
  const otherRooms = [1, 2, 3].map((offset) => rooms[(roomIndex + offset) % rooms.length]);

  return (
    <>
      {room.navbarTheme ? <NavbarThemeSetter theme={room.navbarTheme} /> : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }}
      />
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={room.images[0].src}
          alt={room.images[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(92,74,50,0.7)]" />
        <div className="absolute bottom-12 left-6 right-6 md:left-16">
          {room.badge ? <Badge>{room.badge}</Badge> : null}
          <h1 className="mt-3 font-serif text-4xl font-light text-sol-cream md:text-6xl">
            {room.name}
          </h1>
          <p className="mt-2 font-sans text-sm text-sol-cream/70">
            {room.features.join(" · ")}
          </p>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3 md:px-16">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl text-sol-bark">La stanza</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-sol-bark/70">
              {room.longDescription}
            </p>

            {facts.length ? (
              <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-sol-sand p-4">
                    <dt className="font-sans text-[10px] uppercase tracking-widest text-sol-bark/50">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-sans text-sm text-sol-bark">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <h3 className="mt-10 font-serif text-xl text-sol-bark">I servizi</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {room.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="bg-sol-sand px-4 py-2 font-sans text-xs uppercase tracking-wide text-sol-bark/70"
                >
                  {amenity}
                </span>
              ))}
            </div>

            {room.notes?.length ? (
              <ul className="mt-6 space-y-1">
                {room.notes.map((note) => (
                  <li key={note} className="font-sans text-xs italic text-sol-bark/50">
                    {note}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <aside className="md:sticky md:top-28 md:self-start">
            <div className="bg-sol-mist p-8">
              <SectionLabel>Prenota questa stanza</SectionLabel>
              <h3 className="mt-2 font-serif text-xl text-sol-bark">{room.name}</h3>
              <div className="mt-4 h-px w-full bg-sol-bark/15" />
              <p className="mt-4 font-sans text-xs text-sol-bark/50">
                Miglior prezzo sul sito ufficiale · Nessuna commissione
              </p>
              {room.bookingUnits?.length ? (
                <p className="mt-3 font-sans text-xs leading-relaxed text-sol-bark/60">
                  Nel sistema di prenotazione la trovi come:{" "}
                  <span className="text-sol-bark">{room.bookingUnits.join(", ")}</span>
                </p>
              ) : null}
              <div className="mt-5 flex flex-col items-start gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href={BOOKING_URL}
                  {...bookingLinkProps}
                >
                  Verifica disponibilità
                </Button>
                <Link
                  href="/camere"
                  className="font-sans text-sm uppercase tracking-wide text-sol-terracotta transition-colors hover:text-sol-bark"
                >
                  Vedi altre camere
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <RoomGallery images={room.images} />

      <section className="bg-sol-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <SectionLabel>Potrebbe interessarti anche</SectionLabel>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherRooms.map((other) => (
              <Link key={other.slug} href={`/camere/${other.slug}`} className="group block bg-sol-mist">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={other.images[0].src}
                    alt={other.images[0].alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="p-5 font-serif text-lg text-sol-bark">{other.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
