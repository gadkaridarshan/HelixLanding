// helix: components/landing/personas/Personas.tsx
/**
 * @helix:story USER-303000
 *
 * Personas — social-proof card grid showing the kinds of teams Helix
 * is built for. Each card pairs a role, a pain point, and the Helix
 * outcome that addresses it.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface Persona {
  readonly role: string;
  readonly quote: string;
  readonly pain: string;
  readonly outcome: string;
}

const PERSONAS: ReadonlyArray<Persona> = [
  {
    role: "Solo founders",
    quote:
      "I want AI to ship the boring 80% so I can focus on the 20% only I can do.",
    pain: "Hours lost reviewing 1,000-line AI diffs.",
    outcome: "Atoms you can skim in two minutes.",
  },
  {
    role: "Startup engineers",
    quote:
      "I need to move fast without breaking the contract the rest of the team depends on.",
    pain: "One agent PR broke five other features.",
    outcome: "Repo-aware verification on every unit.",
  },
  {
    role: "Platform teams",
    quote:
      "I want predictable AI output my team can review and audit like any other PR.",
    pain: "Non-deterministic, unreplayable AI commits.",
    outcome: "Deterministic replay + linear PR history.",
  },
  {
    role: "Consultancies",
    quote:
      "I deliver AI-augmented work to clients who need to read every line.",
    pain: "Clients reject AI PRs they can't trust.",
    outcome: "Small, readable, mergeable diffs.",
  },
];

export function Personas(): React.ReactElement {
  return (
    <section
      id="personas"
      className="relative scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="personas-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="hx-eyebrow">Built for</p>
          <h2 id="personas-heading" className="hx-heading mt-3">
            The people who{" "}
            <span className="hx-text-gradient">refuse to ship a 1,000-line diff</span>.
          </h2>
          <p className="hx-subheading">
            If you&apos;ve ever closed an AI PR and reopened it manually,
            you&apos;re who Helix was built for.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PERSONAS.map((p) => (
            <li key={p.role} className="hx-card flex flex-col gap-3">
              <p className="hx-mono text-xs uppercase tracking-wider text-cyan-300">
                {p.role}
              </p>
              <p className="text-base leading-relaxed text-white">
                &ldquo;{p.quote}&rdquo;
              </p>
              <div className="mt-auto grid grid-cols-1 gap-2 border-t border-white/10 pt-4 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Pain
                  </p>
                  <p className="mt-1 text-slate-300">{p.pain}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Helix outcome
                  </p>
                  <p className="mt-1 text-slate-200">{p.outcome}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Personas;