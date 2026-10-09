import ContactView from "@/views/ContactView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("en", "contact");

export default function Page() {
  return <ContactView locale="en" />;
}
