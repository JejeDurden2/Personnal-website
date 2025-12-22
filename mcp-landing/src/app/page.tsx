"use client";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Jérôme - Consultant Optimisation IA & Automatisation Entreprise",
      "description": "Expert en optimisation IA pour entreprises : automatisation des processus, intégration LLM, serveurs MCP privés. Réduisez vos coûts et gagnez en productivité grâce à l'intelligence artificielle.",
      "url": "https://jeromedesmares.dev",
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": ["Optimisation IA", "Automatisation processus", "Intégration LLM", "Serveur MCP", "Conseil IA", "Transformation digitale IA"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services IA pour entreprises",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audit IA et identification des gains de productivité" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation des processus métier par IA" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intégration Claude, GPT et LLMs dans vos outils" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Développement de serveurs MCP privés" }}
        ]
      }
    },
    {
      "@type": "Person",
      "name": "Jérôme",
      "jobTitle": "Consultant Optimisation IA & Engineering Manager",
      "knowsAbout": ["Intelligence Artificielle", "Automatisation", "Optimisation processus", "Model Context Protocol", "LLM", "Claude API", "GPT", "TypeScript", "Node.js", "Python"],
      "alumniOf": { "@type": "Organization", "name": "École 42" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment l'IA peut-elle optimiser mon entreprise ?",
          "acceptedAnswer": { "@type": "Answer", "text": "L'IA permet d'automatiser les tâches répétitives, d'accélérer la prise de décision et de réduire les erreurs. Les gains de productivité vont de 20% à 50% selon les processus ciblés." }
        },
        {
          "@type": "Question",
          "name": "Quels processus peuvent être automatisés avec l'IA ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Traitement de documents, service client, analyse de données, génération de rapports, qualification de leads, gestion des emails, recherche documentaire — tous les processus répétitifs sont candidats." }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'un serveur MCP ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un serveur MCP (Model Context Protocol) permet de connecter des LLMs comme Claude ou GPT à vos données internes d'entreprise de manière sécurisée, sans exposer vos données à des tiers." }
        },
        {
          "@type": "Question",
          "name": "Combien coûte une optimisation IA ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un audit initial permet d'identifier les quick wins à fort ROI. Les premiers gains sont souvent visibles en quelques semaines, avec un retour sur investissement typique de 3 à 6 mois." }
        }
      ]
    }
  ]
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header role="banner" className="px-6 py-4">
        <nav aria-label="Navigation principale" className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" title="Accueil - Jérôme Consultant IA" className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 100 100" className="rounded-lg">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#f97316' }} />
                  <stop offset="100%" style={{ stopColor: '#dc2626' }} />
                </linearGradient>
              </defs>
              <rect width="100" height="100" rx="20" fill="url(#logo-grad)" />
              <text x="50" y="50" dy="0.35em" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="50" fontWeight="700" fill="white">J</text>
            </svg>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Jérôme.dev
            </span>
          </a>
          <a href="#contact" title="Réserver une consultation gratuite" className="px-4 py-2 text-orange-700 hover:text-orange-900 font-medium transition-colors">
            Contact
          </a>
        </nav>
      </header>

      <main role="main">
        <section aria-labelledby="hero-title" className="px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-orange-700 bg-orange-100 rounded-full">
              🚀 Consultant Optimisation IA & Automatisation
            </span>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Optimisez votre entreprise
              </span>{' '}
              grâce à l&apos;intelligence artificielle
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Automatisez vos processus répétitifs, connectez l&apos;IA à vos données métier et gagnez jusqu&apos;à 50% de productivité. Audit gratuit pour identifier vos quick wins.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300">
              Obtenir mon audit IA gratuit →
            </a>
          </div>
        </section>

        <section aria-labelledby="benefits-title" className="px-6 py-20 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 id="benefits-title" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Pourquoi optimiser vos processus avec l&apos;IA ?
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              L&apos;intelligence artificielle n&apos;est plus réservée aux géants tech. PME et scale-ups peuvent aujourd&apos;hui automatiser leurs tâches répétitives et gagner un avantage compétitif décisif.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '⚡', title: 'Gagnez jusqu\'à 50% de productivité', desc: 'Automatisez le traitement de documents, la qualification de leads, les rapports — libérez vos équipes pour les tâches à forte valeur.' },
                { icon: '🔒', title: 'Vos données restent privées', desc: 'Intégration IA dans votre infrastructure. Aucune fuite vers des APIs tierces. Conformité RGPD garantie.' },
                { icon: '📈', title: 'ROI mesurable en semaines', desc: 'Audit initial pour identifier les quick wins. Premiers gains visibles rapidement, retour sur investissement sous 3 à 6 mois.' }
              ].map((item, i) => (
                <article key={i} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-orange-100">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="expertise-title" className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 id="expertise-title" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              Un expert MCP avec 10 ans d&apos;expérience terrain
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Engineering Manager et fondateur de 42AI, je développe des intégrations IA depuis les débuts de l&apos;écosystème. Expertise Node.js, TypeScript et Python.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              {['Louis Vuitton', 'Veepee', 'Privateaser', 'KohortPay', 'École 42'].map((c) => (
                <span key={c} className="text-lg font-semibold text-gray-500">{c}</span>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="services-title" className="px-6 py-20 bg-gradient-to-br from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold mb-4">Solutions d&apos;optimisation IA pour votre entreprise</h2>
            <p className="mb-12 text-orange-100">De l&apos;audit initial au déploiement — accompagnement sur mesure pour PME, scale-ups et grands groupes</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Audit IA & identification des gains', desc: 'Analyse de vos processus, identification des tâches automatisables, estimation du ROI et feuille de route personnalisée.' },
                { title: 'Automatisation des processus métier', desc: 'Traitement de documents, emails, reporting, qualification de leads — on automatise vos tâches répétitives.' },
                { title: 'Intégration LLM dans vos outils', desc: 'Connexion de Claude, GPT ou LLMs open source à votre CRM, ERP, documentation via serveur MCP privé.' },
                { title: 'Formation & montée en compétence', desc: 'Formez vos équipes au prompt engineering, à l\'utilisation des outils IA et aux bonnes pratiques.' }
              ].map((s, i) => (
                <article key={i} className="p-6 bg-white/10 backdrop-blur rounded-xl text-left hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-orange-100">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-title" className="px-6 py-20 bg-white/30">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-title" className="text-3xl font-bold text-center text-gray-900 mb-12">Questions fréquentes sur l&apos;optimisation IA</h2>
            <div className="space-y-6">
              {[
                { q: "Quels processus peuvent être automatisés avec l'IA ?", a: "Traitement de documents et factures, réponses emails, génération de rapports, qualification de leads, recherche documentaire, support client niveau 1 — tous les processus répétitifs sont candidats." },
                { q: "L'IA est-elle adaptée aux PME ?", a: "Absolument. Les outils IA actuels sont accessibles et rentables même pour les petites structures. Un audit initial permet d'identifier les quick wins à fort ROI pour commencer." },
                { q: "Mes données sont-elles en sécurité ?", a: "Oui. Je privilégie les intégrations privées (serveur MCP dans votre infrastructure). Vos données ne transitent jamais par des serveurs tiers non maîtrisés." },
                { q: "Quel est le ROI d'une optimisation IA ?", a: "Les gains de productivité vont de 20% à 50% selon les processus. Le retour sur investissement est généralement atteint en 3 à 6 mois." }
              ].map((faq, i) => (
                <article key={i} className="p-6 bg-white rounded-xl border border-orange-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="cta-title" className="px-6 py-20">
          <div className="max-w-xl mx-auto text-center">
            <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prêt à intégrer l&apos;IA dans votre entreprise ?
            </h2>
            <p className="text-gray-600 mb-8">Premier échange de 30 minutes offert. Discutons de votre cas d&apos;usage.</p>
            <a 
              href="mailto:desmaresjerome@gmail.com?subject=Demande%20d'audit%20IA&body=Bonjour%20Jérôme,%0A%0AJe%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20d'optimisation%20IA.%0A%0AMon%20entreprise%20:%0AMon%20besoin%20:%0A%0ACordialement,"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              Demander mon audit gratuit →
            </a>
            <p className="mt-6 text-gray-500">ou écrivez-moi directement à <a href="mailto:desmaresjerome@gmail.com" className="text-orange-600 hover:underline">desmaresjerome@gmail.com</a></p>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="px-6 py-8 border-t border-orange-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 100 100" className="rounded">
              <defs>
                <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#f97316' }} />
                  <stop offset="100%" style={{ stopColor: '#dc2626' }} />
                </linearGradient>
              </defs>
              <rect width="100" height="100" rx="20" fill="url(#footer-grad)" />
              <text x="50" y="50" dy="0.35em" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="50" fontWeight="700" fill="white">J</text>
            </svg>
            <span>© 2025 Jérôme — Consultant Optimisation IA en France</span>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-orange-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-orange-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Medium</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
