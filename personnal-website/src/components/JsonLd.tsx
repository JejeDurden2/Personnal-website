import { useTranslations, useLocale } from "next-intl";

export function JsonLd() {
  const t = useTranslations("seo.jsonLd");
  const locale = useLocale();

  const baseUrl = "https://jeromedesmares.com";
  const url = locale === "fr" ? baseUrl : `${baseUrl}/en`;

  // Person Schema - Pour apparaître dans le Knowledge Panel Google
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Jérôme Desmares",
    givenName: "Jérôme",
    familyName: "Desmares",
    jobTitle: t("jobTitle"),
    description: t("description"),
    url: baseUrl,
    image: `${baseUrl}/jerome-desmares.jpg`,
    email: "desmaresjerome@gmail.com",
    telephone: "+33600000000", // À remplacer si tu veux
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nice",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: "FR",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "42 Paris",
        url: "https://42.fr",
      },
    ],
    knowsAbout: t.raw("knowsAbout"),
    knowsLanguage: ["fr", "en"],
    sameAs: [
      "https://linkedin.com/in/jeromedesmares",
      "https://github.com/jeromedesmares",
      "https://twitter.com/jeromedesmares",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Jérôme Desmares - Tech Lead Freelance",
      url: baseUrl,
    },
  };

  // WebSite Schema - Pour le sitelinks searchbox et la structure du site
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Jérôme Desmares - Tech Lead Freelance",
    description: t("description"),
    publisher: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ProfessionalService Schema - Pour apparaître dans les résultats locaux
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#service`,
    name: "Jérôme Desmares - Tech Lead Freelance",
    description: t("description"),
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.png`,
    telephone: "+33600000000",
    email: "desmaresjerome@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nice",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      postalCode: "06000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7102,
      longitude: 7.262,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "Country",
        name: "Europe",
      },
    ],
    serviceType: t.raw("services"),
    priceRange: "€€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    founder: {
      "@id": `${baseUrl}/#person`,
    },
    sameAs: [
      "https://linkedin.com/in/jeromedesmares",
      "https://github.com/jeromedesmares",
    ],
  };

  // Offer Schema - Pour les services avec prix
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#mvp-service`,
    name: locale === "fr" ? "Création de MVP" : "MVP Development",
    description:
      locale === "fr"
        ? "Développement de MVP et POC en 4-8 semaines"
        : "MVP and POC development in 4-8 weeks",
    provider: {
      "@id": `${baseUrl}/#person`,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "fr" ? "Services Tech Lead" : "Tech Lead Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "fr" ? "Création de MVP" : "MVP Development",
            description:
              locale === "fr"
                ? "MVP fonctionnel livré en 4-8 semaines"
                : "Functional MVP delivered in 4-8 weeks",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "fr"
                ? "CTO à temps partagé"
                : "Fractional CTO",
            description:
              locale === "fr"
                ? "Direction technique 1-4 jours par semaine"
                : "Technical direction 1-4 days per week",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "fr" ? "Architecture technique" : "Technical Architecture",
            description:
              locale === "fr"
                ? "Conception d'architectures scalables"
                : "Scalable architecture design",
          },
        },
      ],
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: url,
      },
    ],
  };

  // FAQPage Schema - Pour apparaître dans les FAQ snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          locale === "fr"
            ? "Combien de temps pour développer un MVP ?"
            : "How long to develop an MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "fr"
              ? "Un MVP fonctionnel peut être livré en 4 à 8 semaines selon la complexité du projet. Je travaille en sprints courts pour livrer rapidement de la valeur."
              : "A functional MVP can be delivered in 4-8 weeks depending on project complexity. I work in short sprints to deliver value quickly.",
        },
      },
      {
        "@type": "Question",
        name:
          locale === "fr"
            ? "Qu'est-ce qu'un CTO à temps partagé ?"
            : "What is a fractional CTO?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "fr"
              ? "Un CTO à temps partagé vous apporte l'expertise d'un directeur technique senior sans le coût d'un CDI. J'interviens 1 à 4 jours par semaine pour la direction technique, le recrutement et le mentorat de vos équipes."
              : "A fractional CTO brings you senior technical director expertise without full-time costs. I work 1-4 days per week for technical direction, recruiting, and team mentoring.",
        },
      },
      {
        "@type": "Question",
        name:
          locale === "fr"
            ? "Quelles technologies utilisez-vous ?"
            : "What technologies do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "fr"
              ? "Ma stack principale : Node.js, TypeScript, NestJS pour le backend. React, Next.js pour le frontend. PostgreSQL, MongoDB pour les bases de données. Déploiement sur AWS, GCP ou Vercel."
              : "My main stack: Node.js, TypeScript, NestJS for backend. React, Next.js for frontend. PostgreSQL, MongoDB for databases. Deployment on AWS, GCP, or Vercel.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
