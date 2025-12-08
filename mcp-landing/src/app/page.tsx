"use client";

import { useState } from 'react';

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Jérôme - Consultant Intégration IA & MCP",
      "description": "Expert en création de serveurs MCP privés pour connecter les LLMs aux données d'entreprise.",
      "url": "https://jeromedesmares.dev",
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": ["Intégration IA", "Serveur MCP", "Automatisation", "Conseil technique"]
    },
    {
      "@type": "Person",
      "name": "Jérôme",
      "jobTitle": "Engineering Manager & Consultant IA",
      "knowsAbout": ["Model Context Protocol", "TypeScript", "Node.js", "Python", "LLM", "Claude API"],
      "alumniOf": { "@type": "Organization", "name": "École 42" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'un serveur MCP ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un serveur MCP (Model Context Protocol) permet de connecter des LLMs comme Claude ou GPT à vos données internes d'entreprise de manière sécurisée." }
        },
        {
          "@type": "Question",
          "name": "Pourquoi utiliser un serveur MCP privé ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Un serveur MCP privé garde vos données dans votre infrastructure tout en permettant à l'IA d'y accéder. Vos équipes gagnent du temps en évitant le copier-coller." }
        }
      ]
    }
  ]
};

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header role="banner" className="px-6 py-4">
        <nav aria-label="Navigation principale" className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" title="Accueil - Jérôme Consultant MCP" className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Jérôme.dev
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
              🚀 Expert Intégration IA & Model Context Protocol
            </span>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Créez votre{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                serveur MCP privé
              </span>{' '}
              et connectez l&apos;IA à vos données métier
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Donnez à Claude, GPT ou vos LLMs un accès sécurisé à votre CRM, ERP et documentation interne. Fini le copier-coller — vos équipes gagnent des heures chaque semaine.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300">
              Réserver un appel découverte gratuit →
            </a>
          </div>
        </section>

        <section aria-labelledby="benefits-title" className="px-6 py-20 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 id="benefits-title" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Pourquoi créer un serveur MCP privé ?
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Le Model Context Protocol (MCP) est le standard ouvert d&apos;Anthropic pour connecter les LLMs à vos systèmes d&apos;information.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🔗', title: 'Connexion directe à vos outils', desc: 'Votre IA interroge votre CRM, ERP, base documentaire ou API interne en langage naturel.' },
                { icon: '🔒', title: 'Sécurité et confidentialité', desc: 'Vos données sensibles restent dans votre infrastructure. Aucune fuite vers des APIs tierces.' },
                { icon: '⚡', title: 'ROI mesurable immédiat', desc: 'Réduisez les tâches répétitives de 30 à 50%. Concentrez-vous sur les missions à forte valeur.' }
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
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold mb-4">Services d&apos;intégration IA pour entreprises</h2>
            <p className="mb-12 text-orange-100">Solutions sur mesure pour PME, scale-ups et grands groupes</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Création serveur MCP privé', desc: 'Développement complet en TypeScript ou Python. Connexion sécurisée à vos données.' },
                { title: 'Audit et conseil IA', desc: "Identification des cas d'usage à fort ROI. Feuille de route personnalisée." },
                { title: 'Automatisation workflows IA', desc: 'Intégration Claude API, GPT ou LLMs open source dans vos processus.' },
                { title: 'Formation équipe technique', desc: 'Montée en compétence sur MCP, prompt engineering et architecture LLM.' }
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
            <h2 id="faq-title" className="text-3xl font-bold text-center text-gray-900 mb-12">Questions fréquentes sur le MCP</h2>
            <div className="space-y-6">
              {[
                { q: "Qu'est-ce que le Model Context Protocol (MCP) ?", a: "Le MCP est un protocole open source créé par Anthropic permettant aux LLMs d'interagir avec des sources de données externes via une interface standardisée." },
                { q: "Mes données sont-elles en sécurité avec un serveur MCP ?", a: "Oui. Un serveur MCP privé tourne dans votre infrastructure. Vos données ne transitent jamais par des serveurs tiers." },
                { q: "Combien de temps pour déployer un serveur MCP ?", a: "Un POC fonctionnel peut être livré en 1 à 2 semaines. Un déploiement production complet prend 4 à 6 semaines." }
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
            {!submitted ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 px-5 py-4 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button onClick={() => email && setSubmitted(true)} className="px-8 py-4 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl hover:shadow-lg transition-all cursor-pointer">
                  Réserver →
                </button>
              </div>
            ) : (
              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <p className="text-green-700 font-medium">✓ Merci ! Je vous recontacte sous 24h.</p>
              </div>
            )}
            <p className="mt-4 text-sm text-gray-500">Vos données restent confidentielles. Pas de spam.</p>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="px-6 py-8 border-t border-orange-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <span>© 2025 Jérôme — Consultant Intégration IA & Serveur MCP en France</span>
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
