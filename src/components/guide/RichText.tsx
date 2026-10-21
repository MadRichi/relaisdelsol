import Link from "next/link";
import type { ReactNode } from "react";

/** Converte `[testo](url)` e `**grassetto**` in elementi React. */
export default function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[3]) {
      nodes.push(
        <strong key={key++} className="font-semibold text-sol-bark">
          {match[3]}
        </strong>,
      );
    } else {
      const [, label, href] = match;
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <Link
          key={key++}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-sol-terracotta-deep underline underline-offset-4 transition-colors hover:text-sol-bark"
        >
          {label}
        </Link>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes}</>;
}
