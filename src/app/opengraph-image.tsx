import { ImageResponse } from "next/og";

export const alt = "סלוג׳יק — שירותי IT מנוהלים לעסקים";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #0f172a 0%, #1e3a8a 48%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
          direction: "rtl",
        }}
      >
        <div
          style={{
            width: 96,
            height: 8,
            borderRadius: 999,
            background: "#ea580c",
            marginBottom: 32,
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          סלוג׳יק
        </div>
        <div style={{ fontSize: 36, fontWeight: 500, marginTop: 20, color: "#cbd5e1", maxWidth: 900, textAlign: "right" }}>
          שירותי IT מנוהלים, תמיכה טכנית ופורטל לקוחות
        </div>
      </div>
    ),
    { ...size },
  );
}
