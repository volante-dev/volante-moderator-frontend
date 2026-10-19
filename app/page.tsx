import Box from '@mui/material/Box';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Hero } from '@/components/sections/Hero';
import { ProductJourney } from '@/components/sections/ProductJourney';
import { ModerationSection } from '@/components/sections/ModerationSection';
import { ControlSection } from '@/components/sections/ControlSection';
import { StudioSection } from '@/components/sections/StudioSection';
import { ClosingSection } from '@/components/sections/ClosingSection';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { site } from '@/lib/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${site.origin}/#organization`, name: 'Studio Volante', legalName: 'WR EURL', url: site.studioUrl, logo: `${site.origin}/brand/tournesol-symbol.png` },
    { '@type': 'WebApplication', '@id': `${site.origin}/#application`, name: site.name, url: site.origin, description: site.description, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', inLanguage: 'fr', publisher: { '@id': `${site.origin}/#organization` } },
  ],
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /><SiteHeader /><Box component="main" id="contenu" tabIndex={-1}><Hero /><ProductJourney /><ModerationSection /><ControlSection /><StudioSection /><ClosingSection /></Box><SiteFooter /></>;
}
