// helix: components/ui/SectionHeading.tsx
/**
 * @helix:story USER-171000
 *
 * SectionHeading — shared heading primitive used by every landing
 * section (Features, HowItWorks, Personas, SocialProof, FAQ).
 *
 * Renders an optional eyebrow chip, a display headline, and an
 * optional description. Supports `center` alignment for sections
 * like FAQ where the heading sits above a constrained column.
 *
 * Pure server component.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  headingId?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  headingId,
  align = "left",
  className,
}: SectionHeadingProps): React.ReactElement {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand-400"
          />
          {eyebrow}
        </span>
      ) : null}

      <h2
        id={headingId}
        className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {heading}
      </h2>

      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed text-ink-200 sm:text-lg",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;