// helix: components/landing/Sections.tsx
/**
 * @helix:story USER-349000
 *
 * Section composition root — owns the full narrative order of the
 * Helix landing page. The narrative arc:
 *
 *   Hero            → above-the-fold hook + dual CTA
 *   SocialProof     → trust strip (logos / metrics)
 *   Features        → core capability grid
 *   HowItWorks      → 4-step walkthrough
 *   Personas        → who Helix is for (developer, founder, etc.)
 *   StatsBar        → numeric reinforcement
 *   FAQ             → last-mile objections
 *   FinalCTA        → closing conversion moment
 *
 * The order is the source of truth — `app/page.tsx` only renders
 * this component. Reordering the narrative happens here.
 */

import type { ReactElement } from "react";

import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { StatsBar } from "@/components/sections/StatsBar";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function Sections(): ReactElement {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Personas />
      <StatsBar />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Sections;