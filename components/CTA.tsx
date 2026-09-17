export default function CTA() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to transform your workflow?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of teams using Helix to automate complex tasks and unlock new levels of productivity.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center">
          <a
            href="#"
            className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium block"
          >
            Get Started Free
          </a>
          <a
            href="#"
            className="flex-1 px-5 py-3 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors text-blue-600 hover:text-blue-800 font-medium block"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}