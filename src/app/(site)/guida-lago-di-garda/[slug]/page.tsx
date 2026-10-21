import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideArticleView, { guideIdFor, guideMetadata, guideStaticParams } from "@/views/GuideArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams("it");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = guideIdFor((await params).slug, "it");
  return id ? guideMetadata(id, "it") : {};
}

export default async function Page({ params }: Props) {
  const id = guideIdFor((await params).slug, "it");
  if (!id) notFound();
  return <GuideArticleView id={id} locale="it" />;
}
