import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features to streamline your workflow
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI Orchestration
            </h3>
            <p className="text-gray-600">
              Seamlessly coordinate multiple AI agents to tackle complex tasks
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Intelligent Automation
            </h3>
            <p className="text-gray-600">
              Automate repetitive tasks with smart, adaptive workflows
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Real-time Collaboration
            </h3>
            <p className="text-gray-600">
              Work together with AI and team members in real-time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
