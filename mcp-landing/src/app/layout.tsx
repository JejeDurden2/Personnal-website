import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://votre-domaine.fr'),
  title: {
    default: 'Optimisation IA Entreprise | Automatisation & Intégration LLM | Consultant France',
    template: '%s | Jérôme - Consultant Optimisation IA'
  },
  description: 'Expert en optimisation IA pour entreprises : automatisez vos processus, intégrez Claude et GPT à vos outils, gagnez jusqu\'à 50% de productivité. Audit gratuit. PME, scale-ups, grands groupes.',
  keywords: [
    'optimisation IA entreprise',
    'automatisation IA',
    'consultant IA France',
    'intégration LLM entreprise',
    'automatiser processus IA',
    'Claude API intégration',
    'GPT entreprise',
    'transformation digitale IA',
    'productivité IA',
    'serveur MCP privé',
    'automatisation tâches répétitives',
    'ROI intelligence artificielle',
    'IA pour PME',
    'consultant automatisation'
  ],
  authors: [{ name: 'Jérôme', url: 'https://votre-domaine.fr' }],
  creator: 'Jérôme',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-domaine.fr',
    siteName: 'Jérôme - Consultant Optimisation IA',
    title: 'Optimisation IA Entreprise | Gagnez 50% de productivité',
    description: 'Automatisez vos processus répétitifs et connectez l\'IA à vos données métier. Audit gratuit pour identifier vos quick wins.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Optimisation IA Entreprise - Automatisation & Intégration LLM' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optimisation IA Entreprise | Automatisation & Productivité',
    description: 'Automatisez vos processus et gagnez jusqu\'à 50% de productivité grâce à l\'IA. Audit gratuit.',
    images: ['/og-image.jpg']
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://votre-domaine.fr' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
