import { Card } from "@/components/ui/Card";

const steps = [
  {
    title: "Kontakt",
    desc: "Kratko se čujemo i definišemo cilj sajta i prioritet.",
  },
  {
    title: "Analiza biznisa",
    desc: "Upoznajemo vašu ponudu, publiku i šta treba da istaknemo.",
  },
  {
    title: "Dogovor paketa",
    desc: "Biram​o paket, dogovaramo obim, sadržaj i rokove.",
  },
  {
    title: "Dizajn i razvoj",
    desc: "Premium UI + brzina + responsivnost, uz jasne CTA elemente.",
  },
  {
    title: "Lansiranje i održavanje",
    desc: "Puštamo sajt uživo i ostajemo uz vas kroz podršku i izmene.",
  },
];

function Arrow() {
  return (
    <>
      <div className="hidden lg:flex items-center justify-center px-2 text-white/35 select-none">
        <span className="text-2xl leading-none">→</span>
      </div>
      <div className="lg:hidden flex items-center justify-center py-1 text-white/35 select-none">
        <span className="text-2xl leading-none">↓</span>
      </div>
    </>
  );
}

export function ProcessFlow() {
  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between">
        {steps.map((s, idx) => (
          <div key={s.title} className="flex flex-col lg:flex-row lg:items-stretch">
            <Card className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 transition-transform duration-200 hover:-translate-y-1 hover:border-white/18">
              <div className="text-base font-semibold tracking-tight text-white/95">
                {s.title}
              </div>
              <div className="mt-2 text-sm leading-7 text-zinc-300/80">
                {s.desc}
              </div>
            </Card>
            {idx < steps.length - 1 ? <Arrow /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

