// helix: components/sections/Features.tsx
/**
 * @helix:story USER-303000
 *
 * Features — six core capabilities in a 3-column responsive grid.
 *
 * Each card has:
 *   • A small icon glyph (inline SVG, no external deps)
 *   • A title
 *   • A short description
 *
 * Pure server component. Section id is `features` for navbar anchors.
 */
import * as React from "react";

export interface FeaturesProps {
  className?: string;
}

interface FeatureItem {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

const items: ReadonlyArray<FeatureItem> = [
  {
    title: "Atomic decomposition",
    description:
      "Every prompt is broken into small, reviewable units with explicit inputs, outputs, and acceptance criteria.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="1.5" />
        <circle cx="20" cy="6" r="1.5" />
        <circle cx="4" cy="18" r="1.5" />
        <circle cx="20" cy="18" r="1.5" />
        <path d="M5.3 6.8 9.5 10.5M18.7 6.8 14.5 10.5M5.3 17.2 9.5 13.5M18.7 17.2 14.5 13.5" />
      </svg>
    ),
  },
  {
    title: "Dependency-ordered execution",
    description:
      "Units run in the right order, with explicit upstream/downstream dependencies — no half-built states.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M4 6h6v4H4zM14 6h6v4h-6zM4 14h6v4H4zM14 14h6v4h-6z" />
        <path d="M10 8h4M10 16h4M7 10v4M17 10v4" />
      </svg>
    ),
  },
  {
    title: "Repo-aware verification",
    description:
      "Each unit is checked against your repo — types, tests, lint — before the next one starts.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Small, reviewable PRs",
    description:
      "Each unit ships as its own commit or PR — so reviewers see focused diffs, not sprawling walls of code.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="12" r="2" />
        <path d="M8 6c4 0 4 6 8 6M8 18c4 0 4-6 8-6" />
      </svg>
    ),
  },
  {
    title: "Deterministic replays",
    description:
      "Every unit records its inputs, outputs, and verification result — re-run any unit, any time.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
      </svg>
    ),
  },
  {
    title: "Plays nicely with your stack",
    description:
      "Drop-in for TypeScript / Node today; designed to extend to whatever language or framework you ship in.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 3 4 7v10l8 4 8-4V7Z" />
        <path d="m4 7 8 4 8-4M12 11v10" />
      </svg>
    ),
  },
];

export function Features({ className }: FeaturesProps): React.ReactElement {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className={
        "relative isolate py-20 sm:py-28 " + (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.10),_transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              reviewable
            </span>{" "}
            AI code.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Every capability is designed around one principle: small,
            verifiable units beat one giant diff.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-cyan-300">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;