// helix: app/page.tsx
/**
 * @helix:story USER-217000
 *
 * Helix landing page — assembled, single-route marketing page.
 *
 * Renders the full landing experience in a deliberate narrative order:
 *   Navbar → Hero → Features → HowItWorks → StatsBar →
 *   Personas → FAQ → FinalCTA → Footer
 *
 * Every section is a server component (or a thin "use client" island where
 * interactivity is required), imported from `components/layout` and
 * `components/sections` so the page file itself stays a clean composition
 * surface with no inline business logic.
 *
 * This is the entry route for the Vercel deployment.
 */

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { Features } from "@/app/components/sections/Features";
import { HowItWorks } from "@/app/components/sections/HowItWorks";
import { StatsBar } from "@/app/components/sections/StatsBar";
import { Personas } from "@/app/components/sections/Personas";
import { FAQ } from "@/app/components/sections/FAQ";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export default function Page(): React.ReactElement {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <StatsBar />
      <Personas />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}