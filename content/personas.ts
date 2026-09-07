// helix: content/personas.ts
/**
 * @helix:story USER-308000
 *
 * Personas — content for the role-targeted Personas section.
 *
 * Each persona has a label (shown on the tab), a longer role line
 * (shown inside the panel), and a list of value-prop bullets.
 */
import type { PersonaTab } from "@/components/landing/personas/PersonasTabs";

export const personas: ReadonlyArray<PersonaTab> = [
  {
    id: "developer",
    label: "Developer",
    role: "For the developer who wants to stay in flow.",
    bullets: [
      "Stop losing momentum to sprawling AI diffs",
      "Review each atom-sized change in seconds",
      "Trust type-check + tests as merge gates",
      "Keep your git history clean and bisectable",
    ],
  },
  {
    id: "tech-lead",
    label: "Tech Lead",
    role: "For the tech lead owning the merge queue.",
    bullets: [
      "Every PR is auditable and replayable",
      "Dependency-gated execution prevents foot-guns",
      "Standardize quality across the whole team",
      "Roll back any atom without touching the rest",
    ],
  },
  {
    id: "ai-engineer",
    label: "AI Engineer",
    role: "For the AI engineer building on top of agents.",
    bullets: [
      "Composable orchestration primitives",
      "First-class verifiers for TS, Python, Go, Rust",
      "Replay + inspect the build graph after the fact",
      "Plug in custom atoms and policies",
    ],
  },
  {
    id: "product-manager",
    label: "Product Manager",
    role: "For the PM shipping faster without losing control.",
    bullets: [
      "Turn a ticket into reviewable PRs overnight",
      "Track every atom's status in one place",
      "Human-in-the-loop merge keeps you in control",
      "Faster cycles, fewer regressions",
    ],
  },
  {
    id: "founder",
    label: "Founder",
    role: "For the founder scaling an engineering org.",
    bullets: [
      "Multiply output without multiplying headcount",
      "Onboard new repos in hours, not weeks",
      "Open source, self-hostable, MIT licensed",
      "Same code path on-prem and hosted",
    ],
  },
];