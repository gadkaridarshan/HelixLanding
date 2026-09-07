// helix: app/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { Features } from "@/app/components/sections/Features";
import { HowItWorks } from "@/app/components/sections/HowItWorks";
import { StatsBar } from "@/app/components/sections/StatsBar";
import { Personas } from "@/app/components/sections/Personas";
import { FAQ } from "@/app/components/sections/FAQ";
import { FinalCTA } from "@/app/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <StatsBar />
        <Personas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}