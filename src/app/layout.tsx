import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Helix AI Orchestrator',
  description: 'The AI orchestrator for automating complex workflows',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}