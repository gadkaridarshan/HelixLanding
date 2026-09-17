import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Menu from '@/components/Menu';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            </svg>
            <span className="text-xl font-bold text-gray-900">Helix</span>
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className={pathname === '/' ? 'text-indigo-600 font-medium hover:text-indigo-700 transition-colors' : 'text-gray-500 hover:text-gray-700 transition-colors'}>Home</Link>
            <Link href="/features" className={pathname === '/features' ? 'text-indigo-600 font-medium hover:text-indigo-700 transition-colors' : 'text-gray-500 hover:text-gray-700 transition-colors'}>Features</Link>
            <Link href="/workflow" className={pathname === '/workflow' ? 'text-indigo-600 font-medium hover:text-indigo-700 transition-colors' : 'text-gray-500 hover:text-gray-700 transition-colors'}>Workflow</Link>
            <Link href="/get-started" className={pathname === '/get-started' ? 'text-indigo-600 font-medium hover:text-indigo-700 transition-colors' : 'text-gray-500 hover:text-gray-700 transition-colors'}>Get Started</Link>
          </div>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
}