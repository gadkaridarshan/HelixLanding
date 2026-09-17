// @helix:story [USER-462000]
import React from 'react';

const WorkflowSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Helix Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From intent to insight, Helix orchestrates AI agents to deliver precise, actionable results through a streamlined workflow.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24">
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Understand Intent</h3>
            <p className="text-gray-500">
              We analyze your request to determine the optimal approach and required expertise.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Plan with Kanban for AI Agents</h3>
            <p className="text-gray-500">
              We structure tasks on a Kanban board, assigning each to specialized AI agents for clear, visual workflow management.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-red-600" viewBox="0 0 24 24">
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Execute with Precision</h3>
            <p className="text-gray-500">
              AI agents process their assigned tasks, leveraging domain-specific knowledge to deliver high-quality outputs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-purple-600" viewBox="0 0 24 24">
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Review and Refine</h3>
            <p className="text-gray-500">
              We review the results, refine as needed, and deliver the final outcome aligned with your initial intent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;