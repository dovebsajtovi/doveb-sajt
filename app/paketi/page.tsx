import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PackageGrid } from "@/components/site/PackageGrid";

export const metadata: Metadata = {
  title: "Paketi",
  description:
    "Premium paketi izrade sajtova: Standard, Pro, Premium i Gold. Jasne stavke, održavanje i podrška.",
  openGraph: {
    title: "Paketi — DOVEB",
    description:
      "Izaberite paket izrade sajta: Standard, Pro, Premium ili Gold. Premium dizajn, performanse i SEO.",
    url: "/paketi",
  },
  alternates: { canonical: "/paketi" },
};

export default function PaketiPage() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="container-site">
          <SectionHeader
            eyebrow="Paketi"
            title="Izaberite paket koji odgovara vašem biznisu"
            description="Transparentne opcije, premium izgled i jasno definisana podrška. Preporučeni paket je istaknut, ali rado ćemo predložiti najbolju opciju nakon kratke konsultacije."
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary focus-ring" href="/zakazivanje">
                Zakaži konsultacije
              </Link>
              <Link className="btn btn-secondary focus-ring" href="/portfolio">
                Pogledaj radove
              </Link>
            </div>
          </SectionHeader>

          <div className="mt-10">
            <PackageGrid />
          </div>

          <div className="mt-10 card p-6 sm:p-7">
            <div className="text-sm font-semibold tracking-tight text-white/90">
              Napomena o izmenama
            </div>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Svaka dodatna izmena koja nije uključena u paket u tom mesecu
              košta <strong>10€</strong>. Naš cilj je da sve bude jasno, fer i
              bez skrivenih troškova.
            </p>
          </div>

          <div className="mt-6 card p-6 sm:p-7">
            <div className="text-lg font-semibold tracking-tight text-white/90">
              <b>Brzo poređenje</b>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 text-base font-bold text-white">
                      Stavka
                    </th>
                    <th className="py-3 pr-4 text-base font-bold text-white">
                      Standard
                    </th>
                    <th className="py-3 pr-4 text-base font-bold text-white">
                      Pro
                    </th>
                    <th className="py-3 pr-4 text-base font-bold text-white">
                      Premium
                    </th>
                    <th className="py-3 pr-4 text-base font-bold text-white">
                      Gold
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white/75">
                  {[
                    [
                      "Maks. broj stranica",
                      "8",
                      "15",
                      "Neograničeno",
                      "Neograničeno",
                    ],
                    [
                      "Besplatne izmene mesečno",
                      "1",
                      "3",
                      "10",
                      "Neograničeno",
                    ],
                    ["SEO", "—", "Osnovni", "Napredni", "Napredni"],
                    ["AI chatbot", "—", "—", "Opcija", "Opcija"],
                    ["Google Ads kampanja", "—", "—", "—", "Da"],
                    ["Admin stranica", "—", "—", "—", "Da"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-white/8">
                      <td className="py-3 pr-4 font-semibold text-white/85">
                        {row[0]}
                      </td>
                      <td className="py-3 pr-4">{row[1]}</td>
                      <td className="py-3 pr-4">{row[2]}</td>
                      <td className="py-3 pr-4">{row[3]}</td>
                      <td className="py-3 pr-4">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
