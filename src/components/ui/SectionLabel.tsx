import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="font-sans text-xs uppercase tracking-widest text-sol-olive">
      {children}
    </span>
  );
}
