import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 section-padding">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">Helix</h3>
            <p className="max-w-xs">
              AI orchestrator for streamlined workflows that turns complex tasks into
              simple, actionable outcomes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Docs</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 mt-6 sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Helix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;