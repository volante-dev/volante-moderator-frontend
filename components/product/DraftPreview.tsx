'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import AddPhotoAlternateOutlined from '@mui/icons-material/AddPhotoAlternateOutlined';
import Check from '@mui/icons-material/Check';
import Image from 'next/image';
import photo from '@/public/images/draft-photo.png';
import { Surface } from '@/components/ui/Surface';
import { demoPost, type JourneyPhase } from './demo';

export function DraftPreview({ phase = 'draft', animated = false }: { phase?: JourneyPhase; animated?: boolean }) {
  return <Box sx={{ containerType: 'inline-size' }}><Surface className="draft-preview" sx={{ width: '100%', aspectRatio: '305/529', px: '7.2%', overflow: 'hidden' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', height: '17.7cqw', gap: '5cqw', pl: '3.3cqw' }}><ChevronLeft sx={{ fontSize: '6cqw' }} /><Typography sx={{ fontSize: '4.6cqw' }}>Brouillon</Typography></Box>
    <Box data-travel-target="draft" sx={{ position: 'relative', width: '100%', aspectRatio: '260/251', borderRadius: '4px', overflow: 'hidden', bgcolor: 'action.hover' }}>
      <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3cqw', border: '1px dashed', borderColor: 'divider', borderRadius: '4px' }}><AddPhotoAlternateOutlined sx={{ fontSize: '12cqw', color: 'primary.main' }} /><Typography sx={{ fontSize: '4.5cqw' }}>Ajouter votre image</Typography><Typography sx={{ fontSize: '3.5cqw', color: 'text.secondary' }}>JPG, PNG · format 4:5 conseillé</Typography></Box>
      <Box className="draft-upload-image" sx={{ position: 'absolute', inset: 0, clipPath: animated ? 'inset(0 0 var(--upload-mask,100%) 0)' : undefined }}><Image src={photo} alt="" fill sizes="(max-width: 899px) 260px, 18vw" style={{ objectFit: 'cover' }} preload /></Box>
      {phase === 'uploading' && <Box sx={{ position: 'absolute', left: '5%', right: '5%', bottom: '6%', p: '3cqw', bgcolor: 'background.paper', borderRadius: '4px' }}><Typography sx={{ fontSize: '3.6cqw', mb: '2cqw' }}>Import de l’image…</Typography><Box sx={{ height: 3, bgcolor: 'divider', overflow: 'hidden' }}><Box sx={{ height: '100%', bgcolor: 'primary.main', transformOrigin: 'left', transform: 'scaleX(var(--upload-progress,0))' }} /></Box></Box>}
    </Box>
    <Box sx={{ mt: '4cqw', minHeight: '24cqw', px: '3.4cqw', py: '2cqw', border: 1, borderColor: 'divider', borderRadius: '4px' }}>
      <Typography sx={{ fontSize: '3.4cqw', color: 'text.secondary' }}>Légende</Typography><Typography sx={{ fontSize: '4cqw', lineHeight: 1.5 }}>{demoPost.caption}</Typography>
      <Typography sx={{ fontSize: '3.3cqw', textAlign: 'right', color: 'text.secondary', mt: '1cqw' }}>{demoPost.caption.length}/2200</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', mt: '4cqw', height: '14cqw', px: '3cqw', border: 1, borderColor: 'divider', borderRadius: '4px', gap: '4cqw' }}><DescriptionOutlined sx={{ fontSize: '6cqw' }} /><Typography sx={{ fontSize: '3.8cqw', lineHeight: 1.35 }}>Format<Box component="span" sx={{ display: 'block' }}>Photo</Box></Typography><ChevronRight sx={{ ml: 'auto', fontSize: '5cqw' }} /></Box>
    <Box sx={{ mt: '4.1cqw', height: '12cqw', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2cqw', bgcolor: 'primary.main', color: 'common.white', borderRadius: '4px', fontSize: '4.5cqw' }}>{['ready','uploading'].includes(phase) ? 'Enregistrer en brouillon' : <><Check sx={{ fontSize: '5cqw' }} />Brouillon enregistré</>}</Box>
  </Surface></Box>;
}
