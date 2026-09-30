import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sol-cream px-6 text-center">
      <SectionLabel>Errore 404</SectionLabel>
      <h1 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
        Questa pagina non esiste
      </h1>
      <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-sol-bark/70">
        Forse il link è cambiato con il nuovo sito. Torna alla home o scopri le
        nostre camere.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex h-11 items-center bg-sol-terracotta px-5 font-sans text-sm uppercase tracking-wide text-white"
        >
          Torna alla home
        </Link>
        <Link
          href="/camere"
          className="inline-flex h-11 items-center border border-sol-terracotta px-5 font-sans text-sm uppercase tracking-wide text-sol-terracotta"
        >
          Le camere
        </Link>
      </div>
    </main>
  );
}
