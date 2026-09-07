// helix: components/landing/how-it-works/HowItWorks.tsx
/**
 * @helix:story USER-303000
 *
 * HowItWorks — three-step execution loop, rendered as a numbered
 * grid with an inline SVG diagram connecting the steps.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: ReadonlyArray<Step> = [
  {
    number: "01",
    title: "Decompose",
    description:
      "Helix reads your prompt, explores the repo, and breaks the work into atomic units with explicit acceptance criteria.",
  },
  {
    number: "02",
    title: "Execute & verify",
    description:
      "Each unit is implemented in topological order by a coding agent, then verified against your types, tests, and lint.",
  },
  {
    number: "03",
    title: "Ship small PRs",
    description:
      "Verified units are opened as focused PRs — small enough to review in one sitting, ready to merge.",
  },
];

export function HowItWorks(): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="relative py-20 sm:py-28"
    >
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center">
          <span className="hx-eyebrow">How it works</span>
          <h2 id="how-heading" className="hx-heading-sm mt-3">
            A clear, three-step{" "}
            <span className="hx-text-gradient">execution loop</span>.
          </h2>
          <p className="hx-subheading mx-auto mt-4">
            No black box. Every step is observable, every unit is
            traceable from prompt to PR.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.number}
              className="hx-surface relative flex flex-col gap-3 p-6"
            >
              <span
                aria-hidden="true"
                className="hx-text-gradient text-3xl font-bold tracking-tight"
              >
                {s.number}
              </span>
              <h3 className="text-lg font-semibold text-helix-text">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-helix-text-muted">
                {s.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <svg
            viewBox="0 0 600 80"
            className="w-full max-w-2xl text-helix-text-muted"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="hw-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path
              d="M40 40 H560"
              stroke="url(#hw-line)"
              strokeWidth="2"
              strokeDasharray="4 6"
              fill="none"
            />
            <circle cx="100" cy="40" r="5" fill="#67e8f9" />
            <circle cx="300" cy="40" r="5" fill="#a78bfa" />
            <circle cx="500" cy="40" r="5" fill="#f472b6" />
          </svg>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;