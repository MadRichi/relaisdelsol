import ContactView from "@/views/ContactView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("de", "contact");

export default function Page() {
  return <ContactView locale="de" />;
}
