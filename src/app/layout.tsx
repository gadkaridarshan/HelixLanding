// @helix:story [USER-454000]
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helix AI Orchestrator',
  description: 'The ultimate AI orchestrator for building complex workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}