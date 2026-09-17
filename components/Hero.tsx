// @helix:story [USER-88000]
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-primary text-white min-h-[600px] flex items-center">
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold">
            Helix AI Orchestrator
          </h1>
          <p className="mb-6 text-xl opacity-90">
            Professional AI workflow automation platform that transforms how teams
            build, deploy, and manage AI-powered applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#features"
              className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              View on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full"></div>
      </div>
    </section>
  );
}