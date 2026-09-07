// helix: app/page.tsx
/**
 * @helix:story USER-303000
 *
 * Helix landing page — the canonical marketing page for the product.
 *
 * Sections:
 *   1. Navbar          — sticky top nav
 *   2. Hero            — headline, subhead, primary/secondary CTAs, HeroVisual
 *   3. StatsBar        — quick social proof metrics
 *   4. Features        — product capability grid
 *   5. HowItWorks      — 3-step orchestration walkthrough
 *   6. Personas        — who Helix is for
 *   7. FinalCTA        — closing call-to-action
 *   8. FAQ             — common questions
 *   9. Footer          — site chrome
 */

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative isolate overflow-hidden">
        {/* Decorative global background — gradient + grid + glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-brand-bg"
        >
          <div className="absolute inset-0 bg-grid-overlay opacity-[0.35]" />
          <div className="absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-brand-cyan/15 via-brand-violet/10 to-transparent" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="absolute -bottom-40 right-[-10%] h-[520px] w-[680px] rounded-full bg-brand-violet/20 blur-3xl" />
        </div>

        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <Personas />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}