import Image from "next/image";
import Link from "next/link";
import type { LocalizedGuide } from "@/lib/content/guides";

type GuideCardProps = {
  guide: LocalizedGuide;
  dateLabel: string;
  readMore: string;
  minutes: string;
};

export default function GuideCard({ guide, dateLabel, readMore, minutes }: GuideCardProps) {
  return (
    <Link href={guide.path} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden bg-sol-cream transition-transform duration-300 hover:-translate-y-1">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={guide.image.src}
            alt={guide.imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="font-sans text-[10px] uppercase tracking-widest text-sol-bark/70">
            {guide.category} · {dateLabel} · {guide.readingMinutes} {minutes}
          </p>
          <h3 className="mt-2 font-serif text-xl leading-snug text-sol-bark">{guide.title}</h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">{guide.excerpt}</p>
          <span className="mt-auto pt-4 font-sans text-xs uppercase tracking-wide text-sol-terracotta-deep">
            {readMore}
          </span>
        </div>
      </article>
    </Link>
  );
}
