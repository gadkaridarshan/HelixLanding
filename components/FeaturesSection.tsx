import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="h2-custom">Powerful Features</h2>
          <p className="p-custom">
            Helix combines cutting-edge AI capabilities with intelligent orchestration
            to deliver unmatched performance and flexibility.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Orchestration</h3>
                <p className="text-gray-600">
                  Seamlessly coordinates multiple AI agents to work together on complex
                  tasks, ensuring optimal results through intelligent task distribution.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Processing</h3>
                <p className="text-gray-600">
                  Experience lightning-fast responses with our optimized inference
                  pipeline designed for production workloads.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Built with enterprise-grade security protocols including SOC 2
                  compliance, encryption, and granular access controls.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom hover:shadow-2xl transition-all hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Integrations</h3>
                <p className="text-gray-600">
                  Connect with your existing tools and workflows through our extensive
                  library of pre-built integrations and customizable APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;