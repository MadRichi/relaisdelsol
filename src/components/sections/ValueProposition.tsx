import Divider from "@/components/ui/Divider";
import SectionLabel from "@/components/ui/SectionLabel";

const items = [
  {
    number: "01",
    title: "Il lago a due passi",
    description:
      "Pacengo di Lazise è uno degli angoli più autentici del Lago di Garda. Qui il turismo di massa si ferma, e inizia la vera vacanza.",
  },
  {
    number: "02",
    title: "Ospitalità di famiglia",
    description:
      "Paolo e Sabrina hanno scelto ogni tessuto, ogni profumo, ogni dettaglio. Non per fare un albergo, ma per condividere il posto dove vivono.",
  },
  {
    number: "03",
    title: "Natura e autenticità",
    description:
      "Vino, olio, prodotti della terra. La colazione con le marmellate di casa. Il silenzio della campagna la mattina presto.",
  },
] as const;

export default function ValueProposition() {
  return (
    <section className="bg-sol-sand py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionLabel>Perché Ca&apos; del Sol</SectionLabel>
        <Divider className="mt-4" />
        <h2 className="mt-4 font-serif text-4xl font-light text-sol-bark md:text-5xl">
          Non un hotel. Un posto dove tornare.
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3 md:px-16">
        {items.map((item) => (
          <article key={item.number}>
            <p className="font-serif text-6xl font-light text-sol-terracotta/30">
              {item.number}
            </p>
            <h3 className="mt-2 font-serif text-xl text-sol-bark">{item.title}</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-sol-bark/70">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
