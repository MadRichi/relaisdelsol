import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetailView, { itSlugFor, roomMetadata, roomStaticParams } from "@/views/RoomDetailView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return roomStaticParams("en");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const itSlug = itSlugFor((await params).slug, "en");
  return itSlug ? roomMetadata(itSlug, "en") : {};
}

export default async function Page({ params }: Props) {
  const itSlug = itSlugFor((await params).slug, "en");
  if (!itSlug) notFound();
  return <RoomDetailView itSlug={itSlug} locale="en" />;
}
