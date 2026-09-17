import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] flex flex-col items-center justify-center bg-gray-50 py-20">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Helix AI Orchestrator
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          From intent to insight, Helix orchestrates AI agents to deliver precise, actionable results through a streamlined workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/get-started" className="flex-1 sm:flex-1 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
            Get Started Free
          </a>
          <a href="/features" className="flex-1 sm:flex-1 px-8 py-4 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;