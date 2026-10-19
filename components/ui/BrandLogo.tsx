'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TournesolSymbol } from './TournesolSymbol';

export function BrandLogo({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return <Box role="img" aria-label="Tournesol by volante" sx={{ display: 'inline-flex', alignItems: 'center', gap: compact ? 1 : 1.5, color: inverse ? 'common.white' : 'primary.dark', flexShrink: 0 }}>
    <TournesolSymbol size={compact ? 38 : 52} />
    <Box aria-hidden="true"><Typography component="span" variant="h3" sx={{ display: 'block', fontSize: compact ? 25 : 31, lineHeight: 1, textTransform: 'none' }}>Tournesol</Typography>
      <Typography component="span" sx={{ display: 'block', mt: .5, fontSize: compact ? 11 : 13, letterSpacing: '.02em' }}>by volante</Typography></Box>
  </Box>;
}
