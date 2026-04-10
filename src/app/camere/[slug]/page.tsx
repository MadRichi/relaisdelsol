import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { rooms } from "@/lib/content/rooms";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getRoomSchema } from "@/lib/seo/schemas";
import RoomGallery from "./RoomGallery";

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

type RoomPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};

  return generatePageMetadata({
    title: `${room.name} | Agriturismo Ca' del Sol`,
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

  return (
    <main>
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
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(92,74,50,0.7)]" />
        <div className="absolute bottom-12 left-6 md:left-16">
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
          </div>

          <aside className="md:sticky md:top-8 md:self-start">
            <div className="bg-sol-mist p-8">
              <SectionLabel>Prenota questa stanza</SectionLabel>
              <h3 className="mt-2 font-serif text-xl text-sol-bark">{room.name}</h3>
              <div className="mt-4 h-px w-full bg-sol-bark/15" />
              <p className="mt-4 font-sans text-xs text-sol-bark/50">
                Miglior prezzo · Regalo di benvenuto · Cancellazione flessibile
              </p>
              <div className="mt-5 flex flex-col items-start gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href={BOOKING_URL}
                  className="uppercase tracking-wide bg-sol-terracotta border-2 border-sol-terracotta text-white hover:bg-sol-terracotta/90"
                >
                  Prenota Ora
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="/camere"
                  className="uppercase tracking-wide text-sol-terracotta hover:bg-sol-sand border-0 px-0"
                >
                  Vedi altre camere
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <RoomGallery images={room.images} />
    </main>
  );
}
