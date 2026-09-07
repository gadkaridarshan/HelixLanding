// helix: content/personas.ts
/**
 * @helix:story USER-23000
 *
 * Persona content for the Personas section. Each entry powers a tab
 * in the tabbed UI and includes a role-specific headline, value
 * bullets, and call-to-action.
 */

export interface Persona {
  id: string;
  role: string;
  shortRole: string;
  headline: string;
  description: string;
  bullets: ReadonlyArray<string>;
  ctaLabel: string;
  ctaHref: string;
}

export const personas: ReadonlyArray<Persona> = [
  {
    id: "developer",
    role: "Developer",
    shortRole: "Dev",
    headline: "Ship small, reviewable PRs — not one sprawling diff.",
    description:
      "Helix decomposes every prompt into atomic units, executes them in order, and verifies each one against your repo before shipping.",
    bullets: [
      "Atomic plans you can read and approve.",
      "Type-checked, linted, tested before review.",
      "Local + CI parity — no surprise regressions.",
    ],
    ctaLabel: "Read the dev quickstart",
    ctaHref: "#how-it-works",
  },
  {
    id: "tech-lead",
    role: "Tech Lead",
    shortRole: "Lead",
    headline: "Review PRs in minutes, not hours.",
    description:
      "Every PR is small, scoped, and verified. Your reviewers see one change at a time, with explicit dependencies and a quality bar.",
    bullets: [
      "Small, dependency-ordered diffs.",
      "Protected paths honored across stacks.",
      "Quality bar: types, tests, lint on every unit.",
    ],
    ctaLabel: "See the review workflow",
    ctaHref: "#features",
  },
  {
    id: "ai-engineer",
    role: "AI Engineer",
    shortRole: "AI",
    headline: "Orchestrate agents with explicit, reviewable units.",
    description:
      "Treat agent execution like a build pipeline. Helix gives you atomic plans, dependency graphs, and verifiable outcomes.",
    bullets: [
      "Dependency graph between units.",
      "Deterministic, parallelizable execution.",
      "Pluggable verifiers (types, tests, lint).",
    ],
    ctaLabel: "Explore the orchestration model",
    ctaHref: "#features",
  },
  {
    id: "product-manager",
    role: "Product Manager",
    shortRole: "PM",
    headline: "Predictable velocity from your AI coding agents.",
    description:
      "Helix turns prompt-to-PR into a measurable, gated pipeline. Track units shipped, units verified, and time-to-merge.",
    bullets: [
      "Pipeline metrics, not vibes.",
      "Gated parallelization keeps velocity predictable.",
      "Clear audit trail for every shipped change.",
    ],
    ctaLabel: "See the metrics dashboard",
    ctaHref: "#stats",
  },
  {
    id: "founder",
    role: "Founder",
    shortRole: "Founder",
    headline: "One prompt. Many small PRs. Zero review chaos.",
    description:
      "Solo founders get the leverage of a senior engineer. Helix keeps the codebase green while you focus on the product.",
    bullets: [
      "Hands-off, gated shipping.",
      "Language-aware protected paths.",
      "Works with the AI agent you already use.",
    ],
    ctaLabel: "Get early access",
    ctaHref: "#cta",
  },
];