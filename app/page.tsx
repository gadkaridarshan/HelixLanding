// helix: app/page.tsx
/**
 * @helix:story USER-308000
 *
 * Page assembly — root composition for the Helix landing page.
 *
 * Single source of truth for the section order of the marketing surface:
 *
 *   Navbar → Hero → StatsBar → Features → HowItWorks
 *     → Personas → SocialProof → FAQ → FinalCTA → Footer
 *
 * Each section is a self-contained server component; the page itself
 * has no client interactivity. Section-owned paths under `components/*`
 * are the canonical implementations for this card.
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
      <main id="main">
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