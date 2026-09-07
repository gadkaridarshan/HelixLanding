// helix: components/ui/SectionHeading.tsx
/**
 * @helix:story USER-956000
 *
 * SectionHeading — shared section header primitive.
 *
 * Renders a consistent eyebrow + heading + optional description
 * triplet used by every marketing section (FAQ, Features, Personas,
 * etc.). Pure server component, no client interactivity.
 *
 * The heading gets an `id` so the surrounding `<section>` can use
 * `aria-labelledby` for screen readers without duplicating text.
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
  align = "center",
  className,
}: SectionHeadingProps): React.ReactElement {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={cn("flex max-w-3xl flex-col gap-3", alignment, className)}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
      >
        <span className="bg-gradient-to-r from-ink-50 via-ink-100 to-ink-300 bg-clip-text text-transparent">
          {heading}
        </span>
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;