// helix: components/sections/Features.tsx
/**
 * @helix:story USER-23000
 *
 * Features — capability grid highlighting atomic planning,
 * parallelization gating, language-aware protected paths, and the
 * quality bar. Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface FeaturesProps {
  className?: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Icon({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 items-center justify-center rounded-card bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300"
    >
      {children}
    </span>
  );
}

const features: ReadonlyArray<Feature> = [
  {
    id: "atomic-planning",
    title: "Atomic planning",
    description:
      "Every prompt becomes a list of small, reviewable units you can read, approve, and execute in dependency order.",
    icon: <Icon>◇</Icon>,
  },
  {
    id: "parallelization",
    title: "Parallelization gating",
    description:
      "Run units in parallel only when their dependencies are satisfied. No more silent cross-cutting changes.",
    icon: <Icon>⏃</Icon>,
  },
  {
    id: "protected-paths",
    title: "Language-aware protected paths",
    description:
      "TypeScript, Python, Go, and Rust each get their own protected paths and verifiers — no accidental cross-stack drift.",
    icon: <Icon>⌘</Icon>,
  },
  {
    id: "quality-bar",
    title: "Quality bar on every unit",
    description:
      "Each unit is checked against types, tests, and lint before it ever reaches a human reviewer.",
    icon: <Icon>✓</Icon>,
  },
  {
    id: "verifiable-prs",
    title: "Small, verifiable PRs",
    description:
      "Ship one PR per unit. Reviewers see one change at a time, with the full audit trail.",
    icon: <Icon>⎇</Icon>,
  },
  {
    id: "local-ci-parity",
    title: "Local + CI parity",
    description:
      "The same verifiers run on your laptop and on CI, so what passes locally passes in the cloud.",
    icon: <Icon>◐</Icon>,
  },
];

export function Features({
  className,
}: FeaturesProps): React.ReactElement {
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
          <h2
            id="features-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Everything you need to ship AI-generated code, safely.
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Helix replaces one sprawling diff with many small, verified PRs.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-card border border-white/10 bg-white/5 p-6"
            >
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;