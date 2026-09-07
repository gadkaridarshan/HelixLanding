// helix: components/landing/features/Features.tsx
/**
 * @helix:story USER-303000
 *
 * Features — capability grid for Helix. Six tiles covering planning,
 * execution, verification, and integration.
 */
import * as React from "react";

interface Feature {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

const features: readonly Feature[] = [
  {
    title: "Atomic work-breakdown",
    description:
      "Helix decomposes each prompt into small, reviewable units — never a single sprawling change.",
    icon: <AtomIcon />,
  },
  {
    title: "Ordered execution",
    description:
      "Units run sequentially with explicit dependencies, so the agent never writes code that depends on itself.",
    icon: <OrderedIcon />,
  },
  {
    title: "Repo-aware verification",
    description:
      "Each unit is checked against the surrounding codebase: type-checks, tests, and lint — automatically.",
    icon: <ShieldIcon />,
  },
  {
    title: "Diff traceability",
    description:
      "Every PR maps back to a specific unit and prompt — no mystery edits, no orphaned branches.",
    icon: <TraceIcon />,
  },
  {
    title: "Bring-your-own agent",
    description:
      "Plugs into your existing coding agent — Helix orchestrates, your model writes.",
    icon: <PlugIcon />,
  },
  {
    title: "Human-in-the-loop",
    description:
      "Review, pause, or steer at any unit boundary. Helix stops where you want it to.",
    icon: <HandIcon />,
  },
];

export function Features(): React.ReactElement {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="section-pad"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Capabilities</span>
          <h2
            id="features-title"
            className="h-display mt-4 text-3xl font-semibold text-white sm:text-4xl"
          >
            Everything an orchestrator needs,{" "}
            <span className="text-gradient-brand">nothing it doesn’t</span>.
          </h2>
          <p className="mt-4 text-brand-muted">
            Focused primitives that keep autonomous agents coherent on real
            codebases.
          </p>
        </div>

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <li
              key={f.title}
              className="card-glass group rounded-2xl p-6 transition"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan ring-1 ring-brand-cyan/30">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AtomIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" />
    </svg>
  );
}
function OrderedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 6h12M4 12h8M4 18h14" strokeLinecap="round" />
      <path d="M18 8l4-2-4-2M18 14l4-2-4-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3Z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TraceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h16M4 12h10M4 17h16" strokeLinecap="round" />
      <circle cx="18" cy="12" r="2.5" />
    </svg>
  );
}
function PlugIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 2v4M15 2v4" strokeLinecap="round" />
      <path d="M7 6h10v6a5 5 0 0 1-5 5 5 5 0 0 1-5-5V6Z" />
      <path d="M12 17v5" strokeLinecap="round" />
    </svg>
  );
}
function HandIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 11V6a1.5 1.5 0 1 1 3 0v5M10 11V4.5a1.5 1.5 0 1 1 3 0V11M13 11V6a1.5 1.5 0 1 1 3 0v7c0 3.5-2.5 6-6 6s-6-2.5-6-6v-3l1.5-1.5a1.5 1.5 0 0 1 2.5 1V11" strokeLinejoin="round" />
    </svg>
  );
}

export default Features;