// @helix:story [USER-810000]
export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Workflow Automation</h3>
            <p className="text-gray-600">
              Automate complex AI workflows with ease.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Model Orchestration</h3>
            <p className="text-gray-600">
              Seamlessly orchestrate multiple AI models.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Monitoring & Analytics</h3>
            <p className="text-gray-600">
              Track performance and optimize your workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}