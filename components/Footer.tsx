// @helix:story [USER-207000]
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Helix</h3>
        <p className="mb-6">AI Orchestration Platform</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="mt-6 text-gray-400 text-sm">&copy; {new Date().getFullYear()} Helix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;