'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import photo from '@/public/images/draft-photo.png';
import { DraftPreview } from './DraftPreview';
import { CalendarPreview } from './CalendarPreview';
import { PhonePreview } from './PhonePreview';
import type { JourneyPhase } from './demo';

export function ProductStage({ className = '', phase = 'published', animated = false, date }: { className?: string; phase?: JourneyPhase; animated?: boolean; date?: string }) {
  return <Box className={`product-stage ${className}`} role="img" aria-label="Démonstration Tournesol : import d’une image, programmation aujourd’hui, puis insertion dans un profil Instagram fictif. Compteurs et badge de vérification simulés." sx={{ position: 'relative', width: '100%', aspectRatio: '1312/567' }}>
    <Box aria-hidden="true" className="stage-draft" sx={{ position: 'absolute', width: '23.247%', left: 0, top: '6.35%', zIndex: 2 }}><DraftPreview phase={phase} animated={animated} /></Box>
    <Box aria-hidden="true" className="stage-calendar" sx={{ position: 'absolute', width: '52.896%', left: '24.01%', top: '12.7%' }}><CalendarPreview date={date} animated={animated} /></Box>
    <Box aria-hidden="true" className="stage-phone" sx={{ position: 'absolute', width: '21.57%', left: '78.58%', top: 0, zIndex: 3 }}><PhonePreview animated={animated} published={phase === 'published'} /></Box>
    {animated && <Box aria-hidden="true" className="journey-traveller" sx={{ position: 'absolute', left: 0, top: 0, transformOrigin: '0 0', zIndex: 4, pointerEvents: 'none', overflow: 'hidden', borderRadius: '4px', opacity: 0 }}><Image src={photo} alt="" fill sizes="260px" style={{ objectFit: 'cover' }} /></Box>}
  </Box>;
}
