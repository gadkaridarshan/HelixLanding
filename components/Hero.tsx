import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="pt-20 pb-14 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">
            Helix AI Orchestrator
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
            Professional AI workflow automation platform that streamlines your
            business processes with intelligent orchestration.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
            <a
              href="#"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-gray-100 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;