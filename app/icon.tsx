import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1C1C",
          borderRadius: "8px",
        }}
      >
        <span
          style={{
            color: "#F7F5F1",
            fontSize: "18px",
            fontWeight: 600,
            fontFamily: "sans-serif",
          }}
        >
          G
        </span>
      </div>
    ),
    { width: 32, height: 32 }
  );
}