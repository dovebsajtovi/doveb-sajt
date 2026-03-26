import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { IconInstagram, IconPhoneLucide } from "@/components/icons";
import { BRANDING } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="container-site py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-36">
                <Image
                  src={BRANDING.navbarLogo}
                  alt="DOVEB logo"
                  fill
                  className="object-contain logo-invert"
                />
              </div>
            </div>
            <p className="mt-2 text-sm text-white/70 leading-7">
              Moderni, brzi i luksuzno dizajnirani sajtovi koji ulivaju poverenje i
              pretvaraju posete u upite.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/8 transition"
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram className="text-white/85" />
              </a>
              <a
                className="focus-ring group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/8 transition"
                href={`tel:${SITE.phone.value}`}
                aria-label="Pozovi"
              >
                <IconPhoneLucide className="text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 md:gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-2 py-2 text-sm font-semibold tracking-tight text-white/75 hover:text-white hover:bg-white/5 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="divider mt-10" />

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} {SITE.name}. Sva prava zadržana.
          </p>
          <p className="text-xs text-white/55">
            Instagram:{" "}
            <a
              className="focus-ring rounded underline underline-offset-4 hover:text-white transition"
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @damjannv
            </a>{" "}
            · Telefon:{" "}
            <a
              className="focus-ring rounded underline underline-offset-4 hover:text-white transition"
              href={`tel:${SITE.phone.value}`}
            >
              {SITE.phone.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

