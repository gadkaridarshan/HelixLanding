// helix: components/sections/FAQ.tsx
/**
 * @helix:story USER-956000
 *
 * FAQ section — canonical implementation.
 */

import type { ReactElement } from "react";

export function FAQ(): ReactElement {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="glass relative overflow-hidden rounded-3xl p-10">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-300">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-ink-50 sm:text-4xl">
          Last-mile questions, answered.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-300">
          Scaffold placeholder. Question/answer pairs land in a follow-up
          card.
        </p>
      </div>
    </section>
  );
}

export default FAQ;