// helix: components/landing/faq/FAQ.tsx
/**
 * @helix:story USER-303000
 *
 * FAQ — native <details>/<summary> accordion with six common
 * questions. Server-rendered, no client JS required.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface QA {
  q: string;
  a: string;
}

const QUESTIONS: ReadonlyArray<QA> = [
  {
    q: "What is Helix, exactly?",
    a: "Helix is an orchestration layer for AI coding agents. You give it a prompt, and it decomposes the work into atomic units, executes them in topological order, and verifies each one against your repo's types, tests, and lint — opening one focused PR per unit.",
  },
  {
    q: "How is this different from just using an AI coding agent directly?",
    a: "A raw agent produces one sprawling diff. Helix produces many small, verified ones. You get reviewable changes, explicit dependencies, and a clear audit trail from prompt to PR.",
  },
  {
    q: "Do I have to use a specific coding agent?",
    a: "No. Helix has a pluggable executor interface, so you can bring whichever agent you already use. The orchestrator wraps it.",
  },
  {
    q: "How does verification work?",
    a: "After each unit is implemented, Helix runs the repo's existing checks — TypeScript, ESLint, the test suite, the build — and only marks the unit complete if everything passes. If something fails, Helix retries within the unit's scope.",
  },
  {
    q: "Is Helix open source?",
    a: "The orchestrator's source lives at github.com/gadkaridarshan/Helix. You can self-host it or use the hosted early access.",
  },
  {
    q: "Where can I see it running?",
    a: "There is a visual / brand reference deployment at helix-ai-orchestrator.vercel.app — clearly labelled as a reference, not this product's live site. The live product is deployed at the URL configured in lib/brand.ts.",
  },
];

export function FAQ(): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20 sm:py-28"
    >
      <Container size="md">
        <div className="mx-auto max-w-2xl text-center">
          <span className="hx-eyebrow">FAQ</span>
          <h2 id="faq-heading" className="hx-heading-sm mt-3">
            Questions,{" "}
            <span className="hx-text-gradient">answered</span>.
          </h2>
          <p className="hx-subheading mx-auto mt-4">
            The things teams ask before they adopt Helix.
          </p>
        </div>

        <ul className="mt-12 space-y-3">
          {QUESTIONS.map((qa, idx) => (
            <li
              key={qa.q}
              className="hx-surface overflow-hidden"
            >
              <details
                className="group"
                {...(idx === 0 ? { open: true } : {})}
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-4 text-left text-base font-medium text-helix-text transition-colors hover:bg-white/[0.02]"
                >
                  <span>{qa.q}</span>
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 flex-none place-items-center rounded-full border border-helix-border-strong text-helix-text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-helix-text-muted">
                  {qa.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default FAQ;