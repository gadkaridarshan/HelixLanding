// helix: app/fonts.ts
import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const fontVariables = `${inter.variable} ${jetbrainsMono.variable}`;