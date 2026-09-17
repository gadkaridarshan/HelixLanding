import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Workflow from '@/components/Workflow';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Shell from '@/components/Shell';

export default function HomePage() {
  return (
    <Shell>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <CTA />
      </main>
      <Footer />
    </Shell>
  );
}