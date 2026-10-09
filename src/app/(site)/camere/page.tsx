import RoomsView from "@/views/RoomsView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("it", "rooms");

export default function Page() {
  return <RoomsView locale="it" />;
}
