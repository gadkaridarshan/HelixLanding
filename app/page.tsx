// helix: app/page.tsx
/**
 * @helix:story USER-63000
 *
 * Page assembly — root composition for the Helix landing page.
 *
 *   Navbar → Hero → StatsBar → Features → HowItWorks
 *     → Personas → SocialProof → FAQ → FinalCTA → Footer
 */
import * as React from "react";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/Personas";
import { SocialProof } from "@/components/SocialProof";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

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
        <SocialProof />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}