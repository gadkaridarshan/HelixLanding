export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Helix: AI Orchestrator for Complex Workflows
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Helix intelligently coordinates specialized AI agents to tackle intricate, multi-step tasks that require reasoning,
            tool use, and iterative refinement—delivering precise, actionable results you can trust.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center">
            <a
              href="#"
              className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Try Helix Free
            </a>
            <a
              href="#"
              className="flex-1 px-5 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900 font-medium"
            >
              Watch Demo
            </a>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-16 left-0 w-full h-40 bg-gradient-to-t from-blue-50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}