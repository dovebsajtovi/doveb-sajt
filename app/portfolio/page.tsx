import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PORTFOLIO } from "@/lib/content";
import { PortfolioCard } from "@/components/site/PortfolioCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Odabrani radovi: moderni, brzi i premium sajtovi. Pogledajte primere i otvorite ih u novom tabu.",
  openGraph: {
    title: "Portfolio — DOVEB",
    description: "Odabrani radovi — premium dizajn, performanse i SEO.",
    url: "/portfolio",
  },
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Portfolio"
            title="Neki od naših radova zadovoljnih klijenata"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary focus-ring" href="/zakazivanje">
                Zakaži konsultacije
              </Link>
              <Link className="btn btn-secondary focus-ring" href="/paketi">
                Pogledaj pakete
              </Link>
            </div>
          </SectionHeader>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PORTFOLIO.map((p) => (
              <PortfolioCard
                key={p.href}
                title={p.title}
                href={p.href}
                imageSrc={p.imageSrc}
                imageAlt={p.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
