import RoomsView from "@/views/RoomsView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("en", "rooms");

export default function Page() {
  return <RoomsView locale="en" />;
}
