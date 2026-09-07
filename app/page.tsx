// helix: app/page.tsx
/**
 * @helix:story USER-23000
 *
 * Landing page assembly for the Helix AI orchestrator marketing
 * site. Composes every section in render order so the full page is
 * auditable from one file.
 *
 * Render order:
 *   1. Navbar        — sticky brand + section anchors + CTA
 *   2. Hero          — above-the-fold value prop
 *   3. StatsBar      — quick metric strip
 *   4. Features      — seven core capabilities
 *   5. HowItWorks    — 3-step orchestration flow
 *   6. Personas      — role-targeted value props
 *   7. FAQ           — common objections, answered
 *   8. FinalCTA      — last-mile conversion band
 *   9. Footer        — site-wide links + wordmark
 *
 * All sections are server components, with their interactive bits
 * (mobile menu, persona tabs) isolated as small `"use client"`
 * islands. Composition here is intentionally explicit so it is
 * trivial to audit the full page by reading one file.
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