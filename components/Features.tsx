// helix: components/Features.tsx
/**
 * @helix:story USER-304000
 *
 * Features — the four core Helix capabilities surfaced as a card
 * grid: atomic decomposition, dependency-aware execution, repo-
 * aware verification, and reviewable PR output.
 *
 * Pure server component. Copy is sourced from
 * `@/content/features.json` so marketing copy can evolve without
 * touching the component tree.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

import featuresData from "@/content/features.json";

export interface FeaturesProps {
  className?: string;
}

interface FeatureItem {
  title: string;
  description: string;
  icon: "atom" | "graph" | "shield" | "git";
}

interface FeaturesContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: FeatureItem[];
}

const content: FeaturesContent = featuresData as FeaturesContent;

function FeatureIcon({ icon }: { icon: FeatureItem["icon"] }): React.ReactElement {
  const common =
    "h-6 w-6 text-brand-400 transition-colors group-hover:text-brand-300";
  switch (icon) {
    case "atom":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "graph":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
        </svg>
      );
    case "shield":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "git":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M6 8v8" />
          <path d="M18 12H8" />
        </svg>
      );
  }
}

export function Features({ className }: FeaturesProps): React.ReactElement {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            {content.eyebrow}
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
          >
            {content.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-300">
            {content.description}
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {content.items.map((item) => (
            <li
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-inset ring-brand-400/30">
                <FeatureIcon icon={item.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;