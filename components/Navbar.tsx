import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container-custom flex flex-wrap items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-gradient-primary">
            Helix
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Features
          </Link>
          <Link href="/workflow" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            How it Works
          </Link>
          <Link href="/get-started" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Get Started
          </Link>
        </div>
        <div className="flex items-center pt-2">
          <Link
            href="/get-started"
            className="btn-primary px-4 py-2 text-sm"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
}