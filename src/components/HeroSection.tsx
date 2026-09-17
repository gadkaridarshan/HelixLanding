import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-indigo-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <svg className="absolute -top-10 left-0 -z-10 h-20 w-20 text-indigo-100 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>
          <svg className="absolute bottom-0 right-0 -z-10 h-20 w-20 text-indigo-100 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Orchestration Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helix intelligently coordinates specialized AI agents to tackle complex workflows, delivering precise, actionable results without the manual overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/get-started" className="flex-1 sm:flex-1 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
              Get Started Free
            </Link>
            <Link href="/features" className="flex-1 sm:flex-1 px-8 py-4 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;