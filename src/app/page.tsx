// @helix:story [USER-454000]
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { WorkflowSection } from '@/components/WorkflowSection';
import { CTASection } from '@/components/CTASection';
import { FooterSection } from '@/components/FooterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}