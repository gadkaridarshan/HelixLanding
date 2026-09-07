// helix: components/sections/HowItWorks.tsx
/**
 * @helix:story USER-773000
 * @helix:story USER-303000
 *
 * HowItWorks — numbered 4-step walkthrough from intake to deployed cards:
 *
 *   1. Intake   — describe the change you want.
 *   2. Plan     — Helix decomposes it into atomic units with criteria.
 *   3. Execute  — parallel agents implement units in dependency order.
 *   4. Ship     — small, verified PRs land in your repo.
 *
 * Self-contained: imports only the shared Container + cn helper.
 * Fully typed, responsive, theme-token driven.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

import styles from "@/components/sections/HowItWorks.module.css";

interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly detail: string;
}

const STEPS: ReadonlyArray<Step> = [
  {
    number: "01",
    title: "Intake",
    description:
      "Describe the change in plain language — a feature, a refactor, a bug.",
    detail:
      "Helix reads the prompt, your repo, and your conventions. No JSON, no DSL — just intent.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Helix decomposes the change into atomic units, each with its own acceptance criteria.",
    detail:
      "Every unit gets a GIVEN / WHEN / THEN contract: types, tests, lint, behaviour. Dependencies between units are made explicit.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Parallel agents implement units in dependency order, with verification gates between every step.",
    detail:
      "Independent units run concurrently. Each one is checked against the rest of your repo before the next is allowed to start.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Verified units land as small, human-reviewable PRs — not one sprawling diff.",
    detail:
      "Each PR is self-contained, has a clear rollback story, and is easy for a human to approve in under five minutes.",
  },
];

export interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      className={cn(styles.root, className)}
      aria-labelledby="how-heading"
    >
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 id="how-heading" className={styles.heading}>
            From prompt to merged PR — in four steps.
          </h2>
          <p className={styles.subheading}>
            No black box. Every step is visible, every unit is verified, every
            PR is reviewable.
          </p>
        </header>

        <ol className={styles.list} role="list">
          {STEPS.map((step, idx) => (
            <li key={step.number} className={styles.item}>
              <div className={styles.itemHeader}>
                <span className={styles.number}>{step.number}</span>
                <h3 className={styles.itemTitle}>{step.title}</h3>
              </div>
              <p className={styles.itemDescription}>{step.description}</p>
              <p className={styles.itemDetail}>{step.detail}</p>
              {idx < STEPS.length - 1 ? (
                <span className={styles.connector} aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;