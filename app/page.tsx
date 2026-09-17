import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WorkflowSection from '../components/WorkflowSection';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WorkflowSection />
      <CTA />
      <Footer />
    </>
  );
}