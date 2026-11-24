import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const alt = `${SITE.brand} — Web Design, Development & AI Video Studio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function loadSyneFont(): Buffer | null {
  try {
    const fontPath = path.join(process.cwd(), "src/assets/fonts/Syne-Bold.ttf");
    if (fs.existsSync(fontPath)) {
      return fs.readFileSync(fontPath);
    }
    return null;
  } catch {
    return null;
  }
}

export default function OpenGraphImage() {
  const syneFont = loadSyneFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0B0B",
          color: "#F5F2ED",
          padding: "64px 72px",
          fontFamily: syneFont ? "Syne, sans-serif" : "sans-serif",
          border: "1px solid rgba(245,242,237,0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 64 64"
              style={{ display: "flex" }}
            >
              <rect width="64" height="64" rx="14" fill="#8B0D1A" />
              <path
                d="M20 16 h13 c12 0 19 7 19 16 s-7 16 -19 16 H20 V16 z m10 9 v14 h3 c5 0 9 -3 9 -7 s-4 -7 -9 -7 h-3 z"
                fill="#F5F2ED"
              />
              <rect x="44" y="12" width="6" height="6" fill="#F5F2ED" />
            </svg>
            <span style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "0.08em" }}>
              {SITE.brandUpper}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(139,13,26,0.45)",
              backgroundColor: "rgba(139,13,26,0.12)",
              color: "#8B0D1A",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            300+ people worked with · 100% Job Success
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "66px",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
            }}
          >
            {SITE.tagline}
          </div>
          <div
            style={{
              fontSize: "25px",
              color: "#B9B1AD",
              maxWidth: "1000px",
              lineHeight: 1.35,
            }}
          >
            Branding · Web Design · Development · AI Video · Animation · Content
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(245,242,237,0.16)",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#B9B1AD",
          }}
        >
          <span>{SITE.nameLine}</span>
          <span style={{ color: "#8B0D1A" }}>{SITE.email}</span>
        </div>
      </div>
    ),
    syneFont
      ? {
          ...size,
          fonts: [
            {
              name: "Syne",
              data: syneFont,
              style: "normal" as const,
              weight: 700 as const,
            },
          ],
        }
      : { ...size }
  );
}
