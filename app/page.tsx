// helix: app/page.tsx
/**
 * @helix:story USER-34000
 *
 * Home page — composes every marketing section in narrative order so
 * a visitor evaluates the full Helix AI orchestrator story end-to-end
 * before the final CTA.
 *
 * Render order (top-to-bottom):
 *   1. Navbar        — sticky brand chrome + early-access CTA
 *   2. Hero          — above-the-fold value prop + atom/orbit visual
 *   3. StatsBar      — credibility numbers
 *   4. Features      — seven-card capability grid
 *   5. HowItWorks    — 3-step orchestration flow
 *   6. Personas      — role-targeted value props (tab switcher island)
 *   7. FAQ           — objections / clarifications
 *   8. FinalCTA      — closing conversion block
 *   9. Footer        — site map + legal + social
 *
 * Each section owns its own copy via `content/*.json` so marketing
 * can iterate without touching this file. This page is a pure server
 * component — the only client islands live inside Personas
 * (keyboard-navigable role switcher) and any explicitly-marked
 * interactive sections downstream.
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
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}