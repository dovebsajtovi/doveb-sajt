"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from "react";
import { BRANDING, NAV, SITE } from "@/lib/site";
import { IconInstagram, IconPhoneLucide } from "@/components/icons";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useLayoutEffect(() => {
    const root = document.documentElement;
    const navBase = 80; // px

    const measure = () => {
      const menuH = open ? menuRef.current?.offsetHeight ?? 0 : 0;
      root.style.setProperty("--nav-offset", `${navBase + menuH}px`);
    };

    measure();

    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-20 flex items-center gap-4">
            {/* Left: Logo */}
            <Link
              href="/"
              className="focus-ring inline-flex items-center rounded-xl px-2 py-2"
              aria-label="Početna"
            >
              <span className="relative h-9 w-28 sm:w-32">
                <Image
                  src={BRANDING.navbarLogo}
                  alt="DOVEB logo"
                  fill
                  className="object-contain logo-invert"
                  priority
                />
              </span>
            </Link>

            {/* Center: Navigation */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-[17px] font-semibold text-white/90">
              {NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "focus-ring rounded-lg px-2 py-2 transition",
                      active
                        ? "text-white underline underline-offset-8 decoration-white/35"
                        : "hover:text-white/95 hover:opacity-90"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                className="focus-ring group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/8 transition"
                href={`tel:${SITE.phone.value}`}
                aria-label="Pozovi"
              >
                <IconPhoneLucide className="text-white/70 group-hover:text-white transition-colors" />
              </a>
              <Link className="btn btn-primary focus-ring" href="/zakazivanje">
                Pošaljite upit
              </Link>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="ml-auto flex items-center gap-2 md:hidden">
              <a
                className="focus-ring group inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 hover:bg-white/8 transition"
                href={`tel:${SITE.phone.value}`}
                aria-label="Pozovi"
              >
                <IconPhoneLucide className="text-white/70 group-hover:text-white transition-colors" />
              </a>
              <button
                type="button"
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/6 hover:bg-white/10 transition"
                aria-label={open ? "Zatvori meni" : "Otvori meni"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={cx(
                      "absolute left-0 top-0 h-[2px] w-5 rounded-full bg-white/90 transition-transform duration-200",
                      open && "translate-y-[7px] rotate-45"
                    )}
                  />
                  <span
                    className={cx(
                      "absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-white/70 transition-opacity duration-200",
                      open && "opacity-0"
                    )}
                  />
                  <span
                    className={cx(
                      "absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-white/90 transition-transform duration-200",
                      open && "-translate-y-[7px] -rotate-45"
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu: sits BELOW navbar and pushes content via --nav-offset */}
      <div
        className={cx(
          "md:hidden bg-black/60 backdrop-blur-md border-b border-white/10 overflow-hidden transition-[max-height] duration-250 ease-out"
        )}
        style={{ maxHeight: open ? 420 : 0 }}
        aria-hidden={!open}
      >
        <div ref={menuRef} className="container-site py-4">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "focus-ring rounded-xl px-4 py-3 text-[15px] font-semibold tracking-tight transition",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:text-white hover:bg-white/6"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 flex items-center gap-2">
            <Link
              className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/8 hover:bg-white/12 transition h-11 text-sm font-semibold text-white/90"
              href="/zakazivanje"
            >
              Pošaljite upit
            </Link>
            <a
              className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/6 hover:bg-white/10 transition h-11"
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram className="text-white/85" />
              <span className="text-sm font-semibold text-white/85">Instagram</span>
            </a>
            <a
              className="focus-ring group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/6 hover:bg-white/10 transition h-11"
              href={`tel:${SITE.phone.value}`}
            >
              <IconPhoneLucide className="text-white/70 group-hover:text-white transition-colors" />
              <span className="text-sm font-semibold text-white/85">Pozovi</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

