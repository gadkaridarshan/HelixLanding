import './globals.css';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import WorkflowSection from '../components/WorkflowSection';
import CTASection from '../components/CTASection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <CTASection />
      <Footer />
    </>
  );
}