// helix: components/sections/features/Features.tsx
/**
 * @helix:story USER-507000
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
import { SectionHeading } from "@/components/ui/SectionHeading";

import { FeatureCard } from "./FeatureCard";
import type { FeaturesIconName } from "./FeatureIcon";

import featuresData from "@/content/features.json";

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
        "relative isolate overflow-hidden py-20 sm:py-28 " + (className ?? "")
      }
    >
      {/* Subtle radial highlight + dotted grid backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="features-heading"
        />

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.items.map((item) => (
            <li key={item.title} className="h-full">
              <FeatureCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;