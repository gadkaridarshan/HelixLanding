// helix: components/ui/SectionHeading.tsx
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  className?: string;
  headingId?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  className,
  headingId,
}: SectionHeadingProps): React.ReactElement {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="mt-3 text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl"
      >
        {heading}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;