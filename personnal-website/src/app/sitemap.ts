import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jeromedesmares.dev";
  const lastModified = new Date();

  // Pages principales avec leurs alternates linguistiques
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "fr-FR": baseUrl,
          "en-US": `${baseUrl}/en`,
          "x-default": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "fr-FR": baseUrl,
          "en-US": `${baseUrl}/en`,
          "x-default": baseUrl,
        },
      },
    },
  ];

  // Sections ancres (pour aider Google à comprendre la structure)
  const sections = ["#about", "#services", "#contact"];
  const sectionPages: MetadataRoute.Sitemap = sections.flatMap((section) => [
    {
      url: `${baseUrl}/${section}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/${section}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  return [...mainPages, ...sectionPages];
}
