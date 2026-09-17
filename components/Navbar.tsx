import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-indigo-600">Helix</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Features
              </Link>
              <Link href="#workflow" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                How It Works
              </Link>
              <Link href="#cta" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Get Started
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="/get-started" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Get Started Free
            </a>
          </div>
          <div className="flex items-center md:hidden">
            {/* Mobile menu button - placeholder */}
            <button className="rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="Open menu">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;