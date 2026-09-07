// helix: app/page.tsx
/**
 * @helix:story USER-303000
 *
 * Landing page — assembles every section of the marketing surface
 * (Navbar, Hero, StatsBar, Features, HowItWorks, Personas, FAQ,
 * FinalCTA, Footer).
 *
 * This is the **live** landing page for this product. The URL
 * `helix-ai-orchestrator.vercel.app` referenced inside the Footer
 * is a separate, externally-hosted deployment used only as a visual
 * reference — see `lib/brand.ts` for the URL policy.
 */
import * as React from "react";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Page(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <Personas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}