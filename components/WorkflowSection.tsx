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
              </div>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">Workflow Step</h3>
            <p className="mb-4 text-sm text-gray-500">
              Description of the workflow step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;