// helix: components/Features.tsx
/**
 * @helix:story USER-616000
 *
 * Features — the seven core Helix capabilities surfaced as a card grid:
 * atomic decomposition, dependency-aware execution, repo-aware
 * verification, reviewable PR output, persona-targeted workflows,
 * multi-stack support, and quality-bar enforcement.
 *
 * Pure server component. Copy is sourced from
 * `@/content/features.json` so marketing copy can evolve without
 * touching the component tree. Each card uses the shared
 * `FeatureCard` primitive for visual consistency.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

import featuresData from "@/content/features.json";

export interface FeaturesProps {
  className?: string;
}

export type FeaturesIconName =
  | "atom"
  | "graph"
  | "shield"
  | "git"
  | "cards"
  | "persona"
  | "stack"
  | "review";

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
      {/* Distinct radial glow — slightly warmer than Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.08),transparent_55%)]"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={content.eyebrow}
            heading={content.heading}
            description={content.description}
            headingId="features-heading"
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;