import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Helix AI. All rights reserved.
        </p>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
