import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/site/BlogCard";
import { Card } from "@/components/ui/Card";
import { FAQ_PAGES } from "@/lib/faq-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Odgovori na česta pitanja: SEO, cena izrade sajta, održavanje, AI chatbot, Google Ads i rokovi izrade.",
  openGraph: {
    title: "Blog — DOVEB",
    description:
      "Odgovori na česta pitanja: SEO, cena izrade sajta, održavanje, AI chatbot, Google Ads i rokovi.",
    url: "/blog",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Blog"
            title="Pitanja koja klijenti najčešće postavljaju"
            description="Kratko, jasno i profesionalno — da znate šta da očekujete pre nego što krenemo u izradu."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FAQ_PAGES.map((p) => (
              <BlogCard
                key={p.path}
                href={p.path}
                title={p.question}
                description={p.description}
              />
            ))}
          </div>

          <div className="mt-12">
            <Card className="p-7 sm:p-10">
              <div className="text-xs font-semibold tracking-widest text-white/60">
                ZAŠTO MI
              </div>
              <h2 className="h2 mt-3 text-white/95">Kvalitet koji se vidi — i oseća</h2>
              <div className="prose-premium mt-4 space-y-4">
                <p>
                  Radimo posvećeno, sa jasnom komunikacijom i fokusom na ono što vašem
                  biznisu realno donosi korist: premium dizajn, brzinu, SEO i pouzdan
                  proces.
                </p>
                <p>
                  Ne pravimo „samo sajt“ — gradimo digitalni utisak koji uliva poverenje,
                  objašnjava vašu ponudu i vodi posetioca ka kontaktu.
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link className="btn btn-primary focus-ring" href="/zakazivanje">
                  Pišite nam
                </Link>
                <Link className="btn btn-secondary focus-ring" href="/paketi">
                  Pogledaj pakete
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

