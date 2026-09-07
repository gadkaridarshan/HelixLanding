// helix: components/Features.tsx
/**
 * @helix:story USER-308000
 *
 * Features — six-card capability grid that highlights the core pillars of
 * the Helix orchestrator:
 *
 *   1. Atomic decomposition    — every prompt breaks into reviewable units
 *   2. Parallel agents         — independent units fan out concurrently
 *   3. Vercel-ready            — one-click deploys to Vercel
 *   4. Framework-aware         — language / framework specific guards
 *   5. Persona targeting       — role-tuned output for the audience
 *   6. Theme tokens            — consistent brand surface across touchpoints
 *
 * This is the single source of truth for the Features section consumed
 * by `app/page.tsx` (via `components/sections/Features` re-export).
 *
 * The component is a pure server component: no client state, no event
 * handlers, no effects. Icons are inline SVG so the section renders
 * without any external image/font requests and stays tree-shake friendly.
 *
 * Acceptance scope for USER-308000:
 *   • Six tiles in a responsive grid (1 / 2 / 3 columns by breakpoint)
 *   • Each tile carries an icon, a title, and a concise description
 *   • Server component, accessible markup, dark-first visual language
 *   • No new dependencies; uses `@/components/ui/Container`
 */

import * as React from "react";

import { Container } from "@/components/ui/Container";

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
    title: "Parallel agents",
    description:
      "Independent units fan out across workers in parallel — then merge deterministically through the dependency graph.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 3l3 4-3 4-3-4 3-4zM5 14l3 4-3 4-3-4 3-4zM19 14l3 4-3 4-3-4 3-4z" />
        <path d="M12 11v4M7.5 14.5h9" />
      </svg>
    ),
  },
  {
    title: "Vercel-ready",
    description:
      "One-click deploy to Vercel with framework auto-detection, preview URLs per pull request, and zero-config rollbacks.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 3l9 16H3l9-16z" />
        <path d="M12 3l-6 11h12l-6-11z" />
      </svg>
    ),
  },
  {
    title: "Framework-aware",
    description:
      "Built-in knowledge of Next.js, React, Node, Python, Go, and more — so each unit respects the conventions of your stack.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 14h4M7 17h7" />
      </svg>
    ),
  },
  {
    title: "Persona targeting",
    description:
      "Output is tuned for the reader — developers, tech leads, AI engineers, PMs, and founders each get the angle that matters.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="8" cy="9" r="3" />
        <circle cx="16" cy="9" r="3" />
        <path d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5M11 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      </svg>
    ),
  },
  {
    title: "Theme tokens",
    description:
      "A single typed token set powers colors, radii, typography, and motion — keeping the brand surface consistent everywhere.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 3a9 9 0 100 18 4 4 0 004-4 4 4 0 00-4-4 4 4 0 01-4-4 9 9 0 014-6z" />
        <circle cx="8" cy="9" r="1" fill="currentColor" />
        <circle cx="14" cy="7" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
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
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      {/* Decorative background — soft aurora glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-500-soft blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-accent-500-soft blur-3xl opacity-30" />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-400">
            Capabilities
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Built for reviewable AI work
          </h2>
          <p className="mt-4 text-base text-ink-300 sm:text-lg">
            Six pillars that turn sprawling AI output into a series of small,
            verified, and reviewable changes — exactly the way modern teams
            already review code.
          </p>
        </div>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="group relative flex flex-col rounded-2xl border border-ink-800/60 bg-ink-900/40 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:bg-ink-900/60"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/15 group-hover:text-brand-300">
                <span className="block h-6 w-6">{item.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;