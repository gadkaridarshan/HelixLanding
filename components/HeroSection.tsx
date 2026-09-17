import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Orchestration that Turns Complexity into Clarity
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Helix intelligently coordinates specialized AI agents to break down complex tasks into clear, actionable steps — so you get precise results faster, every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/get-started" className="flex-1 sm:flex-1 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
            Get Started Free
          </a>
          <a href="#features" className="flex-1 sm:flex-1 px-8 py-4 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;