// helix: components/sections/features/Features.tsx
/**
 * @helix:story USER-303000
 *
 * Features — core capability grid. Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { FeatureCard } from "./FeatureCard";
import type { FeaturesIconName } from "./FeatureIcon";

interface Feature {
  readonly title: string;
  readonly description: string;
  readonly icon: FeaturesIconName;
}

const FEATURES: ReadonlyArray<Feature> = [
  {
    title: "Atomic units",
    description:
      "Helix plans the work into small, scoped units — each with clear acceptance criteria.",
    icon: "units",
  },
  {
    title: "Verified each step",
    description:
      "Every unit is type-checked, tested, and linted before it can merge.",
    icon: "verified",
  },
  {
    title: "Main stays green",
    description:
      "Failures pause the loop. No more 2,000-line AI PRs landing on main.",
    icon: "shield",
  },
  {
    title: "Any stack",
    description:
      "Works with any repo that has a working type-check, test, and lint pipeline.",
    icon: "stack",
  },
  {
    title: "Bring your own model",
    description:
      "Helix is model-agnostic. Use Claude, GPT, Gemini, or your own inference endpoint.",
    icon: "model",
  },
  {
    title: "Observable runs",
    description:
      "Every unit is traceable end-to-end — see what shipped, why, and what's next.",
    icon: "trace",
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
          eyebrow="Capabilities"
          heading="Everything you need to ship verified AI code."
          description="From planning to verification, Helix owns the loop so your team can focus on the change that matters."
        />
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <li key={feature.title}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;