// helix: components/sections/Features.tsx
/**
 * @helix:story USER-303000
 *
 * Features — three-up feature grid with icon, title, and description.
 * Pure server render.
 */
import * as React from "react";

export interface FeatureItem {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

export interface FeaturesProps {
  className?: string;
}

function AtomIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function ShieldIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ListIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6h12" />
      <path d="M8 12h12" />
      <path d="M8 18h12" />
      <circle cx="4" cy="6" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="4" cy="18" r="1" />
    </svg>
  );
}

function BranchIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 8v8" />
      <path d="M6 12c4 0 6 0 10-2" />
    </svg>
  );
}

function GraphIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M7.5 7.5L11 11" />
      <path d="M16.5 7.5L13 11" />
      <path d="M7.5 16.5L11 13" />
      <path d="M16.5 16.5L13 13" />
    </svg>
  );
}

function HandshakeIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12l3-3 4 4-3 3z" />
      <path d="M21 12l-3-3-4 4 3 3z" />
      <path d="M9 13l3 3 3-3" />
      <path d="M12 8l2-2h3" />
      <path d="M12 8l-2-2H7" />
    </svg>
  );
}

const FEATURES: ReadonlyArray<FeatureItem> = [
  {
    title: "Atomic decomposition",
    description:
      "Every prompt is broken into small, single-purpose units with explicit inputs, outputs, and dependencies.",
    icon: <AtomIcon />,
  },
  {
    title: "Repo-aware verification",
    description:
      "Each unit is type-checked, linted, and tested against the rest of the repo before it ships.",
    icon: <ShieldIcon />,
  },
  {
    title: "Ordered execution",
    description:
      "Units run in a deterministic order. If something fails, you get the exact unit — not a 4,000-line diff.",
    icon: <ListIcon />,
  },
  {
    title: "Reviewable PRs",
    description:
      "Open one PR per unit or bundle related units. Either way, every change is small enough to review in minutes.",
    icon: <BranchIcon />,
  },
  {
    title: "Dependency graph",
    description:
      "Visualise the unit graph and the impact of every change before it leaves the orchestrator.",
    icon: <GraphIcon />,
  },
  {
    title: "Plays well with humans",
    description:
      "Pause, edit, or reorder units from the CLI or web UI. Helix augments your workflow — it doesn't replace it.",
    icon: <HandshakeIcon />,
  },
];

export function Features({ className }: FeaturesProps): React.ReactElement {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className={"relative py-20 md:py-28 " + (className ?? "")}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            Features
          </span>
          <h2
            id="features-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Built for reviewable AI-generated code.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Helix gives your AI coding agent a backbone: every unit is small,
            every dependency is explicit, and every change is verified
            against the rest of your repo before it ships.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;