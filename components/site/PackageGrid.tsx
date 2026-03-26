import { PACKAGES } from "@/lib/content";
import { PackageCard } from "@/components/site/PackageCard";

export function PackageGrid(props: { className?: string }) {
  const { className } = props;
  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-2">
        {" "}
        {PACKAGES.map((p) => (
          <PackageCard
            key={p.key}
            name={p.name}
            price={p.price}
            recommended={p.recommended}
            features={p.features}
            note={p.note}
          />
        ))}
      </div>
    </div>
  );
}
