import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { ActionButton } from '@/components/ui/ActionButton';

export function Hero() {
  return <Box component="section" aria-labelledby="hero-title" sx={{ textAlign: 'center', pt: { xs: 5, md: 1 }, pb: { xs: 5, md: 2 }, px: 2.5 }}>
    <Typography id="hero-title" variant="h1" color="primary.dark">Du brouillon<br />à la publication.</Typography>
    <Typography color="text.secondary" sx={{ fontSize: { xs: 19, md: 22 }, lineHeight: 1.4, maxWidth: 760, mx: 'auto', mt: { xs: 2, md: 1 } }}>Vos publications et vos échanges Instagram, au même endroit.</Typography>
    <ActionButton variant="text" href="#produit" endIcon={<ArrowDownward sx={{ fontSize: '18px !important' }} />} sx={{ mt: { xs: 1, md: 0 }, fontSize: 16 }}>Découvrir Tournesol</ActionButton>
  </Box>;
}
