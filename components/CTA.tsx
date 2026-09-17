// @helix:story [USER-88000]
export default function CTA() {
  return (
    <section className="bg-gradient-secondary text-white section-padding">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Ready to transform your AI workflow?
        </h2>
        <p className="mb-8 text-xl opacity-90 max-w-2xl mx-auto">
          Join thousands of developers who are already building faster with Helix.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-block bg-white text-secondary px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors transform hover:-translate-y-1"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="inline-block border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors transform hover:-translate-y-1"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}