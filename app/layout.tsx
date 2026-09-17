// @helix:story [USER-277000]
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Helix AI Orchestrator',
  description: 'Professional AI workflow automation platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}