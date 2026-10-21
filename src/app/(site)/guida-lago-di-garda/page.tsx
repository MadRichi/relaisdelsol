import GuideIndexView from "@/views/GuideIndexView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("it", "guide");

export default function Page() {
  return <GuideIndexView locale="it" />;
}
