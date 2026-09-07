// helix: components/Section.tsx
/**
 * @helix:story USER-285000
 *
 * Section — the shared layout wrapper every landing section uses.
 *
 * Goals:
 *   • Consistent vertical rhythm across sections (`section-pad`).
 *   • Stable `id` + accessible `aria-labelledby` so anchors and
 *     screen readers can target each section by its heading.
 *   • Composable tone variants via the `tone` prop so a section
 *     can opt into a slightly different background tint without
 *     re-implementing padding/structure.
 *   • Zero runtime cost — pure server component, no client JS.
 *
 * Usage:
 *   <Section
 *     id="features"
 *     eyebrow="Capabilities"
 *     heading="Everything you need to ship AI code"
 *     description="…"
 *   >
 *     <FeatureGrid />
 *   </Section>
 */
import * as React from "react";

import { cn } from "@/lib/cn";

export type SectionTone = "default" | "muted" | "elevated";

export interface SectionProps {
  /** DOM id used for in-page anchors. */
  id?: string;
  /** Short label rendered above the heading (e.g. "How it works"). */
  eyebrow?: string;
  /** Heading rendered as `<h2>` and used as the accessible label. */
  heading?: string;
  /** Optional supporting copy rendered below the heading. */
  description?: string;
  /** Background tone variant. */
  tone?: SectionTone;
  /** Optional className applied to the outer `<section>`. */
  className?: string;
  /** Optional className applied to the inner container. */
  innerClassName?: string;
  /** Section body. */
  children: React.ReactNode;
}

const toneStyles: Record<SectionTone, string> = {
  default: "",
  muted: "bg-ink-900/30",
  elevated:
    "bg-gradient-to-b from-ink-900/40 via-ink-950 to-ink-950 border-y border-white/5",
};

export function Section({
  id,
  eyebrow,
  heading,
  description,
  tone = "default",
  className,
  innerClassName,
  children,
}: SectionProps): React.ReactElement {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-pad", toneStyles[tone], className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          innerClassName,
        )}
      >
        {(eyebrow || heading || description) && (
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            {eyebrow ? (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-400">
                {eyebrow}
              </p>
            ) : null}
            {heading ? (
              <h2
                id={headingId}
                className="text-balance text-3xl font-semibold text-ink-50 sm:text-4xl lg:text-5xl"
              >
                {heading}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-pretty text-base text-ink-300 sm:text-lg">
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;