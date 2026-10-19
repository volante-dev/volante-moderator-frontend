import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ProductStage } from './ProductStage';

/** This exact MUI composition is captured as the 1200 × 630 social image. */
export function ShareCard() {
  return <Box sx={{ width: 1200, height: 630, bgcolor: 'background.default', overflow: 'hidden', position: 'relative', p: 5 }}>
    <BrandLogo compact />
    <Typography component="p" variant="h1" sx={{ fontSize: 70, textAlign: 'center', mt: -2 }}>Du brouillon à la publication.</Typography>
    <Typography sx={{ textAlign: 'center', fontSize: 23, mt: 1, color: 'text.secondary' }}>Publications &amp; modération Instagram</Typography>
    <Box sx={{ position: 'absolute', width: 1010, bottom: -25, left: 95 }}><ProductStage /></Box>
  </Box>;
}
