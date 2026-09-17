// @helix:story [USER-277000]
import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="h2-custom">Key Features</h2>
          <p className="p-custom">
            Powerful AI orchestration capabilities designed to streamline your
            workflow and boost productivity.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg
                className="w-full h-full text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI-Powered Orchestration
            </h3>
            <p className="text-gray-600 text-center">
              Intelligently coordinate multiple AI agents to tackle complex
              workflows with precision and efficiency.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg
                className="w-full h-full text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Seamless Integration
            </h3>
            <p className="text-gray-600 text-center">
              Connect with your existing tools and platforms through robust
              APIs and pre-built connectors.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg
                className="w-full h-full text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                <polyline points="3 7 12 13 21 7" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Workflow Automation
            </h3>
            <p className="text-gray-600 text-center">
              Automate repetitive tasks and processes, freeing up your team to
              focus on high-value strategic work.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg
                className="w-full h-full text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Real-time Collaboration
            </h3>
            <p className="text-gray-600 text-center">
              Work together with your team in real-time, sharing insights and
              making decisions faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;