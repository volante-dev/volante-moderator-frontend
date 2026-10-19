import Box, { type BoxProps } from '@mui/material/Box';
import { tokens } from '@/theme/tokens';

/** Shared page gutter and rhythm. Sections own their semantic heading. */
export function Section({ children, sx, ...props }: BoxProps) {
  return <Box component="section" {...props} sx={[{ width: { xs: 'calc(100% - 40px)', md: '85.42%' }, maxWidth: tokens.space.maxWidth, mx: 'auto', py: { xs: 8, md: 14 } }, ...(Array.isArray(sx) ? sx : [sx])]}>{children}</Box>;
}
