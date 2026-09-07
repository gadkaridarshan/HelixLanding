// helix: app/page.tsx
/**
 * @helix:story USER-604000
 *
 * Root page assembly — composes every marketing section in the
 * canonical order:
 *
 *   Navbar → Hero → StatsBar → Features → HowItWorks →
 *   Personas → FAQ → FinalCTA → Footer
 *
 * Every section is sourced from its canonical location and reaches
 * this entry via the stable re-export shims so both
 * `@/components/sections/*` and `@/app/components/sections/*` resolve
 * to the same implementation.
 *
 * Pure server component — the page renders entirely on the server
 * and ships zero client JS for the shell itself. Tiny client islands
 * (mobile nav, FAQ disclosure, personas tabs) are owned by their
 * respective sections.
 */
import * as React from "react";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <Personas />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}