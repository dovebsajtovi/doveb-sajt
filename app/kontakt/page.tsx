import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte nas direktno radi dogovora: Damjan Veselinović i Vojislav Budurić. Poziv jednim klikom.",
  openGraph: {
    title: "Kontakt — DOVEB",
    description:
      "Kontaktirajte nas direktno radi dogovora. Brz odgovor i profesionalna komunikacija.",
    url: "/kontakt",
  },
  alternates: { canonical: "/kontakt" },
};

function Avatar({ letter }: { letter: string }) {
  return (
    <div className="h-12 w-12 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <span className="text-lg font-semibold tracking-tight text-white/90">
        {letter}
      </span>
    </div>
  );
}

export default function KontaktPage() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Kontakt"
            title="Kontaktirajte nas direktno"
            description="Najbrži put do dogovora je kratak razgovor. Pozovite nas ili pošaljite upit kroz formu zakazivanja."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {SITE.contacts.map((c) => (
              <Card key={c.phoneValue} className="p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <Avatar letter={c.avatarLetter} />
                  <div className="min-w-0">
                    <div className="text-base font-semibold tracking-tight text-white/95">
                      {c.name}
                    </div>
                    <a
                      className="mt-1 inline-flex text-sm font-semibold text-white/75 hover:text-white transition underline underline-offset-4"
                      href={`tel:${c.phoneValue}`}
                    >
                      {c.phoneLabel}
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  Slobodno nas kontaktirajte direktno radi dogovora oko paketa, sadržaja i rokova.
                </p>

                <div className="mt-6">
                  <a className="btn btn-primary focus-ring w-full" href={`tel:${c.phoneValue}`}>
                    Pozovi
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

