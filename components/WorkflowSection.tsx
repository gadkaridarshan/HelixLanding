// @helix:story [USER-462000]
import React from "react";

const WorkflowSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="h2-custom">How Helix Works</h2>
          <p className="p-custom">
            From intent to insight, Helix orchestrates AI agents to deliver
            precise, actionable results through a streamlined workflow.
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
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Intent Understanding
            </h3>
            <p className="text-gray-600 text-center">
              Helix begins by analyzing your intent and breaking down complex
              objectives into manageable tasks.
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
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Agent Orchestration
            </h3>
            <p className="text-gray-600 text-center">
              Specialized AI agents collaborate to execute each task,
              leveraging their unique expertise for optimal results.
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
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Insight Generation
            </h3>
            <p className="text-gray-600 text-center">
              The synthesized results are transformed into clear, actionable
              insights tailored to your specific needs.
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
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Continuous Optimization
            </h3>
            <p className="text-gray-600 text-center">
              Helix learns from each interaction, refining its approach to
              deliver increasingly better outcomes over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;