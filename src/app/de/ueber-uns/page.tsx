import AboutView from "@/views/AboutView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("de", "about");

export default function Page() {
  return <AboutView locale="de" />;
}
