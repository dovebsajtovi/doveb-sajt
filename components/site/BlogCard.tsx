import Link from "next/link";
import { IconArrowUpRight } from "@/components/icons";

export function BlogCard(props: { href: string; title: string; description: string }) {
  const { href, title, description } = props;
  return (
    <Link
      href={href}
      className="focus-ring group card p-6 sm:p-7 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold tracking-tight text-white/95">
            {title}
          </div>
          <p className="mt-2 text-sm leading-7 text-white/70">{description}</p>
        </div>
        <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/6 text-white/85 transition group-hover:bg-white/10">
          <IconArrowUpRight />
        </div>
      </div>
    </Link>
  );
}

