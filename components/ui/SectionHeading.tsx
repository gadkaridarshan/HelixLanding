// helix: components/ui/SectionHeading.tsx
/**
 * @helix:story USER-616000
 *
 * SectionHeading — shared eyebrow + heading + description primitive
 * used by every marketing section (Features, HowItWorks, Personas,
 * FAQ, FinalCTA). Centralizing it means the typographic rhythm and
 * spacing stay consistent across the page.
 *
 * Pure server component: zero JS.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface SectionHeadingProps {
  className?: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  headingId?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  className,
  eyebrow,
  heading,
  description,
  headingId,
  align = "center",
}: SectionHeadingProps): React.ReactElement {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={cn("flex flex-col gap-4", alignment, className)}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand-400"
          />
          {eyebrow}
        </span>
      ) : null}

      <h2
        id={headingId}
        className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl md:text-5xl"
      >
        {heading}
      </h2>

      {description ? (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;