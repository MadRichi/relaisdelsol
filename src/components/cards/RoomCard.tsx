import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import SectionLabel from "@/components/ui/SectionLabel";

export interface RoomCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  badge?: string;
  features: string[];
  image: { src: string; alt: string; width: number; height: number };
  href: string;
}

export default function RoomCard({
  name,
  shortDescription,
  badge,
  features,
  image,
  href,
}: RoomCardProps) {
  return (
    <Link href={href} className="block">
      <article className="bg-sol-mist transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%]">
        <div className="group relative w-full overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[320px]">
          {badge ? (
            <div className="absolute left-4 top-4 z-10">
              <Badge>{badge}</Badge>
            </div>
          ) : null}

          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12">
          <SectionLabel>La tua stanza</SectionLabel>
          <h3 className="mt-2 font-serif text-2xl text-sol-bark md:text-3xl">
            {name}
          </h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">
            {shortDescription}
          </p>
          <p className="mt-4 font-sans text-xs text-sol-bark/50">
            {features.join(" · ")}
          </p>
        </div>
        </div>
      </article>
    </Link>
  );
}
