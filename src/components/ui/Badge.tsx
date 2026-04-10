import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center bg-sol-terracotta/90 px-3 py-1 font-sans text-xs uppercase tracking-wider text-white rounded-none">
      {children}
    </span>
  );
}
