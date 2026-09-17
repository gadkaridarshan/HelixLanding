import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helix AI orchestrator offers a suite of powerful features to streamline your workflow and boost productivity.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI-Powered Orchestration
            </h3>
            <p className="text-gray-600">
              Leverage intelligent agents that automatically coordinate complex workflows, reducing manual intervention and errors.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Connect Helix with your existing tools and platforms for a unified workflow experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
                <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Enterprise Grade Security
            </h3>
            <p className="text-gray-600">
              Your data is protected with advanced encryption and compliance with industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;