import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import WorkflowSection from '../components/WorkflowSection';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <CTASection />
    </>
  );
}