import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — Brand Identity, Websites & Digital Craft`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F4EFE6",
          color: "#17120F",
          padding: "72px 80px",
          fontFamily: "serif",
          border: "8px solid #E6DCCB",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#8B0D1A",
                borderRadius: "3px",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "28px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#17120F",
              }}
            >
              {siteConfig.name}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "4px",
              border: "1px solid #E6DCCB",
              backgroundColor: "#FBF8F2",
              color: "#5A5249",
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            {siteConfig.upworkStats.jobSuccess} Job Success · Upwork Verified
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "64px",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#17120F",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#5A5249",
              fontFamily: "sans-serif",
              maxWidth: "960px",
              lineHeight: 1.4,
            }}
          >
            Brand identity, websites, AI video & animation, and social content.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #17120F",
            paddingTop: "24px",
            fontSize: "18px",
            fontFamily: "sans-serif",
            color: "#5A5249",
          }}
        >
          <span>{siteConfig.location}</span>
          <span style={{ color: "#8B0D1A", fontWeight: 600 }}>{siteConfig.email}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
