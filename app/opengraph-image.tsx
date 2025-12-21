import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ZAO Progress Timeline";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141e27",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {/* Stylized Logo/Icon Representation */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "4px solid #49f3c3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
          >
             <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#49f3c3",
                  borderRadius: "50%",
                }}
              />
          </div>
          <div
            style={{
              color: "#e0ddaa",
              fontSize: 80,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
            }}
          >
            ZAO PROGRESS
          </div>
        </div>

        <div
          style={{
            color: "#49f3c3",
            fontSize: 32,
            fontWeight: 500,
            marginTop: 20,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Building Infrastructure for Creators
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
