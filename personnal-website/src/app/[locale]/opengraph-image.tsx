import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jérôme Desmares - Tech Lead Freelance";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage({
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

          {/* Tagline with gradient */}
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

          {/* Technologies */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
            }}
          >
            {["Node.js", "TypeScript", "React", "PostgreSQL"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 100,
                  color: "white",
                  fontSize: 18,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {tech}
              </div>
            ))}
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
          jeromedesmares.dev
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 40,
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.6)",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Nice, France · Remote
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
