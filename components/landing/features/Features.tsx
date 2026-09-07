// helix: components/landing/features/Features.tsx
/**
 * @helix:story USER-303000
 *
 * Features — six-card grid covering the load-bearing capabilities of
 * the Helix orchestrator. Each card pairs an icon, a short title, and
 * a one-line description.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

interface Feature {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

const FEATURES: ReadonlyArray<Feature> = [
  {
    title: "Atomic decomposition",
    description:
      "Every prompt is split into reviewable units with explicit inputs, outputs, and dependencies.",
    icon: <AtomIcon />,
  },
  {
    title: "Dependency graph",
    description:
      "Units execute in topological order so the codebase never lands in an unbuildable state.",
    icon: <GraphIcon />,
  },
  {
    title: "Repo-aware verification",
    description:
      "Every unit is checked against your types, tests, and lint before it can move forward.",
    icon: <ShieldIcon />,
  },
  {
    title: "Small reviewable PRs",
    description:
      "One PR per task — small enough to read in a coffee break, large enough to be useful.",
    icon: <PullRequestIcon />,
  },
  {
    title: "Deterministic replay",
    description:
      "Re-run a task with the same plan and the same inputs to reproduce any prior result.",
    icon: <ReplayIcon />,
  },
  {
    title: "Bring your own agent",
    description:
      "Helix orchestrates — your model, your prompts, your provider. No lock-in.",
    icon: <PlugIcon />,
  },
];

export function Features(): React.ReactElement {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="features-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="hx-eyebrow">Features</p>
          <h2
            id="features-heading"
            className="hx-heading mt-3"
          >
            Everything an AI coding agent{" "}
            <span className="hx-text-gradient">should have shipped with</span>.
          </h2>
          <p className="hx-subheading">
            Helix replaces the sprawling, unverifiable output of a raw agent
            with a structured plan, a verification gate, and a PR-shaped
            deliverable.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className={cn("hx-card hx-card-hover flex flex-col gap-3")}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300"
              >
                {f.icon}
              </span>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- Icons (inline SVG, no runtime deps) ---------- */

function AtomIcon(): React.ReactElement {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />
    </svg>
  );
}
function GraphIcon(): React.ReactElement {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 6h8M7.3 7.3l3.4 8.4M16.7 7.3l-3.4 8.4" />
    </svg>
  );
}
function ShieldIcon(): React.ReactElement {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function PullRequestIcon(): React.ReactElement {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M6 8v8" />
      <path d="M18 16V8a4 4 0 0 0-4-4H8" />
    </svg>
  );
}
function ReplayIcon(): React.ReactElement {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}
function PlugIcon(): React.ReactElement {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 2v4" />
      <path d="M15 2v4" />
      <path d="M6 6h12v6a6 6 0 0 1-12 0Z" />
      <path d="M12 18v4" />
    </svg>
  );
}

export default Features;