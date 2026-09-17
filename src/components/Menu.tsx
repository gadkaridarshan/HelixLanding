import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <div className="flex flex-col space-y-4 pt-6">
        <Link href="/" className={pathname === '/' ? 'text-indigo-600 font-medium hover:text-indigo-700 transition-colors' : 'text-gray-500 hover:text-gray-700 transition-colors'}>
          Home
        </Link>
        <Link href="/features" className={pathname === '/features' ? 'text-indigo-600 font-medium hover:text-indigo-700 transition-colors' : 'text-gray-500 hover:text-gray-700 transition-colors'}>
          Features
        </Link>
        <Link href="/workflow" className={pathname === '/workflow' ? 'text-indigo-600 font-medium hover:text-indigo-700 transition-colors' : 'text-gray-500 hover:text-gray-700 transition-colors'}>
          Workflow
        </Link>
        <Link href="/get-started" className={pathname === '/get-started' ? 'text-indigo-600 font-medium hover:text-indigo-700 transition-colors' : 'text-gray-500 hover:text-gray-700 transition-colors'}>
          Get Started
        </Link>
      </div>
    </div>
  );
}