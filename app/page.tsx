import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WorkflowSection from '../components/WorkflowSection';
import CTA from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
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