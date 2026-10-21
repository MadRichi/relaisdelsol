import GuideIndexView from "@/views/GuideIndexView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("en", "guide");

export default function Page() {
  return <GuideIndexView locale="en" />;
}
