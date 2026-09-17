import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helix combines cutting-edge AI capabilities to handle any task with precision and speed.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-flex items-center justify-center">
                <span className="text-indigo-600 text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI Agent Orchestration
              </h3>
              <p className="text-gray-600 text-center">
                Coordinated AI agents working together to solve complex problems.
              </p>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-flex items-center justify-center">
                <span className="text-indigo-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time Processing
              </h3>
              <p className="text-gray-600 text-center">
                Get instant results as our AI agents work in parallel.
              </p>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-flex items-center justify-center">
                <span className="text-indigo-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Precision Outcomes
              </h3>
              <p className="text-gray-600 text-center">
                Actionable results tailored to your specific intent.
              </p>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-flex items-center justify-center">
                <span className="text-indigo-600 text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customizable Workflows
              </h3>
              <p className="text-gray-600 text-center">
                Adapt the AI orchestration to your unique processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;