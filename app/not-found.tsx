import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ActionButton } from '@/components/ui/ActionButton';

export default function NotFound() {
  return <><SiteHeader /><Box component="main" id="contenu" sx={{ textAlign: 'center', py: 16, px: 3 }}><Typography variant="h1">Cette page<br />n’a pas poussé ici.</Typography><Typography color="text.secondary" sx={{ my: 3 }}>Le lien est peut-être ancien. Retrouvez la présentation de Tournesol.</Typography><ActionButton href="/">Revenir à l’accueil</ActionButton></Box><SiteFooter /></>;
}
