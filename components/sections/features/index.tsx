// helix: components/sections/features/index.tsx
/**
 * @helix:story USER-507000
 *
 * Features — canonical seven-card capability grid for Helix.
 *
 * Renders an eyebrow + heading + description via the shared
 * `SectionHeading` primitive, then a responsive grid of
 * `FeatureCard`s sourced from `@/content/features.json`.
 *
 * Pure server component. Copy is JSON-driven so marketing copy can
 * evolve without touching the component tree.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/feature-card";

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
        "relative isolate overflow-hidden py-20 sm:py-28 " + (className ?? "")
      }
    >
      {/* Background: subtle aurora glow + grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="features-heading"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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