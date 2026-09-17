// @helix:story [USER-277000]
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Helix AI Orchestrator. All rights
            reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a
              href="#"
              className="hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;