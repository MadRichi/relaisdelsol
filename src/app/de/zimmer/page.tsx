import RoomsView from "@/views/RoomsView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("de", "rooms");

export default function Page() {
  return <RoomsView locale="de" />;
}
