// @helix:story [USER-88000]
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}