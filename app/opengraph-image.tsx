// helix: app/opengraph-image.tsx
/**
 * @helix:story USER-11000
 * @helix:story USER-525000
 *
 * Open Graph image generator — produces a 1200x630 social-share
 * image at `/opengraph-image.png` so link previews on Twitter,
 * LinkedIn, Slack, iMessage, etc. render with Helix branding
 * instead of an empty card.
 *
 * Mirrors the Hero palette (deep ink canvas, cyan brand, violet
 * accent) and surfaces the headline + tagline sourced from
 * `lib/brand.ts`.
 *
 * A static fallback `public/og/og.svg` is also shipped for
 * platforms that prefer SVG and as a defense-in-depth asset if the
 * generator ever fails to render at build time.
 */
import { ImageResponse } from "next/og";

import { brand } from "@/lib/brand";

export const alt = `${brand.name} — Atomic work-breakdown for AI coding agents`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const runtime = "edge";

export default function OpengraphImage(): ImageResponse {
  const title = "Atomic work-breakdown";
  const subtitle = "for AI coding agents.";
  const tagline = brand.tagline;
  const url = brand.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(34, 211, 238, 0.18) 0%, rgba(2, 6, 23, 0) 55%), radial-gradient(ellipse at 85% 90%, rgba(167, 139, 250, 0.22) 0%, rgba(2, 6, 23, 0) 60%), linear-gradient(135deg, #020617 0%, #0b1224 50%, #020617 100%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top row — wordmark + brand glyph */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f8fafc",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background:
                "radial-gradient(circle at 30% 30%, #22d3ee 0%, #0891b2 60%, #0e7490 100%)",
              color: "#020617",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            H
          </div>
          <span>{brand.name}</span>
        </div>

        {/* Center headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#f8fafc",
          }}
        >
          <span>{title}</span>
          <span style={{ color: "#22d3ee" }}>{subtitle}</span>
        </div>

        {/* Footer row — tagline + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: "#94a3b8",
            fontWeight: 500,
          }}
        >
          <span>{tagline}</span>
          <span style={{ color: "#67e8f9" }}>{url}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}