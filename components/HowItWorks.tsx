// helix: components/HowItWorks.tsx
/**
 * @helix:story USER-719000
 *
 * HowItWorks — 3-step pipeline (Define → Orchestrate → Ship) that
 * explains how Helix decomposes a prompt into atomic, reviewable units
 * and ships them as small, verified PRs.
 *
 * Pure server component. Each step has its own inline SVG glyph and
 * short copy; a dashed connector arrow links them on desktop widths.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface HowItWorksProps {
  className?: string;
}

interface Step {
  /** Stable id used for heading anchors and tests. */
  id: string;
  /** Display number ("01", "02", "03"). */
  number: string;
  /** Short label rendered above the heading. */
  eyebrow: string;
  /** Step heading. */
  title: string;
  /** One-paragraph description. */
  body: string;
  /** Bullet chips highlighting key qualities. */
  bullets: readonly string[];
}

const steps: readonly Step[] = [
  {
    id: "define",
    number: "01",
    eyebrow: "Step 1",
    title: "Define the work",
    body:
      "Point Helix at your repo and describe the outcome. The planner scans the codebase, identifies the contracts, and decomposes the request into atomic, reviewable units — each scoped to a single concern with explicit dependencies.",
    bullets: ["Atomic decomposition", "Dependency graph", "Scoped diffs"],
  },
  {
    id: "orchestrate",
    number: "02",
    eyebrow: "Step 2",
    title: "Orchestrate execution",
    body:
      "Units run in order, with parallelization gated by your protected paths and language conventions. Every step is observed; failures roll back without poisoning the working tree.",
    bullets: [
      "Parallelism with guardrails",
      "Rollback on failure",
      "Live progress",
    ],
  },
  {
    id: "ship",
    number: "03",
    eyebrow: "Step 3",
    title: "Ship verified PRs",
    body:
      "Each atom is verified against the rest of your repo — types, tests, lint — then committed as its own small pull request. You review what matters instead of untangling one sprawling diff.",
    bullets: [
      "Per-atom verification",
      "Reviewable PRs",
      "CI green by default",
    ],
  },
];

function StepIcon({ stepId }: { stepId: string }): React.ReactElement {
  // Three minimal, brand-themed SVG glyphs — server-rendered, no client JS.
  switch (stepId) {
    case "define":
      return (
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          aria-hidden="true"
          role="presentation"
        >
          <defs>
            <linearGradient id="hiw-define-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="9"
            fill="none"
            stroke="url(#hiw-define-stroke)"
            strokeWidth="1.75"
          />
          <path
            d="M14 20h20M14 28h14"
            stroke="url(#hiw-define-stroke)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="34" cy="28" r="2.25" fill="#22d3ee" />
        </svg>
      );
    case "orchestrate":
      return (
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          aria-hidden="true"
          role="presentation"
        >
          <defs>
            <linearGradient id="hiw-orch-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <circle
            cx="24"
            cy="24"
            r="14"
            fill="none"
            stroke="url(#hiw-orch-stroke)"
            strokeWidth="1.75"
          />
          <circle cx="24" cy="24" r="3.5" fill="#22d3ee" />
          <circle cx="38" cy="24" r="2.25" fill="#a78bfa" />
          <circle cx="10" cy="24" r="2.25" fill="#22d3ee" />
          <path
            d="M27 24h8M11 24h10"
            stroke="url(#hiw-orch-stroke)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ship":
      return (
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          aria-hidden="true"
          role="presentation"
        >
          <defs>
            <linearGradient id="hiw-ship-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path
            d="M24 6 L40 38 H8 Z"
            fill="none"
            stroke="url(#hiw-ship-stroke)"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M24 18 L32 32 H16 Z"
            fill="none"
            stroke="url(#hiw-ship-stroke)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="0.7"
          />
          <circle cx="24" cy="14" r="2" fill="#22d3ee" />
        </svg>
      );
    default:
      return <></>;
  }
}

function ConnectorArrow(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 80 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-20"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="hiw-connector" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <line
        x1="4"
        y1="12"
        x2="68"
        y2="12"
        stroke="url(#hiw-connector)"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
      <path
        d="M64 6 L74 12 L64 18"
        fill="none"
        stroke="#22d3ee"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      {/* Decorative background — soft aurora glow + faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[860px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
            How Helix works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            From prompt to small, verified pull requests.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Helix turns every coding request into a graph of atomic units,
            executes them in order, and ships each one as a reviewable PR
            — instead of one sprawling diff.
          </p>
        </div>

        {/* Step pipeline */}
        <ol
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-4"
        >
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <li
                className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-brand-400/40 hover:bg-white/[0.05] sm:p-8"
                aria-labelledby={`hiw-${step.id}-title`}
              >
                {/* Step header row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-400/30 bg-brand-500/10 text-brand-300">
                      <StepIcon stepId={step.id} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
                      {step.eyebrow}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-mono text-2xl font-medium text-slate-600"
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title + body */}
                <h3
                  id={`hiw-${step.id}-title`}
                  className="mt-5 text-lg font-semibold text-white sm:text-xl"
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                  {step.body}
                </p>

                {/* Bullets */}
                <ul
                  role="list"
                  className="mt-6 flex flex-wrap gap-2 pt-2 sm:mt-auto sm:pt-6"
                >
                  {step.bullets.map((b) => (
                    <li key={b}>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-ink-900/60 px-3 py-1 text-xs font-medium text-slate-200">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Connector (desktop only, between steps) */}
              {idx < steps.length - 1 ? (
                <li
                  aria-hidden="true"
                  className="hidden self-center lg:flex lg:items-center lg:justify-center"
                >
                  <ConnectorArrow />
                </li>
              ) : null}
            </React.Fragment>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;