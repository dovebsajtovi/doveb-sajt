import Image from "next/image";
import { IconArrowUpRight } from "@/components/icons";

export function PortfolioCard(props: {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}) {
  const { title, href, imageSrc, imageAlt } = props;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring group card overflow-hidden transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] bg-white/5">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-95 transition duration-300 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold tracking-tight text-white/95">
            {title}
          </div>
          <div className="mt-1 text-sm text-white/65">Pogledaj sajt</div>
        </div>
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/6 text-white/85 transition group-hover:bg-white/10">
          <IconArrowUpRight />
        </div>
      </div>
    </a>
  );
}

