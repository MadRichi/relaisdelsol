import ExperiencesView from "@/views/ExperiencesView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("de", "experiences");

export default function Page() {
  return <ExperiencesView locale="de" />;
}
