import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            Helix
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-gray-700 hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link href="/workflow" className="text-gray-700 hover:text-gray-900 transition-colors">
            How It Works
          </Link>
          <Link href="/get-started" className="ml-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors">
            Get Started
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;