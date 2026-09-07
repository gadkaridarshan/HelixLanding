// helix: components/landing/Sections.tsx
/**
 * @helix:story USER-986000
 *
 * Section composition root — owns the full narrative order of the
 * Helix landing page. The narrative arc:
 *
 *   Hero            → above-the-fold hook + dual CTA
 *   SocialProof     → trust strip (logos / metrics)
 *   HowItWorks      → 4-step walkthrough
 *   Features        → core capability grid
 *   Personas        → who Helix is for (developer, founder, etc.)
 *   StatsBar        → numeric reinforcement
 *   FAQ             → last-mile objections
 *   FinalCTA        → closing conversion moment
 *
 * The order is the source of truth — `app/page.tsx` simply renders
 * this component inside the layout chrome. Section cards iterate on
 * individual sections without touching this composition file.
 *
 * Imports resolve through the canonical alias surface
 * (`@/components/sections/...`) so the same module compiles whether
 * imported from `app/` or root-level trees.
 */

import type { ReactElement } from "react";

import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Personas } from "@/components/sections/Personas";
import { StatsBar } from "@/components/sections/StatsBar";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function Sections(): ReactElement {
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Personas />
      <StatsBar />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Sections;