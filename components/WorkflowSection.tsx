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
              ></svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Intent Understanding
            </h3>
            <p className="text-gray-600 text-center">
              Helix analyzes your goals and requirements to determine the
              optimal approach and agent combination.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg
                className="w-full h-full text-indigo-600"
                viewBox="0 0 24 24"
              ></svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Agent Orchestration
            </h3>
            <p className="text-gray-600 text-center">
              Specialized AI agents collaborate in parallel, sharing insights
              and dynamically adjusting their approach based on intermediate
              results.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg
                className="w-full h-full text-indigo-600"
                viewBox="0 0 24 24"
              ></svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Result Synthesis
            </h3>
            <p className="text-gray-600 text-center">
              Individual agent outputs are intelligently combined into a
              cohesive, actionable insight tailored to your specific needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="relative w-12 h-12 mb-4">
              <svg
                className="w-full h-full text-indigo-600"
                viewBox="0 0 24 24"
              ></svg>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Continuous Learning
            </h3>
            <p className="text-gray-600 text-center">
              Helix learns from every interaction, improving its orchestration
              capabilities and adapting to your evolving requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
