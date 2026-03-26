import Link from "next/link";
import { IconCheck } from "@/components/icons";

export function PackageCard(props: {
  name: string;
  price: string;
  recommended?: boolean;
  features: string[];
  note?: string;
  className?: string;
}) {
  const { name, price, recommended, features, note, className } = props;
  return (
    <div
      className={[
        "card p-6 sm:p-7 relative overflow-hidden h-full flex flex-col",
        recommended ? "card-strong" : "",
        className ?? "",
      ].join(" ")}
    >
      {recommended ? (
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-400 to-sky-300" />
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-2.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/78">
            {name}
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight text-white/95">
            {price}
          </div>
        </div>
        {recommended ? (
          <div className="rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-white/80">
            Preporučeno
          </div>
        ) : null}
      </div>

      <ul className="mt-5 space-y-4 text-sm text-white/75 leading-7">
        {features.map((f) => (
          <li key={f} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/6 text-white/90">
              <IconCheck />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {note ? (
        <p className="mt-4 text-xs text-white/60 leading-6">{note}</p>
      ) : null}

      <div className="mt-auto pt-8">
        <Link className="btn btn-primary focus-ring w-full" href="/zakazivanje">
          Izaberi paket
        </Link>
      </div>
    </div>
  );
}

