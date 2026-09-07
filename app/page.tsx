// helix: app/page.tsx
/**
 * @helix:story USER-604000
 *
 * Page assembly — root composition for the Helix landing page.
 *
 * This file is the single source of truth for the section order of the
 * marketing surface. Every section is a self-contained server component,
 * composed in a deliberate narrative flow:
 *
 *   Navbar → Hero → StatsBar → Features → HowItWorks
 *     → Personas → FAQ → FinalCTA → Footer
 *
 * Notes:
 * - Pure server component — no client interactivity at the page level.
 * - Sections are imported from `@/components/sections/*` (the canonical
 *   implementation) and exposed under `@/app/components/sections/*` via
 *   thin re-export shims for tooling that expects the `app/`-prefixed
 *   paths.
 * - Backgrounds, typography, and theme tokens are defined globally in
 *   `app/layout.tsx` + `app/globals.css` and consumed via Tailwind
 *   utilities throughout the section tree.
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
    <div className="relative min-h-screen bg-ink text-ink-foreground antialiased">
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
    </div>
  );
}