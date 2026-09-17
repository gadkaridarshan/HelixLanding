import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Intelligent Workflow Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automate complex business processes with AI-driven decision making
              and adaptive workflows that learn from your data.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Real-time Analytics & Monitoring
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gain instant insights into your operations with customizable
              dashboards and predictive analytics.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Seamless Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with your existing tools and systems through pre-built
              connectors and flexible APIs.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Scalable & Secure
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enterprise-grade security with role-based access control and
              compliance standards, built to scale with your business.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Customizable AI Models
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Train and deploy custom AI models tailored to your specific
              industry needs and use cases.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Collaborative Workspace
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Team collaboration features with version control, commenting, and
              approval workflows to streamline cross-functional projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;