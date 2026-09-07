// helix: components/landing/Sections.tsx
/**
 * @helix:story USER-303000
 *
 * Section composition root — owns the full narrative order of the
 * Helix landing page. The narrative arc:
 *
 *   Hero            → above-the-fold hook + dual CTA
 *   SocialProof     → credibility strip just below the fold
 *   StatsBar        → quick metric reinforcement
 *   Features        → core capability grid
 *   HowItWorks      → 3-step walkthrough
 *   Personas        → who Helix is for
 *   UseCases        → representative scenarios + quotes
 *   FAQ             → last-mile objections
 *   FinalCTA        → closing conversion moment
 *   CTASection      → final full-bleed call-to-action block
 *
 * The order is the source of truth — `app/page.tsx` simply renders
 * Navbar + Sections + Footer inside the layout chrome.
 */
import type { ReactElement } from "react";

import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { SocialProof } from "@/components/sections/SocialProof";
import { StatsBar } from "@/components/sections/StatsBar";
import { UseCases } from "@/components/UseCases";

export function Sections(): ReactElement {
  return (
    <>
      <Hero />
      <SocialProof />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Personas />
      <UseCases />
      <FAQ />
      <FinalCTA />
      <CTASection />
    </>
  );
}

export default Sections;