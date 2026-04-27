import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";
  const descriptionWidth = align === "center" ? "max-w-2xl" : "max-w-xl";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <p className="rounded-full border border-brand/20 bg-brand/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`${descriptionWidth} text-base leading-7 text-muted sm:text-lg`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
