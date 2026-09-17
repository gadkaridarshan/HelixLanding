// @helix:story [USER-277000]
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center">
          <h1 className="h1-custom">
            Helix AI Orchestrator
          </h1>
          <p className="p-custom">
            The intelligent workflow automation platform that turns complex
            tasks into simple, actionable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <a
              href="/get-started"
              className="btn-primary flex-1 sm:flex-1 px-8 py-4 text-center"
            >
              Get Started Free
            </a>
            <a
              href="/features"
              className="btn-secondary flex-1 sm:flex-1 px-8 py-4 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;