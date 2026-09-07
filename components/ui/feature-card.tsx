// helix: components/ui/feature-card.tsx
/**
 * @helix:story USER-507000
 *
 * FeatureCard — value-prop card primitive used by the Features grid.
 *
 * Renders a glass surface with a tinted icon tile, title, and
 * description. Pure server component; visuals rely entirely on
 * Tailwind utilities + brand tokens.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

import type { FeaturesIconName } from "@/components/sections/features";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: FeaturesIconName;
  className?: string;
}

interface IconSpec {
  /** Inline SVG path data (24x24 viewBox). */
  d: string;
}

const iconPaths: Record<FeaturesIconName, IconSpec> = {
  atom: {
    d: "M12 2a10 10 0 1 0 10 10M12 2c2.5 2.5 2.5 17.5 0 20M2 12c5-2.5 15-2.5 20 0M12 12h.01",
  },
  graph: {
    d: "M3 3v18h18M7 14l4-4 4 4 5-7",
  },
  shield: {
    d: "M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4zM9 12l2 2 4-4",
  },
  git: {
    d: "M6 3v12M6 21v-6M18 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
  },
  cards: {
    d: "M3 5h7v7H3zM14 5h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  },
  persona: {
    d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 22a8 8 0 0 1 16 0",
  },
  stack: {
    d: "M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5",
  },
  review: {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10zM9 10h6M9 7h4",
  },
};

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps): React.ReactElement {
  const spec = iconPaths[icon];

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-colors hover:border-brand-400/30 hover:bg-white/[0.05]",
        className,
      )}
    >
      {/* Tinted icon tile */}
      <div
        aria-hidden="true"
        className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-inset ring-brand-400/30 text-brand-300"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          role="presentation"
        >
          <path d={spec.d} />
        </svg>
      </div>

      <h3 className="text-base font-semibold text-ink-50 sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-300 sm:text-[0.95rem]">
        {description}
      </p>

      {/* Hover accent line */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />
    </article>
  );
}

export default FeatureCard;