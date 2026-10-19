import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { tokens } from '@/theme/tokens';
import { site } from '@/lib/site';

export function SiteFooter() {
  return <Box component="footer" sx={{ width: { xs: 'calc(100% - 40px)', md: '85.42%' }, maxWidth: tokens.space.maxWidth, mx: 'auto', borderTop: '1px solid', borderColor: 'divider', py: 5 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
      <BrandLogo compact />
      <Box component="nav" aria-label="Informations légales" sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, flexWrap: 'wrap' }}>
        <Link href={site.privacyUrl} color="text.primary" sx={{ py: 1 }}>Confidentialité &amp; données</Link>
        <Link href={site.studioUrl} color="text.primary" sx={{ py: 1 }}>Studio Volante</Link>
      </Box>
    </Box>
    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 4 }}>Tournesol est un service de Studio Volante — WR EURL, France. Instagram est une marque de Meta. Les contenus présentés sur cette page sont des démonstrations.</Typography>
  </Box>;
}
