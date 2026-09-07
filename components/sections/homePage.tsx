// helix: components/sections/homePage.tsx
/**
 * @helix:story USER-303000
 *
 * HomePage — the polished landing surface composed of the canonical
 * landing sections. This is the section-level entry point that
 * `components/landing/Sections.tsx` consumes.
 */
import type { ReactElement } from "react";

import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/faq/FAQ";
import { Features } from "@/components/sections/features";
import { FinalCTA } from "@/components/sections/finalcta/FinalCTA";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Personas } from "@/components/sections/personas/Personas";
import { SocialProof } from "@/components/sections/SocialProof";

export interface HomePageProps {
  className?: string;
}

export function HomePage({ className }: HomePageProps): ReactElement {
  return (
    <div className={className ?? ""}>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Personas />
      <FAQ />
      <FinalCTA />
      <CTASection />
    </div>
  );
}

export default HomePage;