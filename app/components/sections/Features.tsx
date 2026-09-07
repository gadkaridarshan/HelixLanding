// helix: app/components/sections/Features.tsx
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/**
 * @helix:story USER-347000
 * Features — 3x2 grid of value props derived from the Helix product.
 * Server component. Imports only from components/ui.
 */

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

const features: Feature[] = [
  {
    id: "atomic",
    title: "Atomic work breakdown",
    description:
      "Every requirement is decomposed into reviewable cards with clear scope, so agents never touch more than they should.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" strokeLinejoin="round" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" strokeLinejoin="round" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" strokeLinejoin="round" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "parallel",
    title: "Parallel agent orchestration",
    description:
      "Dispatch coding agents on independent tracks simultaneously. Helix merges the work without the merge conflicts.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path d="M4 6h6M14 6h6M4 18h6M14 18h6" strokeLinecap="round" />
        <circle cx="7" cy="6" r="2" strokeLinejoin="round" />
        <circle cx="17" cy="6" r="2" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="2" strokeLinejoin="round" />
        <circle cx="17" cy="18" r="2" strokeLinejoin="round" />
        <path d="M9 8l-2 8M15 8l2 8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "deps",
    title: "Dependency-safe cards",
    description:
      "Cards carry their own dependency graph. Helix schedules execution so no agent reads code another agent is rewriting.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <circle cx="6" cy="6" r="2.2" strokeLinejoin="round" />
        <circle cx="18" cy="6" r="2.2" strokeLinejoin="round" />
        <circle cx="12" cy="18" r="2.2" strokeLinejoin="round" />
        <path
          d="M7.6 7.6L11 16.4M16.4 7.6L13 16.4M8.2 6h7.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "language",
    title: "Language-aware planning",
    description:
      "Prompt packs and conventions are tuned per language. Python gets one prompt, TypeScript gets another — no generic mush.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "protected",
    title: "Protected-path enforcement",
    description:
      "Lock files, configs, and sensitive directories are scoped out by default. Agents write only where you permit.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <rect
          x="4"
          y="10"
          width="16"
          height="11"
          rx="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 10V7a4 4 0 1 1 8 0v3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="15.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "diff",
    title: "Reviewable diff trail",
    description:
      "Every card ships with a focused diff and a one-line rationale. Review the change, not the chaos.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          d="M8 4h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5 4v16M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <Section
      id="features"
      aria-labelledby="features-heading"
      className="border-b border-white/5"
    >
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            Why Helix
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Built for the messy reality of agent-driven development.
          </h2>
          <p className="mt-4 text-pretty text-base text-white/60 sm:text-lg">
            Six primitives that turn a swarm of coding agents into one
            accountable team.
          </p>
        </div>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-violet-400/40 hover:bg-white/[0.04]"
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/10 opacity-0 blur-2xl transition group-hover:opacity-100"
              />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-sky-500/20 text-violet-200">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}