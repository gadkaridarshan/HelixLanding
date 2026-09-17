import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Helix</h3>
            <p className="text-gray-400">
              The future of AI orchestration - where intelligent agents collaborate
              to solve complex problems with precision and efficiency.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="hover:text-white transition-all">
                  Features
                </a>
              </li>
              <li>
                <a href="/workflow" className="hover:text-white transition-all">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition-all">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-white transition-all">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-white transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-all">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition-all">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Helix AI Orchestrator. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;