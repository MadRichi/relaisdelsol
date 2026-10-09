import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetailView, { itSlugFor, roomMetadata, roomStaticParams } from "@/views/RoomDetailView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return roomStaticParams("it");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const itSlug = itSlugFor((await params).slug, "it");
  return itSlug ? roomMetadata(itSlug, "it") : {};
}

export default async function Page({ params }: Props) {
  const itSlug = itSlugFor((await params).slug, "it");
  if (!itSlug) notFound();
  return <RoomDetailView itSlug={itSlug} locale="it" />;
}
