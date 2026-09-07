/**
 * @helix:story USER-525000
 *
 * Favicon generator — Next.js App Router convention. Generates a multi-size
 * favicon at build time so the deployed URL exposes /icon (and the
 * automatically-resolved /favicon.ico) without us shipping a binary asset
 * through git. The atom/orbit motif matches the brand mark.
 */
import { ImageResponse } from "next/og";

import { brand } from "@/lib/brand";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 60%, #020617 100%)",
          borderRadius: 6,
          fontSize: 20,
          fontWeight: 700,
          color: "#22d3ee",
          letterSpacing: "-0.02em",
          position: "relative",
        }}
      >
        {/* Orbital ring */}
        <div
          style={{
            position: "absolute",
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "1.5px solid rgba(167, 139, 250, 0.55)",
            display: "flex",
          }}
        />
        {/* Brand glyph */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#22d3ee",
            textShadow: "0 0 8px rgba(34, 211, 238, 0.55)",
          }}
        >
          {brand.glyph}
        </div>
      </div>
    ),
    { ...size }
  );
}