import '@/globals.css';
import type { ReactNode } from 'react';

interface ShellProps {
  children: ReactNode;
}

export default function Shell({ children }: ShellProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {children}
    </div>
  );
}