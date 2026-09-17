import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Helix?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helix combines cutting-edge AI with intuitive workflow management to deliver unparalleled productivity and insight.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Agent Orchestration</h3>
            <p className="text-gray-500">
              Seamlessly coordinate multiple AI agents to tackle complex tasks, ensuring each agent contributes its expertise for optimal results.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-green-600" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Kanban for AI Agents</h3>
            <p className="text-gray-500">
              Visualize and manage your AI workflows with Kanban boards tailored for AI agents, ensuring transparency and efficient task progression from start to finish.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24">
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Intent-Driven Execution</h3>
            <p className="text-gray-500">
              Translate your goals into actionable plans, with AI agents interpreting intent to deliver precise, relevant outcomes every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;