// helix: components/sections/Features.tsx
/**
 * @helix:story USER-773000
 * @helix:story USER-303000
 *
 * Features — grid of 5 feature cards highlighting the core Helix value
 * props:
 *
 *   1. Atomic planning
 *   2. Parallel agents
 *   3. Atomic work-breakdown
 *   4. GIVEN / WHEN / THEN acceptance criteria
 *   5. Verified, reviewable PRs
 *
 * Self-contained: imports only the shared Container + cn helper.
 * Fully typed, responsive, theme-token driven.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

import styles from "@/components/sections/Features.module.css";

interface Feature {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

const FEATURES: ReadonlyArray<Feature> = [
  {
    title: "Atomic planning",
    description:
      "Every prompt is decomposed into reviewable units before any code is written — so you always know what's about to ship.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M4 6h6M4 12h10M4 18h7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="18" cy="6" r="2" fill="currentColor" />
        <circle cx="20" cy="12" r="2" fill="currentColor" />
        <circle cx="17" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Parallel agents",
    description:
      "Independent units execute concurrently across a fleet of coding agents — dependencies stay explicit, conflicts stay rare.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2.1 2.1M8.6 17.4l-2.1 2.1m12.9 0-2.1-2.1M8.6 6.6 6.5 4.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Atomic work-breakdown",
    description:
      "Each unit is a self-contained, mergeable change with a clear diff, a clear owner, and a clear rollback story.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    title: "GIVEN / WHEN / THEN criteria",
    description:
      "Every unit ships with explicit acceptance criteria — tests, type checks, and lint rules that gate the merge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M5 6h14M5 12h10M5 18h7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="m16 16 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Verified, reviewable PRs",
    description:
      "Each unit is checked against the rest of your repo — types, tests, lint — and lands as a small, human-reviewable PR.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M6 8v8M8 6h6a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export interface FeaturesProps {
  className?: string;
}

export function Features({ className }: FeaturesProps): React.ReactElement {
  return (
    <section
      id="features"
      className={cn(styles.root, className)}
      aria-labelledby="features-heading"
    >
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Why Helix</span>
          <h2 id="features-heading" className={styles.heading}>
            One orchestrator. Every unit verified.
          </h2>
          <p className={styles.subheading}>
            Helix replaces sprawling AI diffs with a pipeline of small,
            reviewable, test-gated changes — so the code that lands is the
            code you wanted.
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {FEATURES.map((feature) => (
            <li key={feature.title} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardBody}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;