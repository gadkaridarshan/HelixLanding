/**
 * @helix:story USER-525000
 *
 * Open Graph image generator — produces a 1200x630 social-share image at
 * /opengraph-image.png so link previews on Twitter, LinkedIn, Slack,
 * iMessage, etc. render with Helix branding instead of an empty card.
 *
 * Mirrors the Hero palette (deep ink canvas, cyan brand, violet accent)
 * and surfaces the headline + tagline sourced from lib/brand.ts.
 */
import { ImageResponse } from "next/og";

import { brand } from "@/lib/brand";

export const alt = `${brand.name} — Atomic work-breakdown for AI coding agents`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

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
              borderRadius: 14,
              background:
                "linear-gradient(135deg, rgba(34, 211, 238, 0.18) 0%, rgba(167, 139, 250, 0.18) 100%)",
              border: "1px solid rgba(34, 211, 238, 0.35)",
              color: "#22d3ee",
              fontSize: 28,
              fontWeight: 700,
              boxShadow: "0 0 24px rgba(34, 211, 238, 0.25)",
            }}
          >
            {brand.glyph}
          </div>
          <div style={{ display: "flex" }}>{brand.name}</div>
        </div>

        {/* Middle — headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              background:
                "linear-gradient(90deg, #22d3ee 0%, #a78bfa 60%, #f472b6 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#cbd5e1",
              lineHeight: 1.1,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 26,
              fontWeight: 400,
              color: "#94a3b8",
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom — URL + meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#64748b",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "monospace",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#22d3ee",
                display: "flex",
                boxShadow: "0 0 12px rgba(34, 211, 238, 0.7)",
              }}
            />
            <div style={{ display: "flex" }}>{url}</div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(148, 163, 184, 0.25)",
              color: "#cbd5e1",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Deployed on Vercel
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}