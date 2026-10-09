import HomeView from "@/views/HomeView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("de", "home");

export default function Page() {
  return <HomeView locale="de" />;
}
