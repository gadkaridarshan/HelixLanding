// helix: components/landing/hero/HeroCopy.tsx
/**
 * @helix:story USER-303000
 *
 * HeroCopy — the text column of the Hero. Renders the headline,
 * subhead, primary + secondary CTAs, and the social-proof bullet
 * strip.
 *
 * Pure server component. Uses the shared `Button` primitive and
 * `Container`-style layout (left column only).
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";

export interface HeroCopyProps {
  className?: string;
}

const proofBullets: ReadonlyArray<string> = [
  "Atomic work-breakdown",
  "Repo-aware verification",
  "Small, reviewable PRs",
];

export function HeroCopy({
  className,
}: HeroCopyProps): React.ReactElement {
  return (
    <div className={className}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-200 backdrop-blur">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
        <span>Now in early access</span>
      </div>

      <h1
        id="hero-heading"
        className="mt-5 text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl lg:text-6xl"
      >
        {brand.tagline}.
      </h1>

      <p className="mt-5 max-w-xl text-lg leading-8 text-ink-300">
        {brand.shortDescription}
      </p>

      <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Button href={brand.url} variant="primary" size="lg" external>
          Try {brand.name}
        </Button>
        <Button
          href={brand.githubUrl}
          variant="secondary"
          size="lg"
          external
        >
          View on GitHub
        </Button>
      </div>

      <ul
        role="list"
        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300"
      >
        {proofBullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-brand-400"
              aria-hidden="true"
            >
              <path d="M5 12l4 4L19 7" />
            </svg>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroCopy;