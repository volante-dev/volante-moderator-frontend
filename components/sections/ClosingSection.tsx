import Typography from '@mui/material/Typography';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { Section } from '@/components/ui/Section';
import { ActionButton } from '@/components/ui/ActionButton';
import { site } from '@/lib/site';

export function ClosingSection() {
  return <Section aria-labelledby="closing-title" sx={{ textAlign: 'center', position: 'relative' }}>
    <Typography variant="h2" id="closing-title">Faites place<br />à vos prochaines idées.</Typography>
    <Typography color="text.secondary" sx={{ mt: 3, maxWidth: '47ch', mx: 'auto' }}>Retrouvez votre espace de travail Tournesol. L’accès à l’application est réservé aux utilisateurs habilités.</Typography>
    <ActionButton href={site.appUrl} color="secondary" endIcon={<ArrowForwardRounded />} sx={{ mt: 4 }}>Ouvrir Tournesol</ActionButton>
  </Section>;
}
