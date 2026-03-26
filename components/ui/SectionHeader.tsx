import * as React from "react";

export function SectionHeader(props: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  const { eyebrow, title, description, align = "left", children } = props;

  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-sky-300" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="h2 mt-4 text-white/95">{title}</h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-8 text-white/70 md:text-base">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}

