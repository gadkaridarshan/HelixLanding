// @helix:story [USER-277000]
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}