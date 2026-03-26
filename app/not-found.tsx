import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="container-site">
          <Card className="p-7 sm:p-10 max-w-2xl">
            <div className="text-xs font-semibold tracking-widest text-white/60">
              404
            </div>
            <h1 className="h2 mt-3 text-white/95">Stranica nije pronađena</h1>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Link je možda zastareo ili je stranica premeštena. Vratite se na početnu
              ili otvorite pakete.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary focus-ring" href="/">
                Početna
              </Link>
              <Link className="btn btn-secondary focus-ring" href="/paketi">
                Paketi
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

