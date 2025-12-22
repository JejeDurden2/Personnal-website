import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jeromedesmares.dev'),
  title: {
    default: 'Serveur MCP Privé | Intégration IA en Entreprise | Jérôme Consultant',
    template: '%s | Jérôme - Consultant MCP & IA'
  },
  description: 'Expert en création de serveurs MCP (Model Context Protocol) pour connecter Claude, GPT et vos LLMs à vos données internes en toute sécurité. Automatisation IA sur mesure.',
  keywords: ['serveur MCP', 'Model Context Protocol', 'intégration IA entreprise', 'consultant IA freelance', 'automatisation IA', 'Claude API', 'connecter IA données internes', 'LLM entreprise', 'MCP TypeScript', 'MCP Python'],
  authors: [{ name: 'Jérôme', url: 'https://jeromedesmares.dev' }],
  creator: 'Jérôme',
  publisher: 'Jérôme',
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jeromedesmares.dev',
    siteName: 'Jérôme - Consultant IA & MCP',
    title: 'Serveur MCP Privé | Connectez votre IA à vos données métier',
    description: 'Arrêtez le copier-coller. Donnez à votre IA un accès direct et sécurisé à vos systèmes internes avec un serveur MCP privé.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Serveur MCP Privé - Intégration IA Entreprise' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serveur MCP Privé | Intégration IA en Entreprise',
    description: 'Connectez Claude ou GPT à vos données internes en toute sécurité.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
  },
  verification: {
    google: 'votre-code-verification-google',
  },
  alternates: { canonical: 'https://jeromedesmares.dev' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
