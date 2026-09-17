import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-primary pt-16 pb-24">
      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <h1 className="h1-custom">
            Transform Your Workflow with AI Orchestration
          </h1>
          <p className="p-custom">
            Helix intelligently coordinates specialized AI agents to tackle
            complex tasks, delivering precise, actionable insights that drive
            your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-secondary opacity-20" />
      </div>
    </section>
  );
};

export default HeroSection;
