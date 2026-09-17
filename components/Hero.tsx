import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full bg-gradient-to-br from-indigo-50 to-gray-50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Orchestration, Simplified
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helix intelligently coordinates specialized AI agents to tackle complex workflows, delivering precise, actionable results faster than traditional approaches.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="flex-1 sm:flex-1 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
              Get Started Free
            </a>
            <a href="/features" className="flex-1 sm:flex-1 px-8 py-4 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
              Learn More
            </a>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Intent Understanding
            </h3>
            <p className="text-sm text-gray-500">
              Natural language processing to clarify goals and break down complex objectives.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Agent Coordination
            </h3>
            <p className="text-sm text-gray-500">
              Specialized AI agents collaborate through structured workflows to handle multi-step tasks.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 22 8 18 16 6 16 2 8"></polygon>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="12" y1="22" x2="12" y2="2"></line>
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Result Synthesis
            </h3>
            <p className="text-sm text-gray-500">
              AI-driven insights are synthesized into clear, actionable recommendations with confidence scoring.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8v4l3 3"></path>
                <path d="M16 12H4"></path>
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Continuous Learning
            </h3>
            <p className="text-sm text-gray-500">
              System improves over time through feedback loops and outcome-based optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;