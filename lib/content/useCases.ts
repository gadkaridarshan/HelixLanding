// helix: lib/content/useCases.ts
/**
 * @helix:story USER-397000
 *
 * Centralized content for the Use Cases grid and Metrics band.
 *
 * Keeping the data here — rather than inline in the section components —
 * makes it easy to reuse the same copy across the landing page, the
 * README, and future surfaces (case studies, blog posts, OG images).
 *
 *   • USE_CASES — four concrete Helix scenarios that map to the four
 *     personas served by the product (developer, indie hacker, startup,
 *     enterprise team). Each entry has a role, headline, scenario,
 *     outcome, testimonial, and an accent color so the grid renders
 *     visually distinct cards.
 *
 *   • METRICS — quantifiable outcomes shown in the metrics band. Each
 *     metric has a value, label, sublabel and an icon key so the
 *     presentation layer can pick the right glyph without coupling
 *     content to JSX.
 */

export type UseCaseAccent = "cyan" | "violet" | "fuchsia" | "emerald";

export interface UseCase {
  readonly id: string;
  readonly role: string;
  readonly headline: string;
  readonly scenario: string;
  readonly outcome: string;
  readonly quote: string;
  readonly attribution: string;
  readonly accent: UseCaseAccent;
  readonly icon: "fanout" | "atomic" | "deploy" | "personas";
}

export const USE_CASES: ReadonlyArray<UseCase> = [
  {
    id: "parallel-fanout",
    role: "Engineering team",
    headline: "Parallel agent fan-out across a monorepo",
    scenario:
      "Helix reads a single feature brief, decomposes it into 14 atomic units, and fans work out to multiple coding agents in parallel — each scoped to a single package with its own acceptance criteria.",
    outcome:
      "A two-week feature ships in an afternoon. Every package compiles, types pass, and CI is green on the first try.",
    quote:
      "We stopped opening 2,000-line AI PRs. Helix delivers a stack of reviewable atomic diffs we can merge with confidence.",
    attribution: "Staff engineer, infra platform",
    accent: "cyan",
    icon: "fanout",
  },
  {
    id: "atomic-breakdown",
    role: "Indie hacker",
    headline: "Atomic work breakdown for solo builds",
    scenario:
      "Drop in a half-baked feature idea and Helix plans the work into ordered, verifiable units — schema, types, UI, tests — then walks your coding agent through each one without you babysitting.",
    outcome:
      "Solo shipping velocity triples. You stay in flow-state designing, while Helix handles the planning and verification loop.",
    quote:
      "It feels like having a senior engineer pair with me. I write the spec, Helix makes it real, and the tests actually pass.",
    attribution: "Indie founder, dev-tools startup",
    accent: "violet",
    icon: "atomic",
  },
  {
    id: "vercel-deploy",
    role: "Startup CTO",
    headline: "One-prompt → preview deploy on Vercel",
    scenario:
      "Helix plans, executes, and verifies a feature end-to-end. On the green unit it opens a PR, kicks off the Vercel preview deploy, and posts the live URL back into your PR thread.",
    outcome:
      "Stakeholders get a clickable preview URL minutes after the prompt, not days. No 'works on my machine' demo loops.",
    quote:
      "Our investors click a real link in the PR comment. Helix closed the gap between 'AI shipped it' and 'you can use it today.'",
    attribution: "CTO, seed-stage B2B SaaS",
    accent: "fuchsia",
    icon: "deploy",
  },
  {
    id: "multi-persona",
    role: "Enterprise platform team",
    headline: "Multi-persona coverage with governance",
    scenario:
      "Helix routes each unit through the right persona policy: developer PRs go through code review, PM-facing scopes produce scope docs, founder-grade units ship behind feature flags. Every unit carries an audit trail.",
    outcome:
      "Engineering, product, and security see the same atomic truth — and the same traceability — at every level of the org.",
    quote:
      "We get the velocity of AI coding and the auditability our security team demands. The two used to be trade-offs.",
    attribution: "Director of platform, Fortune 500",
    accent: "emerald",
    icon: "personas",
  },
];

export type MetricIcon =
  | "bolt"
  | "shield"
  | "stack"
  | "clock"
  | "spark"
  | "graph";

export interface Metric {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly sublabel: string;
  readonly icon: MetricIcon;
}

export const METRICS: ReadonlyArray<Metric> = [
  {
    id: "units-shipped",
    value: "12,400+",
    label: "Atomic units shipped",
    sublabel:
      "Verified, merged, and deployed across customer codebases in the last 90 days.",
    icon: "stack",
  },
  {
    id: "first-pass-merge",
    value: "94%",
    label: "First-pass merge rate",
    sublabel:
      "Units that pass type-check, tests, and lint on the first attempt — no rework loops.",
    icon: "shield",
  },
  {
    id: "time-to-preview",
    value: "11 min",
    label: "Median prompt → preview",
    sublabel:
      "From feature brief to a live Vercel preview URL a stakeholder can click.",
    icon: "clock",
  },
  {
    id: "diff-shrink",
    value: "−86%",
    label: "Median diff size vs. raw agent",
    sublabel:
      "Smaller, focused PRs that reviewers can actually understand and approve.",
    icon: "graph",
  },
  {
    id: "loop-pause",
    value: "0",
    label: "Silent failures on main",
    sublabel:
      "Helix pauses the loop on any failing unit — main stays green, every time.",
    icon: "bolt",
  },
  {
    id: "persona-coverage",
    value: "4",
    label: "Personas, one workflow",
    sublabel:
      "Developers, indie hackers, founders, and enterprise teams on a single pipeline.",
    icon: "spark",
  },
];

export default { USE_CASES, METRICS };