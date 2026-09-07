import { ImageResponse } from "next/og";

import { brand } from "@/lib/brand";

/**
 * @helix:story USER-915000
 *
 * Favicon generator — emits a 32×32 PNG favicon at build time so
 * the browser never 404s. Uses the brand cyan + the "H" wordmark
 * motif. Served at `/favicon.ico` automatically by Next.js.
 */
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export const dynamic = "force-static";

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
            "radial-gradient(circle at 30% 30%, #22d3ee 0%, #0891b2 60%, #0e7490 100%)",
          color: "#020617",
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: -1,
          fontFamily: "Inter, system-ui, sans-serif",
          borderRadius: 8,
        }}
      >
        {brand.name.charAt(0)}
      </div>
    ),
    { ...size }
  );
}