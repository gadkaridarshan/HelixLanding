import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Experience the power of AI orchestration designed for your specific needs. Start with a free trial or schedule a demo to see Helix in action.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <a href="#" className="flex-1 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Start Free Trial
          </a>
          <a href="#" className="flex-1 bg-white/20 hover:bg-white/30 border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors">
            Schedule Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;