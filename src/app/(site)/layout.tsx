import type { ReactNode } from "react";
import LocaleShell from "@/components/layout/LocaleShell";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <LocaleShell locale="it">{children}</LocaleShell>;
}
