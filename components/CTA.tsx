import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl mb-8">
          Get started with Helix AI Orchestrator today and experience the
          future of work automation.
        </p>
        <a
          href="#"
          className="rounded-md bg-white px-6 py-3 text-sm font-medium text-indigo-600 hover:bg-gray-50"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
};

export default CTA;