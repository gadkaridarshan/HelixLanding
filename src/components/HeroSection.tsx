import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Helix
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          AI-powered workflow orchestration platform
        </p>
      </div>
    </section>
  );
};

export default HeroSection;