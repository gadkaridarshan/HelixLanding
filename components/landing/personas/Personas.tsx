// helix: components/landing/personas/Personas.tsx
/**
 * @helix:story USER-303000
 *
 * Personas — "Built for" grid (developer, PM, founder, enterprise)
 * plus a testimonial / social-proof block.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface Persona {
  role: string;
  hook: string;
  bullets: ReadonlyArray<string>;
}

const PERSONAS: ReadonlyArray<Persona> = [
  {
    role: "Developers",
    hook: "Ship features, not diffs.",
    bullets: [
      "Stop reviewing 2,000-line AI PRs.",
      "Every unit passes types, tests, and lint.",
      "Focus on the change that matters.",
    ],
  },
  {
    role: "Product managers",
    hook: "Predictable AI delivery.",
    bullets: [
      "Plan features, not vibes.",
      "Clear scope per unit, traceable end-to-end.",
      "Tell stakeholders what shipped and why.",
    ],
  },
  {
    role: "Founders",
    hook: "Move fast without breaking things.",
    bullets: [
      "Atomic PRs keep main green.",
      "Fewer late-night hotfixes from sprawling AI diffs.",
      "Velocity your investors can verify.",
    ],
  },
  {
    role: "Enterprise teams",
    hook: "Governance, by construction.",
    bullets: [
      "Every unit is auditable.",
      "Policies enforced at the orchestrator, not the PR.",
      "Roll out AI coding safely, one team at a time.",
    ],
  },
];

const QUOTE = {
  body:
    "Helix turned our AI coding workflow from 'merge and pray' into 'merge and review'. Our PRs are small again.",
  attribution: "Engineering lead, early-access team",
};

export function Personas(): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className="relative py-20 sm:py-28"
    >
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center">
          <span className="hx-eyebrow">Built for</span>
          <h2 id="personas-heading" className="hx-heading-sm mt-3">
            One orchestrator,{" "}
            <span className="hx-text-gradient">every team</span>.
          </h2>
          <p className="hx-subheading mx-auto mt-4">
            Whether you ship solo or across an org, Helix adapts the AI
            coding loop to how you already work.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((p) => (
            <li
              key={p.role}
              className="hx-surface flex flex-col gap-3 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-helix-cyan">
                {p.role}
              </h3>
              <p className="text-lg font-semibold text-helix-text">
                {p.hook}
              </p>
              <ul className="mt-2 space-y-2 text-sm text-helix-text-muted">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-cyan-400/80"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <figure className="hx-surface-strong mx-auto mt-14 max-w-3xl p-8">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-violet-300/70"
            aria-hidden="true"
          >
            <path
              d="M7 7h4v4H7zm6 0h4v4h-4zM7 13h4v4H7zm6 0h4v4h-4z"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
          <blockquote className="mt-4 text-lg leading-relaxed text-helix-text">
            “{QUOTE.body}”
          </blockquote>
          <figcaption className="mt-4 text-sm text-helix-text-muted">
            — {QUOTE.attribution}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

export default Personas;