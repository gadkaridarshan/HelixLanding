// helix: components/sections/features/Features.tsx
/**
 * @helix:story USER-303000
 *
 * Features — core capability grid. Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Feature {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

const FEATURES: ReadonlyArray<Feature> = [
  {
    title: "Atomic units",
    description:
      "Helix plans the work into small, scoped units — each with clear acceptance criteria.",
    icon: "M4 6h16M4 12h10M4 18h7",
  },
  {
    title: "Verified each step",
    description:
      "Every unit is type-checked, tested, and linted before it can merge.",
    icon: "M5 12l4 4L19 6",
  },
  {
    title: "Main stays green",
    description:
      "Failures pause the loop. No more 2,000-line AI PRs landing on main.",
    icon: "M12 2v20M5 9l7-7 7 7",
  },
  {
    title: "Any stack",
    description:
      "Works with any repo that has a working type-check, test, and lint pipeline.",
    icon: "M4 4h16v16H4z",
  },
  {
    title: "Bring your own model",
    description:
      "Helix orchestrates the loop. You pick the model and the compute.",
    icon: "M12 4v16M4 12h16",
  },
  {
    title: "Open source",
    description:
      "Self-host anywhere you can run Node.js. Audit, extend, contribute.",
    icon: "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z",
  },
];

export interface FeaturesProps {
  className?: string;
}

export function Features({ className }: FeaturesProps): React.ReactElement {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className={"section-pad " + (className ?? "")}
    >
      <Container>
        <SectionHeading
          eyebrow="Features"
          heading="Everything you need to ship AI code."
          description="Helix orchestrates the loop so you can focus on the change that matters."
        />
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <div
                aria-hidden="true"
                className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={feature.icon}
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-ink-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;