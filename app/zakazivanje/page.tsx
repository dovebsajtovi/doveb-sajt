import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { BookingForm } from "@/components/site/BookingForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zakazivanje",
  description:
    "Pošaljite upit za izradu sajta. Premium forma za kontakt — podaci se šalju na naš mejl u JSON formatu.",
  openGraph: {
    title: "Zakazivanje — DOVEB",
    description:
      "Pošaljite upit za izradu sajta. Brz odgovor, profesionalna komunikacija i premium izvedba.",
    url: "/zakazivanje",
  },
  alternates: { canonical: "/zakazivanje" },
};

export default function ZakazivanjePage() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Zakazivanje"
            title="Pišite nam"
            description="Pošaljite osnovne informacije i poruku — javljamo se brzo sa predlogom paketa i sledećim koracima."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <Card className="lg:col-span-7 p-6 sm:p-8">
              <BookingForm />
            </Card>

            <Card className="lg:col-span-5 p-6 sm:p-7 h-fit">
              <div className="text-sm font-semibold tracking-tight text-white/90">
                Brz kontakt
              </div>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Ako vam je lakše — pozovite nas direktno. Odgovaramo brzo i
                jasno, bez komplikacija.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  className="btn btn-secondary focus-ring w-full"
                  href={`tel:${SITE.phone.value}`}
                >
                  Pozovi: {SITE.phone.label}
                </a>
                <Link
                  className="btn btn-primary focus-ring w-full"
                  href="/paketi"
                >
                  Pogledaj pakete
                </Link>
              </div>

              <div className="mt-6 text-sm font-semibold tracking-tight text-white/90">
                Šta je najbolje da pošaljete
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70 leading-7">
                {[
                  "Da li imate cenovnik / galeriju  (pri dogovoru ide slanje istih)",
                  "Čime se bavite i šta želite da istaknete",
                  "Primeri sajtova koji vam se sviđaju (ako imate)",
                  "Rok izrade (ako imate predviđen rok)",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
