import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="heroSection">
      <div className="heroContainer">
        <h1 className="heroTitle">Helix AI Orchestrator</h1>
        <p className="heroSubtitle">
          From intent to insight, Helix orchestrates AI agents to deliver
          precise, actionable results through a streamlined workflow.
        </p>
        <button className="heroButton">
          <svg
            className="heroIcon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
