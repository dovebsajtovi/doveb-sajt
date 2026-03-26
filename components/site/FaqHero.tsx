import Image from "next/image";

export function FaqHero(props: { image: string; title: string }) {
  const { image, title } = props;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <div className="relative h-[260px] sm:h-[340px] lg:h-[420px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
          className="object-cover blur-[1.2px] scale-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
            style={{ textShadow: "0 6px 28px rgba(0,0,0,0.75)" }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

