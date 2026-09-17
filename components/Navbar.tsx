import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-semibold">Helix AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-blue-500">
                Features
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}