import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { FaqPageContent } from "@/lib/faq-content";
import { FaqHero } from "@/components/site/FaqHero";

export function FaqArticle({ page }: { page: FaqPageContent }) {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="container-site">
          <FaqHero image={page.heroImage} title={page.title} />

          <div className="max-w-4xl mt-8">
            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
              {page.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {page.sections.map((section) => (
              <Card key={section.heading} className="p-6 sm:p-8">
                <h2 className="h2 text-white/95">{section.heading}</h2>
                {section.subheading ? (
                  <h3 className="h3 mt-3 text-white/85">{section.subheading}</h3>
                ) : null}
                <div className="prose-premium mt-4 space-y-4">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-2 text-sm text-white/75 leading-7">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            ))}
          </div>

          <Card className="mt-10 p-6 sm:p-8">
            <h2 className="h3 text-white/95">Sledeći korak</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Ako želite da ove preporuke primenimo na vaš projekat, pogledajte naše
              pakete ili nas kontaktirajte direktno.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary focus-ring" href="/paketi">
                Pogledaj pakete
              </Link>
              <Link className="btn btn-secondary focus-ring" href="/kontakt">
                Kontakt
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

