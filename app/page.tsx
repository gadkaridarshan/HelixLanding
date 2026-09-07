// helix: app/page.tsx
/**
 * @helix:story USER-303000
 *
 * Landing page composition — single ordered tree of all section
 * components. Sections themselves own their internal layout, styling,
 * and copy.
 *
 * Section order is deliberate:
 *   1. Navbar (sticky brand chrome)
 *   2. Hero (above-the-fold value prop + CTAs + decorative visual)
 *   3. StatsBar (quick metric strip)
 *   4. Features (six core capabilities)
 *   5. HowItWorks (three-step execution loop)
 *   6. Personas (who Helix is for + social proof)
 *   7. FAQ (objection handling)
 *   8. FinalCTA (last conversion push)
 *   9. Footer (reference-site pointer + link columns + brand mark)
 */
import * as React from "react";

import { Navbar } from "@/components/landing/Navbar/Navbar";
import { Hero } from "@/components/landing/hero/Hero";
import { StatsBar } from "@/components/landing/stats-bar/StatsBar";
import { Features } from "@/components/landing/features/Features";
import { HowItWorks } from "@/components/landing/how-it-works/HowItWorks";
import { Personas } from "@/components/landing/personas/Personas";
import { FAQ } from "@/components/landing/faq/FAQ";
import { FinalCTA } from "@/components/landing/final-cta/FinalCTA";
import { Footer } from "@/components/landing/footer/Footer";

export default function Page(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main>
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