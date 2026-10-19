'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import photo from '@/public/images/draft-photo.png';
import { Surface } from '@/components/ui/Surface';
import { useDemoDate } from '@/hooks/useDemoDate';
import { GalleryTile } from './GalleryTile';
import { demoPost, buildCalendar } from './demo';

export function CalendarPreview({ date, animated = false }: { date?: string; animated?: boolean }) {
  const currentDate = useDemoDate(date);
  const calendar = currentDate ? buildCalendar(currentDate) : null;
  return <Surface data-calendar-date={currentDate ?? ''} sx={{ width: '100%', aspectRatio: '694/474', containerType: 'inline-size', px: '3.45%', py: '2.7%' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', height: '5.8cqw', mb: '1.7cqw', gap: '2cqw', pl: '1.2cqw' }}>
      <ChevronLeft sx={{ fontSize: '2.7cqw' }} /><Typography sx={{ fontFamily: 'h3.fontFamily', fontWeight: 500, fontSize: '3.8cqw', textTransform: 'capitalize', whiteSpace: 'nowrap' }}>{calendar?.label ?? 'Votre calendrier'}</Typography>
      <ChevronRight sx={{ fontSize: '2.7cqw', ml: 'auto' }} /><Box sx={{ display: 'flex', width: '29cqw', gap: '.35cqw', fontSize: '1.8cqw' }}>{['Mois','Semaine','Liste'].map((label, index) => <Box key={label} sx={{ flex: 1, textAlign: 'center', py: '1.5cqw', borderRadius: '4px', bgcolor: index === 0 ? 'secondary.main' : 'action.hover' }}>{label}</Box>)}</Box>
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', height: '4.6cqw', alignItems: 'center', textAlign: 'center', fontSize: '1.7cqw' }}>{['lun.','mar.','mer.','jeu.','ven.','sam.','dim.'].map(day => <Box key={day}>{day}</Box>)}</Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7,minmax(0,1fr))', gridTemplateRows: `repeat(${calendar?.rows ?? 5},1fr)`, aspectRatio: '647/352', borderTop: 1, borderLeft: 1, borderColor: 'divider', borderRadius: '4px', overflow: 'hidden' }}>
      {calendar?.days.map(({ iso, day, outside, selected, post }) => <Box key={iso} data-today={selected || undefined} sx={{ borderBottom: 1, borderRight: 1, borderColor: 'divider', minWidth: 0, overflow: 'hidden', px: '.65cqw', pt: '.5cqw', color: outside ? 'text.secondary' : 'text.primary', bgcolor: selected ? 'action.hover' : 'transparent' }}>
        <Box sx={{ width: '3.5cqw', height: '2.7cqw', mx: 'auto', display: 'grid', placeItems: 'center', fontSize: '1.6cqw', borderRadius: '3px', bgcolor: selected ? 'secondary.main' : 'transparent' }}>{day}</Box>
        {selected ? <Box className="calendar-post" sx={{ mt: '.4cqw', opacity: animated ? 'var(--calendar-arrival,0)' : 1, fontSize: '1.45cqw', lineHeight: 1.2 }}><Box sx={{ display: 'flex', alignItems: 'center', gap: '.5cqw', mb: '.4cqw' }}><Box data-travel-target="calendar" sx={{ position: 'relative', width: '3.2cqw', aspectRatio: '4/5', flexShrink: 0, overflow: 'hidden', borderRadius: '2px' }}><Image src={photo} alt="" fill sizes="32px" style={{ objectFit: 'cover' }} /></Box><Box>{demoPost.time}<Box sx={{ color: 'primary.main', fontSize: '1.2cqw' }}>Aujourd’hui</Box></Box></Box><Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Un nouvel espace…</Box></Box>
        : post && <Box data-calendar-fiction="true" sx={{ mt: '.4cqw', fontSize: '1.35cqw', lineHeight: 1.2 }}><Box sx={{ display: 'flex', alignItems: 'center', gap: '.5cqw', mb: '.4cqw' }}><Box sx={{ width: '3.2cqw', aspectRatio: '4/5', flexShrink: 0, overflow: 'hidden', borderRadius: '2px' }}><GalleryTile index={post.tile} /></Box>{post.time}</Box><Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.caption}</Box></Box>}
      </Box>)}
    </Box>
  </Surface>;
}
