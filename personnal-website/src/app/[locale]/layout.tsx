import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { locales, type Locale } from "@/i18n/config";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = "https://jeromedesmares.com";
  const url = locale === "fr" ? baseUrl : `${baseUrl}/en`;

  // Keywords optimisés pour le marché français
  const keywordsFr = [
    // Mots-clés principaux (volume élevé)
    "tech lead freelance",
    "développeur freelance",
    "CTO freelance",
    "développeur MVP",
    // Mots-clés géographiques
    "tech lead Nice",
    "développeur freelance Nice",
    "tech lead France",
    "développeur remote France",
    // Mots-clés longue traîne
    "créer MVP startup",
    "développeur Node.js freelance",
    "expert TypeScript freelance",
    "CTO temps partagé",
    "architecture technique startup",
    // Technologies
    "Node.js",
    "TypeScript",
    "React",
    "NestJS",
    "PostgreSQL",
    // Services
    "développement MVP",
    "POC technique",
    "accompagnement technique startup",
  ];

  const keywordsEn = [
    "freelance tech lead",
    "freelance developer",
    "fractional CTO",
    "MVP developer",
    "tech lead France",
    "remote developer Europe",
    "startup technical advisor",
    "Node.js freelancer",
    "TypeScript expert",
    "React developer freelance",
    "MVP development services",
    "technical architecture consulting",
    "startup CTO services",
  ];

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | Jérôme Desmares`,
    },
    description: t("description"),
    keywords: locale === "fr" ? keywordsFr : keywordsEn,
    authors: [
      {
        name: "Jérôme Desmares",
        url: baseUrl,
      },
    ],
    creator: "Jérôme Desmares",
    publisher: "Jérôme Desmares",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": baseUrl,
        "en-US": `${baseUrl}/en`,
        "x-default": baseUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      url,
      siteName: "Jérôme Desmares - Tech Lead Freelance",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt:
            locale === "fr"
              ? "Jérôme Desmares - Tech Lead Freelance Nice - MVP & Architecture"
              : "Jérôme Desmares - Freelance Tech Lead - MVP & Architecture Expert",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@jeromedesmares",
      creator: "@jeromedesmares",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: {
        url: `${baseUrl}/og-image.png`,
        alt:
          locale === "fr"
            ? "Jérôme Desmares - Tech Lead Freelance"
            : "Jérôme Desmares - Freelance Tech Lead",
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // À remplir après avoir vérifié la propriété dans Google Search Console
      // google: 'votre-code-verification',
    },
    category: "technology",
    classification: "Business",
    other: {
      "geo.region": "FR-PAC",
      "geo.placename": "Nice",
      "geo.position": "43.7102;7.262",
      ICBM: "43.7102, 7.262",
      "revisit-after": "7 days",
      rating: "general",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": "Jérôme Desmares",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale as Locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <JsonLd />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
