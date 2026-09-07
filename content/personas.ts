// helix: content/personas.ts
/**
 * @helix:story USER-308000
 *
 * Personas content — five role-targeted value props surfaced by the
 * `components/Personas.tsx` section. Pure data; no React.
 */
import type { PersonaItem } from "@/components/landing/personas/PersonasTabs";

export const personas: PersonaItem[] = [
  {
    id: "developer",
    role: "Developer",
    tagline: "For the engineer in the loop",
    pain: "AI suggestions are sprawling, untested diffs that break the build.",
    value:
      "Helix breaks every prompt into atomic, reviewable units — small enough to read, with type/test/lint gates baked in.",
    bullets: [
      "Reviewable units, not 800-line diffs",
      "Explicit dependencies between units, so the build order is obvious",
      "Auto-verified against your repo's types, tests, and lint before you ever see the PR",
      "Stays inside your editor workflow — no new tool to babysit",
    ],
    accent: "cyan",
  },
  {
    id: "tech-lead",
    role: "Tech Lead",
    tagline: "For the person owning the architecture",
    pain: "AI output is a black box — you can't tell what's safe to merge.",
    value:
      "Every unit ships with its contract, its dependencies, and a green verification report. You review code, not vibes.",
    bullets: [
      "Per-unit verification report (types, tests, lint) attached to each PR",
      "Dependency graph makes blast radius obvious before merge",
      "Atomic units keep architectural intent intact — no silent refactors",
      "Audit-friendly history: one card per unit, one commit per card",
    ],
    accent: "violet",
  },
  {
    id: "ai-engineer",
    role: "AI Engineer",
    tagline: "For the person wiring the agents",
    pain: "Prompting a monolith model gives you monolith output you can't trust.",
    value:
      "Helix is a deterministic orchestrator: explicit planning, explicit ordering, explicit verification. Composable, not magical.",
    bullets: [
      "Plan → decompose → execute → verify, every time, no surprise paths",
      "Pluggable verification gates so you can wire in your own evals",
      "Structured unit artifacts you can inspect, log, and replay",
      "No prompt spaghetti — the prompt is the plan, the plan is the diff",
    ],
    accent: "fuchsia",
  },
  {
    id: "product-manager",
    role: "Product Manager",
    tagline: "For the person owning the outcome",
    pain: "AI work is invisible until it ships — and when it ships, it's a coin flip.",
    value:
      "Helix turns the work into a visible queue of small, scoped units. You see what's being built, in what order, and why.",
    bullets: [
      "Live board of units in flight — clear status, no mystery",
      "Scope is enforced up-front; agents can't quietly expand the diff",
      "Per-unit PRs mean faster, safer rollouts and cleaner rollbacks",
      "Shipped work is provably green: types, tests, and lint passed",
    ],
    accent: "emerald",
  },
  {
    id: "founder",
    role: "Founder",
    tagline: "For the person owning the runway",
    pain: "AI speed means nothing if it ships bugs faster than you can fix them.",
    value:
      "Helix trades raw speed for compounding velocity — small units, green checks, fewer incidents.",
    bullets: [
      "Fewer rollbacks — every unit is verified before it lands",
      "Faster onboarding — new engineers read the unit graph, not the codebase",
      "Predictable cadence — scope is bounded, output is bounded",
      "Defensible velocity — speed that survives contact with production",
    ],
    accent: "amber",
  },
];