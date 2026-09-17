import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <span className="text-xl font-bold text-indigo-600">Helix</span>
        </div>
        <div className="hidden md:block">
          <div className="flex space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">
              How It Works
            </Link>
            <Link href="#cta" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/get-started" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-transform transform hover:-translate-y-1">
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;