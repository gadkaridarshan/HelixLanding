import React from 'react';

const Workflow: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="h2-custom">How Helix Works</h2>
          <p className="p-custom">
            From intent to insight, Helix orchestrates AI agents to deliver precise,
            actionable results through a streamlined workflow.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Intent Understanding</h3>
            <p className="text-gray-600">
              We analyze your goals and constraints to determine the optimal AI
              agent composition for your task.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Agent Orchestration</h3>
            <p className="text-gray-600">
              Specialized agents collaborate in parallel, sharing context and
              intermediate results to solve complex problems efficiently.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution & Synthesis</h3>
            <p className="text-gray-600">
              Agents execute tasks and synthesize results into a coherent,
              actionable response tailored to your original intent.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24">
              </svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery & Feedback</h3>
            <p className="text-gray-600">
              Results are presented clearly with options to refine, iterate, or
              dive deeper into any aspect of the solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;