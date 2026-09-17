import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-2xl font-bold text-gradient-primary">
            Helix
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-all">
            Home
          </Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-all">
            Features
          </Link>
          <Link href="/workflow" className="text-gray-600 hover:text-gray-900 transition-all">
            How It Works
          </Link>
          <Link href="/get-started" className="text-gray-600 hover:text-gray-900 transition-all">
            Get Started
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Button className="btn-primary px-5 py-2 text-sm">
            Sign In
          </Button>
          <Button className="btn-secondary px-5 py-2 text-sm border">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

// Button component for navbar actions
const Button: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <button className={className}>{children}</button>;
};

export default Navbar;