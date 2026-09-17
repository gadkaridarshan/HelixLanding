import '../../styles/globals.css';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WorkflowSection from '@/components/WorkflowSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <CTASection />
    </>
  );
}