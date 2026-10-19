'use client';
import Paper, { type PaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { tokens as t } from '@/theme/tokens';

export type SurfaceTone = 'raised' | 'flat' | 'glass' | 'ink';
export interface SurfaceProps extends PaperProps { tone?: SurfaceTone }

export const Surface = styled(Paper, { name: 'TournesolSurface', shouldForwardProp: prop => prop !== 'tone' })<SurfaceProps>(
  ({ tone = 'raised' }) => ({
    borderRadius: t.radius.surface,
    backgroundColor: t.color.paper,
    color: t.color.ink,
    ...(tone === 'raised' && { boxShadow: t.shadow.raised }),
    ...(tone === 'glass' && { backgroundColor: 'rgba(245,246,250,.88)', backdropFilter: 'blur(24px) saturate(1.2)', boxShadow: t.shadow.glass, borderRadius: t.radius.dialog, '@supports not (backdrop-filter: blur(1px))': { backgroundColor: t.color.paper } }),
    ...(tone === 'ink' && { backgroundColor: t.color.brandDeep, color: t.color.white }),
  }),
);
