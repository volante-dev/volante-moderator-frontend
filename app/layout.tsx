import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: site.title, template: '%s — Tournesol' },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'fr_FR', url: '/', siteName: site.name, title: site.title, description: site.description },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: process.env.VERCEL_ENV === 'preview' ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><head>
    <link rel="preconnect" href="https://use.typekit.net" />
    <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://use.typekit.net/mah7tat.css" />
  </head><body><AppRouterCacheProvider options={{ enableCssLayer: true }}><ThemeProvider>{children}</ThemeProvider></AppRouterCacheProvider></body></html>;
}
