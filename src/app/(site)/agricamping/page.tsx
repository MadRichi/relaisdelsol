import GlampingView from "@/views/GlampingView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("it", "glamping");

export default function Page() {
  return <GlampingView locale="it" />;
}
