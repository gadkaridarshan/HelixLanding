// helix: components/sections/features/Features.tsx
/**
 * @helix:story USER-167000
 *
 * Features — the canonical Helix capability grid.
 *
 * Renders at least four capability cards sourced from
 * `@/content/features.json`. The four required capabilities for this
 * surface are:
 *   1. Atomic cards        — every change is small, focused, reviewable
 *   2. Parallel orchestration — dependency-gated, parallel-by-default
 *   3. Quality bar          — types, tests, lint before promotion
 *   4. Vercel deployable    — ships ready for `vercel deploy`
 *
 * Pure server component. Uses the shared `FeatureCard` primitive.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import featuresData from "@/content/features.json";

import { FeatureCard } from "./FeatureCard";
import type { FeaturesIconName } from "./FeatureIcon";

export interface FeaturesProps {
  className?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: FeaturesIconName;
}

interface FeaturesContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ReadonlyArray<FeatureItem>;
}

const content: FeaturesContent = featuresData as FeaturesContent;

export function Features({ className }: FeaturesProps): React.ReactElement {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className={
        "relative isolate scroll-mt-24 py-20 sm:py-28 " + (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div
          className="absolute -left-40 top-1/4 h-[420px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl"
        />
        <div
          className="absolute -right-40 bottom-0 h-[420px] w-[520px] rounded-full bg-violet-500/10 blur-3xl"
        />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="features-heading"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;