import ExperiencesView from "@/views/ExperiencesView";
import { pageMetadata } from "@/views/page-metadata";

export const metadata = pageMetadata("it", "experiences");

export default function Page() {
  return <ExperiencesView locale="it" />;
}
