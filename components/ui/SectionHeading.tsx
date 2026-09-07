// helix: components/ui/SectionHeading.tsx
/**
 * @helix:story USER-445000
 *
 * SectionHeading — consistent eyebrow + heading + lede pattern
 * used across marketing sections. Pure server component.
 *
 *   • `eyebrow`     — small uppercase chip above the heading
 *   • `heading`     — display-font title (h2 by default)
 *   • `lede`        — optional supporting paragraph
 *   • `align`       — `left` (default) or `center`
 *   • `headingId`   — id for the heading (used for aria-labelledby)
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export type SectionHeadingAlign = "left" | "center";

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  lede?: string;
  align?: SectionHeadingAlign;
  headingId?: string;
  className?: string;
  children?: React.ReactNode;
}

const alignClasses: Record<SectionHeadingAlign, string> = {
  left: "text-left items-start",
  center: "text-center items-center mx-auto",
};

export function SectionHeading({
  eyebrow,
  heading,
  lede,
  align = "left",
  headingId,
  className,
  children,
}: SectionHeadingProps): React.ReactElement {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        alignClasses[align],
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={headingId}
        className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
      >
        {heading}
      </h2>
      {lede ? (
        <p className="max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
          {lede}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export default SectionHeading;