// helix: app/page.tsx
/**
 * @helix:story USER-171000
 *
 * Landing page assembly for the Helix AI orchestrator marketing
 * site. Composes every section in render order so the full page is
 * auditable from one file.
 *
 * Render order:
 *   1. Hero           — above-the-fold value prop
 *   2. StatsBar       — quick metric strip
 *   3. Features       — seven core capabilities
 *   4. HowItWorks     — 3-step orchestration flow
 *   5. Personas       — role-targeted value props
 *   6. SocialProof    — testimonial grid (USER-171000)
 *   7. FAQ            — common objections, answered (USER-171000)
 *   8. FinalCTA       — last-mile conversion band (USER-171000)
 *
 * Navbar and Footer are owned by `app/layout.tsx` so they wrap every
 * route consistently. All sections are server components, with their
 * interactive bits (mobile menu, persona tabs) isolated as small
 * `"use client"` islands. Composition here is intentionally explicit
 * so it is trivial to audit the full page by reading one file.
 */
import * as React from "react";

import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Personas } from "@/components/sections/Personas";
import { SocialProof } from "@/components/sections/SocialProof";
import { StatsBar } from "@/components/sections/StatsBar";

export default function Page(): React.ReactElement {
  return (
    <main id="main" className="relative">
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Personas />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </main>
  );
}