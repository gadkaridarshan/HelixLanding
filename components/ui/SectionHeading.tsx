// helix: components/ui/SectionHeading.tsx
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className,
}: SectionHeadingProps): React.ReactElement {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";
  return (
    <header className={cn("max-w-3xl", alignment, className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90 sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export default SectionHeading;