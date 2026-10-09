import GlampingView from "@/views/GlampingView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("de", "glamping");

export default function Page() {
  return <GlampingView locale="de" />;
}
