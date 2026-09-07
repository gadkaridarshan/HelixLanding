// helix: components/landing/Sections.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-397000
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
 *   UseCases        → concrete scenarios + quotes
 *   MetricsBand     → quantifiable outcomes band
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
import { MetricsBand } from "@/components/sections/MetricsBand";
import { Personas } from "@/components/sections/personas/Personas";
import { SocialProof } from "@/components/sections/SocialProof";
import { StatsBar } from "@/components/sections/StatsBar";
import { UseCases } from "@/components/sections/UseCases";

export function Sections(): ReactElement {
  return (
    <main id="main" className="relative isolate">
      <Hero />
      <SocialProof />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Personas />
      <UseCases />
      <MetricsBand />
      <FAQ />
      <FinalCTA />
      <CTASection />
    </main>
  );
}

export default Sections;