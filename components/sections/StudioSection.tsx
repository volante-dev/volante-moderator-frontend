import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import { Section } from '@/components/ui/Section';
import { ActionButton } from '@/components/ui/ActionButton';
import { site } from '@/lib/site';
import { tokens } from '@/theme/tokens';
import { TournesolSymbol } from '@/components/ui/TournesolSymbol';

export function StudioSection() {
  return <Box sx={{ bgcolor: 'primary.dark', color: 'common.white', overflow: 'hidden' }}>
    <Section id="studio" aria-labelledby="studio-title" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr .8fr' }, alignItems: 'center', gap: 5, py: { xs: 8, md: 12 } }}>
      <Box>
        <Typography variant="h2" id="studio-title">Un outil signé<br />Studio Volante.</Typography>
        <Typography sx={{ mt: 3, color: tokens.color.inverseMuted, maxWidth: '44ch', fontSize: 22 }}>Tournesol réunit la préparation des contenus et la modération Instagram dans un même espace de travail.</Typography>
        <Typography sx={{ mt: 2, color: tokens.color.inverseMuted, maxWidth: '48ch' }}>Le service est conçu et exploité par Studio Volante, marque de WR EURL, en France.</Typography>
        <ActionButton href={site.studioUrl} color="secondary" endIcon={<ArrowOutward />} sx={{ mt: 4 }}>Découvrir Studio Volante</ActionButton>
      </Box>
      <Box aria-hidden="true" sx={{ position: 'relative', maxWidth: { xs: 220, md: 400 }, width: '100%', mx: 'auto', transform: 'rotate(-12deg)', '&:before': { content: '""', position: 'absolute', inset: '-20%', background: `radial-gradient(ellipse,${tokens.color.accent}1F,transparent 65%)` } }}>
        <TournesolSymbol size="100%" />
      </Box>
    </Section>
  </Box>;
}
