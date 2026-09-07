// helix: app/apple-icon.tsx
/**
 * @helix:story USER-11000
 *
 * Apple touch icon generator — emits a 180×180 PNG at build time so
 * iOS home-screen pins render with Helix branding. Served at
 * `/apple-icon.png` by Next.js App Router.
 */
import { ImageResponse } from "next/og";

import { brand } from "@/lib/brand";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export const dynamic = "force-static";

export default function AppleIcon(): ImageResponse {
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
            "radial-gradient(circle at 30% 30%, #22d3ee 0%, #0891b2 60%, #0e7490 100%)",
          color: "#020617",
          fontWeight: 700,
          fontSize: 128,
          letterSpacing: -4,
          fontFamily: "Inter, system-ui, sans-serif",
          borderRadius: 36,
        }}
      >
        {brand.name.charAt(0)}
      </div>
    ),
    { ...size },
  );
}