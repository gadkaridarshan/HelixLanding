import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Helix - AI Orchestrator',
  description: 'Helix AI Orchestrator - Automate complex workflows with intelligent AI agents',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}