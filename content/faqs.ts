// helix: content/faqs.ts
/**
 * @helix:story USER-308000
 *
 * FAQ content — common objections and answers surfaced by `components/Faq.tsx`.
 * Pure data.
 */
import type { FaqItem } from "@/components/landing/faq/FaqAccordion";

export const faqs: FaqItem[] = [
  {
    id: "what-is-helix",
    question: "What exactly is Helix?",
    answer:
      "Helix is an atomic work-breakdown orchestrator for AI coding agents. It takes a prompt, decomposes it into small reviewable units, executes them in dependency order, and verifies each one against your repo (types, tests, lint) before opening a PR.",
  },
  {
    id: "how-is-it-different",
    question: "How is Helix different from running an agent directly?",
    answer:
      "A raw agent produces a single, sprawling diff you have to re-review from scratch. Helix produces many small, scoped PRs — each tied to a unit, each gated on verification, each safe to merge or roll back independently.",
  },
  {
    id: "what-verification",
    question: "What does “verified” actually mean?",
    answer:
      "Every unit runs the same gates you’d run in CI — your TypeScript types, your test suite, and your linter. The verification report is attached to the PR, so reviewers can see exactly what passed before they read the diff.",
  },
  {
    id: "what-languages",
    question: "Which languages and frameworks are supported?",
    answer:
      "Helix is language-agnostic at the orchestrator level. Verification is driven by whatever your repo already runs in CI — TypeScript, JavaScript, Python, Go, Rust, and anything else with a test runner.",
  },
  {
    id: "is-it-safe",
    question: "Is it safe to run on my real codebase?",
    answer:
      "Yes. Helix never edits your repo directly — it produces PRs through your existing Git workflow. Every unit is bounded, every unit is verified, and nothing merges without a human reviewer.",
  },
  {
    id: "self-host",
    question: "Can I self-host or run it locally?",
    answer:
      "Yes. Helix runs anywhere your CI runs — your laptop, a container, or your own cloud. The orchestrator is deterministic, so you get the same plan-and-verify loop in every environment.",
  },
];