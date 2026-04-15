import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import AgricampingGallery from "./AgricampingGallery";
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter";

export const metadata: Metadata = {
  title: "Agriglamping | Agriturismo Relais del Sol — Lazise, Lago di Garda",
  description:
    "8 mobilhome luxury da 40mq con veranda privata, giardino e vista sui vigneti. L'esperienza glamping autentica sul Lago di Garda.",
};

const BOOKING_URL =
  "https://be.bookingexpert.it/book/simple/noavail?hotel=42837&layout=14194&lang=it&currency=EUR";

const features = [
  { value: "8", label: "Mobilhome luxury" },
  { value: "40mq", label: "Superficie interna" },
  { value: "2", label: "Camere da letto" },
  { value: "2", label: "Bagni" },
  { value: "18mq", label: "Veranda privata" },
  { value: "30mq", label: "Giardino privato" },
  { value: "150mq", label: "Parcheggio privato" },
  { value: "BBQ", label: "Barbecue disponibile" },
];

const amenities = [
  "Soggiorno con divano",
  "Cucina attrezzata",
  "Due camere da letto",
  "Due bagni",
  "Veranda 18mq",
  "Giardino privato",
  "Parcheggio privato",
  "WiFi",
  "Aria condizionata",
  "Vista vigneti e oliveti",
  "Vista lago",
  "Barbecue",
];

const agricampingImages = Array.from({ length: 11 }, (_, index) => ({
  src: `/images/agricamping/agricamping-${index + 1}.jpg`,
  alt: "Mobilhome luxury Agriglamping Relais del Sol",
  width: 1024,
  height: 683,
}));

export default function AgricampingPage() {
  return (
    <main>
      <NavbarThemeSetter theme="dark" />
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/agricamping/agricamping-1.jpg"
          alt="Mobilhome luxury Agriglamping Relais del Sol"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(92,74,50,0.7)]" />
        <div className="absolute bottom-12 left-6 md:left-16">
          <SectionLabel>
            <span className="text-sol-cream">Glamping di lusso</span>
          </SectionLabel>
          <h1 className="mt-3 font-serif text-4xl font-light text-sol-cream md:text-6xl">
            Agriglamping Relais del Sol
          </h1>
          <p className="mt-2 max-w-lg font-sans text-base text-sol-cream/80">
            Otto mobilhome luxury tra vigneti e oliveti, con il lago di Garda
            all&apos;orizzonte.
          </p>
        </div>
      </section>

      <section className="bg-sol-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
          <div>
            <SectionLabel>L&apos;esperienza</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl font-light text-sol-bark md:text-4xl">
              Non un campeggio. Un&apos;altra idea di vacanza.
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-sol-bark/70">
              Svegliarsi con la veranda che guarda i vigneti. Fare colazione
              fuori, nell&apos;aria del mattino, con il lago che si intuisce tra gli
              ulivi sullo sfondo. Le mobilhome di Relais del Sol non sono una
              sistemazione — sono un modo diverso di stare in vacanza.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-sol-bark/70">
              Ogni unità è stata pensata per chi vuole spazio, privacy e comfort
              senza rinunciare al contatto con la natura. Quaranta metri quadri
              di interno curato, una veranda di diciotto metri quadri, un
              giardino privato in erba. E i colori della campagna attorno.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.label} className="bg-sol-mist p-5">
                <p className="font-serif text-3xl font-light text-sol-terracotta">
                  {feature.value}
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-wide text-sol-bark/60">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-sand py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="text-center">
            <SectionLabel>Ogni mobilhome include</SectionLabel>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="bg-sol-cream px-5 py-3 font-sans text-xs uppercase tracking-wide text-sol-bark/70"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sol-cream py-12 md:py-16">
        <div className="mb-8 text-center">
          <SectionLabel>Le mobilhome</SectionLabel>
        </div>
        <AgricampingGallery images={agricampingImages} />
      </section>

      <section className="bg-sol-terracotta py-16 text-center">
        <div className="px-6">
          <SectionLabel>
            <span className="text-sol-cream/70">Prenota direttamente</span>
          </SectionLabel>
          <h2 className="mt-3 font-serif text-3xl font-light text-sol-cream md:text-4xl">
            Vivi l&apos;agriglamping — prenota sul sito ufficiale
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button
              href={BOOKING_URL}
              className="rounded-none bg-sol-cream px-8 py-4 uppercase tracking-wide text-sol-bark hover:bg-sol-sand"
            >
              Verifica disponibilità
            </Button>
            <p className="mt-2 font-sans text-xs text-sol-cream/60">
              Oppure chiamaci:{" "}
              <Link href="tel:+390456490008" className="underline underline-offset-2">
                +39 045 649 0008
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
