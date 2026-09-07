import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Helix — The AI Orchestrator for Production Teams",
    template: "%s · Helix",
  },
  description:
    "Helix is an AI orchestrator that turns prompts, repos, and people into shipped products. Built for developers, marketers, founders, and teams.",
  metadataBase: new URL("https://helix-ai-orchestrator.vercel.app"),
  openGraph: {
    title: "Helix — The AI Orchestrator for Production Teams",
    description:
      "Turn prompts, repos, and people into shipped products with Helix.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix — The AI Orchestrator",
    description:
      "Turn prompts, repos, and people into shipped products with Helix.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="surface min-h-screen bg-ink-950 font-sans text-ink-50 antialiased">
        {children}
      </body>
    </html>
  );
}