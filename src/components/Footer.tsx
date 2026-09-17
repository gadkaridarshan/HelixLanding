import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Helix</h3>
            <p className="text-gray-600">
              AI orchestration platform that intelligently coordinates specialized agents to deliver precise, actionable results.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link></li>
              <li><Link href="/features" className="text-gray-500 hover:text-gray-700 transition-colors">Features</Link></li>
              <li><Link href="/workflow" className="text-gray-500 hover:text-gray-700 transition-colors">Workflow</Link></li>
              <li><Link href="/get-started" className="text-gray-500 hover:text-gray-700 transition-colors">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-500 hover:text-gray-700 transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-gray-700 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-gray-700 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Helix AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;