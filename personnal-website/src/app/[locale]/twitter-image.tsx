import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jérôme Desmares - Tech Lead Freelance";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const isFr = locale === "fr";

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
          background: "linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #06B6D4 100%)",
          position: "relative",
        }}
      >
        {/* Background overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(15, 23, 42, 0.85)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            padding: "40px",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "white",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Jérôme Desmares
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              background: "linear-gradient(90deg, #7C3AED, #EC4899, #06B6D4)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 32,
            }}
          >
            {isFr ? "Tech Lead Freelance · Expert MVP" : "Freelance Tech Lead · MVP Expert"}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            {isFr
              ? "MVP en 4-8 semaines • Architecture scalable • +10 ans d'expérience"
              : "MVP in 4-8 weeks • Scalable architecture • 10+ years experience"}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: 48,
              padding: "16px 40px",
              background: "linear-gradient(90deg, #7C3AED, #EC4899)",
              borderRadius: 16,
              color: "white",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {isFr ? "Devis gratuit sous 24h" : "Free quote within 24h"}
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 40,
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.6)",
            zIndex: 10,
          }}
        >
          jeromedesmares.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
