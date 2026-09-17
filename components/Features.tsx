// @helix:story [USER-88000]
export default function Features() {
  return (
    <section className="bg-light section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-dark">Key Features</h2>
          <p className="max-w-2xl mx-auto text-secondary">
            Helix provides a comprehensive suite of tools designed to streamline
            your AI workflow from development to production.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-shadow">
            <div className="mb-4 w-12 h-12 bg-primary/10 rounded-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m2 0a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark">Visual Workflow Builder</h3>
            <p className="text-secondary">
              Drag-and-drop interface to design complex AI pipelines without writing code.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-shadow">
            <div className="mb-4 w-12 h-12 bg-primary/10 rounded-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark">Pre-built Components</h3>
            <p className="text-secondary">
              Library of ready-to-use AI components for common tasks like NLP, vision, and data processing.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-shadow">
            <div className="mb-4 w-12 h-12 bg-primary/10 rounded-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark">Scalable Deployment</h3>
            <p className="text-secondary">
              Deploy your workflows to any environment with built-in scaling and monitoring.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-shadow">
            <div className="mb-4 w-12 h-12 bg-primary/10 rounded-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark">Team Collaboration</h3>
            <p className="text-secondary">
              Share workflows, manage permissions, and collaborate in real-time with your team.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-shadow">
            <div className="mb-4 w-12 h-12 bg-primary/10 rounded-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.457 6.765a4 4 0 11-5.15 4.875M6.365 12.25a5.016 5.016 0 006.87 3.526"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark">Analytics & Monitoring</h3>
            <p className="text-secondary">
              Track performance, usage, and costs with detailed analytics dashboards.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-shadow">
            <div className="mb-4 w-12 h-12 bg-primary/10 rounded-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.5 6.5l1 1M15.5 13.5l1 1M12 6v.01"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark">API & Integrations</h3>
            <p className="text-secondary">
              Extend functionality with REST APIs, webhooks, and third-party integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}