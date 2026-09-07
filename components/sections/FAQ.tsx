// helix: components/sections/FAQ.tsx
/**
 * @helix:story USER-349000
 *
 * FAQ section — canonical implementation.
 *
 * Renders an accessible accordion of last-mile objections. Uses
 * native <details>/<summary> for zero-JS progressive enhancement
 * and full keyboard support.
 */

import type { ReactElement } from "react";

import { Container } from "@/components/ui/Container";

interface FAQItem {
  readonly q: string;
  readonly a: string;
}

const ITEMS: ReadonlyArray<FAQItem> = [
  {
    q: "What does Helix actually do?",
    a: "Helix is an AI coding orchestrator that decomposes every request into the smallest reviewable units — files, diffs, and decisions — then executes them in order, pausing for your review at every boundary. You ship atomic PRs instead of monolithic AI-generated commits.",
  },
  {
    q: "Is Helix open source?",
    a: "Yes. Helix is released under the MIT license. You can self-host, fork, and audit every line. The cloud version on Vercel is a hosted convenience for teams that don't want to run the orchestrator themselves.",
  },
  {
    q: "How is this different from Cursor or Copilot?",
    a: "Cursor and Copilot are pair-programmers — they help you write code line-by-line. Helix is an orchestrator — it takes a goal and breaks it into reviewable units of work that your team can approve, redirect, or skip. It runs the whole loop, not just the keystrokes.",
  },
  {
    q: "Will Helix break my repo?",
    a: "Helix runs file-integrity checks on every change — diagnostics, type checks, missing imports, unresolved modules. If a unit fails, it doesn't ship. You get a clean, typed, reviewable diff every time, or the work doesn't land.",
  },
  {
    q: "Can I deploy Helix on my own infra?",
    a: "Yes. Install Helix via npm, run it in CI, or deploy the orchestrator to any container host. Vercel is the path of least resistance, but it's not the only path.",
  },
  {
    q: "How do I get started?",
    a: "Install the Helix CLI, point it at your repo, and describe the goal you want shipped. Helix decomposes it, shows you the plan, and starts executing. Most teams ship their first atomic PR in under five minutes.",
  },
];

export function FAQ(): ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl"
          >
            Last-mile questions, answered.
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Everything teams ask before they wire Helix into their workflow.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {ITEMS.map((item) => (
            <details
              key={item.q}
              className="group px-6 py-5 transition open:bg-white/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-base font-semibold text-ink-50">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-brand-300 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-ink-300">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;