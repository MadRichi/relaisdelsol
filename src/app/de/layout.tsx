import type { ReactNode } from "react";
import LocaleShell from "@/components/layout/LocaleShell";

export default function Layout({ children }: { children: ReactNode }) {
  return <LocaleShell locale="de">{children}</LocaleShell>;
}
