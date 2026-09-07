import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helix — Atomic Work-Breakdown Orchestrator",
  description:
    "Helix plans, writes, and ships code in atomic, reviewable steps — for indie developers, startup CTOs, engineering managers, and enterprise platform teams. Move from prompt to preview with bounded writes, language-locked plans, and audit-friendly diffs.",
  metadataBase: new URL("https://helix-ai-orchestrator.vercel.app"),
  applicationName: "Helix",
  keywords: [
    "Helix",
    "AI orchestrator",
    "atomic work breakdown",
    "code agent",
    "developer tools",
    "AI coding",
    "vercel",
    "platform engineering",
  ],
  authors: [{ name: "Helix Team" }],
  creator: "Helix",
  publisher: "Helix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://helix-ai-orchestrator.vercel.app",
    siteName: "Helix",
    title: "Helix — Atomic Work-Breakdown Orchestrator",
    description:
      "Plan, write, and ship code in atomic, reviewable steps. Helix is the AI coding orchestrator that respects your files, your conventions, and your reviewers.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Helix — Atomic Work-Breakdown Orchestrator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix — Atomic Work-Breakdown Orchestrator",
    description: "Plan, write, and ship code in atomic, reviewable steps. Helix is the AI coding orchestrator that respects your files, your conventions, and your reviewers.",
    images: ["/og-image.svg"],
    creator: "@helix",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "developer tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}