// @helix:story [USER-810000]
export default function CTA() {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to streamline your AI workflows?
        </h2>
        <p className="text-xl mb-8">
          Get started with Helix AI Orchestrator today.
        </p>
        <a href="/signup" className="bg-white text-blue-500 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors">
          Sign Up Free
        </a>
      </div>
    </section>
  );
}