// @helix:story [USER-1789652000000]
// @helix:story [USER-277000]
// @helix:story [USER-454000]
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helix AI Orchestrator",
  description: "The intelligent workflow automation platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}