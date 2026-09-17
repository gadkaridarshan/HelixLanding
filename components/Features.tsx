import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Helix Delivers Value
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Purpose-built AI orchestration that transforms complex workflows into streamlined, intelligent processes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Intelligent Task Decomposition
            </h3>
            <p className="text-sm text-gray-500">
              Breaks down complex objectives into manageable subtasks assigned to specialized AI agents.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Parallel Agent Execution
            </h3>
            <p className="text-sm text-gray-500">
              Multiple AI agents work concurrently on different aspects of a task for faster completion.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M20 12H9"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Contextual Understanding
            </h3>
            <p className="text-sm text-gray-500">
              Maintains context across steps to ensure coherent, relevant outputs throughout the workflow.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3l18 18"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Adaptive Learning
            </h3>
            <p className="text-sm text-gray-500">
              Improves performance over time by learning from outcomes and user feedback.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8V14M8 12h8"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Error Handling & Recovery
            </h3>
            <p className="text-sm text-gray-500">
              Detects issues early and implements correction strategies without restarting entire workflows.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 17H6a3 3 0 01-3-3V9a3 3 0 013-3h3"></path>
                <path d="M12 17v-6"></path>
                <path d="M15 17h3a3 3 0 003-3V9a3 3 0 00-3-3h-3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Security & Compliance
            </h3>
            <p className="text-sm text-gray-500">
              Enterprise-grade security with audit trails, data encryption, and compliance controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;