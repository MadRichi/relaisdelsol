import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideArticleView, { guideIdFor, guideMetadata, guideStaticParams } from "@/views/GuideArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams("en");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = guideIdFor((await params).slug, "en");
  return id ? guideMetadata(id, "en") : {};
}

export default async function Page({ params }: Props) {
  const id = guideIdFor((await params).slug, "en");
  if (!id) notFound();
  return <GuideArticleView id={id} locale="en" />;
}
