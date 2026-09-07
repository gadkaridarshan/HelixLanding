// helix: components/landing/Sections.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-986000
 *
 * Section composition root — owns the full narrative order of the
 * Helix landing page. The narrative arc:
 *
 *   Hero            → above-the-fold hook + dual CTA
 *   StatsBar        → quick metric reinforcement
 *   Features        → core capability grid
 *   HowItWorks      → 4-step walkthrough
 *   Personas        → who Helix is for (developer, founder, platform)
 *   FAQ             → last-mile objections
 *   FinalCTA        → closing conversion moment
 *
 * The order is the source of truth — `app/page.tsx` simply renders
 * Navbar + Sections + Footer inside the layout chrome. Section cards
 * iterate on individual sections without touching this composition file.
 *
 * Imports resolve through the canonical alias surface
 * (`@/components/sections/...`) so the same module compiles whether
 * imported from `app/` or root-level trees.
 */

import type { ReactElement } from "react";

import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function Sections(): ReactElement {
  return (
    <>
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Personas />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Sections;