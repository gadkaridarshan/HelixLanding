export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helix combines cutting-edge AI capabilities into a unified platform designed for real-world complexity.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4m0 4v4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Agent Orchestration</h3>
            <p className="text-gray-600">
              Coordinated teams of specialized agents work together, each contributing expertise to solve complex problems.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8v4l3 3"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tool Integration</h3>
            <p className="text-gray-600">
              Agents securely access external tools—databases, APIs, file systems—to perform actions and gather information.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 17h6m-6-5h6"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Iterative Reasoning</h3>
            <p className="text-gray-600">
              Helix reflects on intermediate results, adjusts strategies, and refines approaches until goals are met.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Structured Outputs</h3>
            <p className="text-gray-600">
              Results are organized into clear, actionable formats—reports, plans, code, or data—ready for immediate use.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h.01M12 12h.01M16 12h.01M12 16h.01M12 8v.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Collaboration</h3>
            <p className="text-gray-600">
              Work alongside AI agents in shared workspaces, providing guidance and feedback as they operate.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3l18 18"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
            <p className="text-gray-600">
              Role-based access, audit trails, and data encryption ensure your workflows remain secure and compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}