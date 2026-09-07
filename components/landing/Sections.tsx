// helix: components/landing/Sections.tsx
/**
 * @helix:story USER-986000
 *
 * Section composition root — renders every landing section in the
 * canonical narrative order. This is the shared shell that the home
 * page (`app/page.tsx`) composes against so individual section work can
 * land independently without the page file churning on every change.
 *
 * Order: Hero → HowItWorks → Features → Personas → SocialProof →
 *        FAQ → CTA → Footer
 *
 * Each section component is imported from its canonical location. While
 * a section is being scaffolded it renders a placeholder anchor with the
 * intended `id` so navigation links resolve and the visual rhythm of the
 * page is preserved end-to-end.
 */

import type { ReactElement } from "react";

import { Hero } from "@/app/components/sections/Hero";
import { HowItWorks } from "@/app/components/sections/HowItWorks";
import { Features } from "@/app/components/sections/Features";
import { Personas } from "@/app/components/sections/Personas";
import { FAQ } from "@/app/components/sections/FAQ";
import { FinalCTA } from "@/app/components/sections/FinalCTA";
import { StatsBar } from "@/app/components/sections/StatsBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export interface SectionsProps {
  /**
   * When true, omit the Navbar/Footer chrome. Useful for previews and
   * embed routes where the surrounding chrome is provided by the host.
   */
  bare?: boolean;
}

/**
 * Sections — composition root for the Helix landing surface.
 *
 * Renders the full narrative sequence end-to-end. Individual sections
 * own their own typography, animation, and interactivity; this component
 * stays intentionally thin so it can be reused for previews and exports.
 */
export function Sections({ bare = false }: SectionsProps): ReactElement {
  return (
    <>
      {!bare && <Navbar />}
      <main className="relative">
        <Hero />
        <HowItWorks />
        <Features />
        <Personas />
        <StatsBar />
        <FAQ />
        <FinalCTA />
      </main>
      {!bare && <Footer />}
    </>
  );
}

export default Sections;