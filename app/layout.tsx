// @helix:story [USER-99000]
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helix AI Orchestrator',
  description: 'The intelligent workflow automation platform',
  icons: {
    icon: '/favicon.ico',
  },
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