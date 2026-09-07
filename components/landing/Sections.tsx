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
 *   HowItWorks      → 4-step walkthrough
 *   Personas        → who Helix is for
 *   FAQ             → last-mile objections
 *   FinalCTA        → closing conversion moment
 *
 * The order is the source of truth — `app/page.tsx` simply renders
 * Navbar + Sections + Footer inside the layout chrome.
 */
import type { ReactElement } from "react";

import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/faq/FAQ";
import { Features } from "@/components/sections/features";
import { FinalCTA } from "@/components/sections/finalcta/FinalCTA";
import { Hero } from "@/components/sections/hero";
import { HomePage } from "@/components/sections/homePage";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Personas } from "@/components/sections/personas/Personas";
import { SocialProof } from "@/components/sections/SocialProof";

export function Sections(): ReactElement {
  return (
    <>
      <Hero />
      <SocialProof />
      <HomePage />
      <Features />
      <HowItWorks />
      <Personas />
      <FAQ />
      <FinalCTA />
      <CTASection />
    </>
  );
}

export default Sections;