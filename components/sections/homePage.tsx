// helix: components/sections/homePage.tsx
import * as React from "react";

import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { SocialProof } from "@/components/sections/SocialProof";
import { StatsBar } from "@/components/sections/StatsBar";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

/**
 * @helix:story USER-303000
 *
 * HomePage — full-page composition for the Helix landing site. Renders
 * the narrative arc from hero through closing CTA, plus the navbar
 * and footer chrome.
 */
export function HomePage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <StatsBar />
        <Features />
        <HowItWorks />
        <Personas />
        <FAQ />
        <FinalCTA />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;