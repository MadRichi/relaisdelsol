import GuideIndexView from "@/views/GuideIndexView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("de", "guide");

export default function Page() {
  return <GuideIndexView locale="de" />;
}
