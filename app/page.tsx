import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BRANDING } from "@/lib/site";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { PackageGrid } from "@/components/site/PackageGrid";
import { HeroLogo } from "@/components/site/HeroLogo";

export default function Home() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="pt-1 pb-24 sm:pt-20 sm:pb-28">
        <div className="container-site">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto w-full max-w-[800px] sm:max-w-[1100px]">
              <div className="relative h-[260px] sm:h-[340px] md:h-[420px]">
                <HeroLogo logoSrc={BRANDING.heroLogo} alt="DOVEB — logo" />
              </div>
            </div>

            <h2 className="h2 mt-5 text-white/95">
              Profesionalna izrada sajtova za vaš biznis
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              Dizajniramo i razvijamo moderne, brze i premium veb-sajtove koji
              izgledaju luksuzno, rade besprekorno i pretvaraju posetioce u
              upite.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                className="btn btn-primary focus-ring w-full sm:w-auto"
                href="/paketi"
              >
                Pogledaj pakete
              </Link>
              <Link
                className="btn btn-secondary focus-ring w-full sm:w-auto"
                href="/zakazivanje"
              >
                Zakaži konsultacije
              </Link>
            </div>

            <div className="mt-14">
              <PackageGrid />
            </div>
          </div>
        </div>
      </section>

      {/* O NAMA / PROCES */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeader
            eyebrow="Kako radimo"
            title="Jasan proces. Premium rezultat."
            description="Vodimo vas kroz svaki korak — od prve konsultacije do finalnog sajta i održavanja."
          />

          <div className="mt-12">
            <ProcessFlow />
          </div>
        </div>
      </section>

      {/* ZAKAZIVANJE CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="container-site">
          <div className="card card-strong p-7 sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="h2 text-white/95">Spremni za ozbiljan sajt?</h2>
                <p className="mt-3 leading-8 text-white/70">
                  Pošaljite upit i javljaćemo se brzo sa predlogom paketa i
                  sledećim koracima. Bez komplikacija — jasno i profesionalno.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link
                  className="btn btn-primary focus-ring h-12 w-full px-8 text-base font-semibold sm:min-w-[220px]"
                  href="/zakazivanje"
                >
                  Zakaži konsultacije
                </Link>
                <Link
                  className="btn btn-secondary focus-ring h-12 w-full px-8 text-base font-semibold sm:min-w-[220px]"
                  href="/paketi"
                >
                  Pogledaj pakete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
