type PhotoCreditProps = {
  credit: { author: string; license: string; url: string };
  className?: string;
};

/** Attribuzione per foto Creative Commons (autore, licenza, link alla fonte). */
export default function PhotoCredit({ credit, className = "" }: PhotoCreditProps) {
  return (
    <a
      href={credit.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute z-10 font-sans text-[10px] text-white/90 underline-offset-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)] hover:underline ${className}`}
    >
      Foto © {credit.author} · {credit.license} · Wikimedia Commons
    </a>
  );
}
