'use client';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import PersonOutline from '@mui/icons-material/PersonOutlined';
import Add from '@mui/icons-material/Add';
import Menu from '@mui/icons-material/Menu';
import GridOn from '@mui/icons-material/GridOn';
import MovieOutlined from '@mui/icons-material/MovieOutlined';
import AssignmentIndOutlined from '@mui/icons-material/AssignmentIndOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import Search from '@mui/icons-material/Search';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';
import Wifi from '@mui/icons-material/Wifi';
import BatteryFull from '@mui/icons-material/BatteryFull';
import Verified from '@mui/icons-material/Verified';
import photo from '@/public/images/draft-photo.png';
import { TournesolSymbol } from '@/components/ui/TournesolSymbol';
import { tokens as t } from '@/theme/tokens';
import { demoPost } from './demo';
import { GalleryTile } from './GalleryTile';

export function PhonePreview({ animated = false, published = true }: { animated?: boolean; published?: boolean }) {
  return <Box data-phone-preview sx={{ width: '100%', aspectRatio: '283/567', containerType: 'inline-size', borderRadius: `${t.radius.phone}px`, p: '2.5%', bgcolor: t.color.phone, boxShadow: '10px 14px 24px rgba(24,36,62,.2), -2px -2px 3px rgba(255,255,255,.9)', position: 'relative' }}>
    <Box sx={{ width: '100%', height: '100%', borderRadius: '36px', bgcolor: 'common.white', overflow: 'hidden', fontFamily: t.font.native, color: t.color.instagram, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', px: '9cqw', alignItems: 'center', height: '13.3cqw', flexShrink: 0, fontSize: '3.1cqw', fontWeight: 600 }}>9:41<Box sx={{ position: 'absolute', width: '39%', height: '7cqw', bgcolor: t.color.phone, top: '-1cqw', left: '31%', borderRadius: '0 0 10px 10px' }} /><Box sx={{ display: 'flex', gap: '.8cqw', '& svg': { fontSize: '3.9cqw' } }}><Wifi /><BatteryFull /></Box></Box>
      <Box sx={{ px: '5cqw', display: 'flex', alignItems: 'center', height: '10cqw', flexShrink: 0, gap: '1.6cqw', fontSize: '5cqw', fontWeight: 600 }}>{demoPost.account}<Verified data-verified-demo sx={{ color: '#3897F0', fontSize: '4.5cqw' }} /><Box sx={{ ml: 'auto', display: 'flex', gap: '3cqw', '& svg': { fontSize: '7cqw' } }}><Add /><Menu /></Box></Box>
      <Box sx={{ display: 'flex', alignItems: 'center', px: '5cqw', gap: '3cqw', height: '27cqw', flexShrink: 0 }}><Avatar sx={{ bgcolor: '#F1F4FA', width: '20cqw', height: '20cqw', p: '2cqw' }}><TournesolSymbol size="100%" animated={false} /></Avatar>{[[String(demoPost.publications + Number(published)), 'publications'], [demoPost.followers,'abonnés'], [String(demoPost.following),'abonnements']].map(([value,label]) => <Box key={label} sx={{ flex: 1, textAlign: 'center', fontSize: '2.7cqw', color: t.color.instagram }}><Box data-post-count={label === 'publications' || undefined} sx={{ mb: '1cqw', fontSize: '4.6cqw', fontWeight: 600 }}>{value}</Box>{label}</Box>)}</Box>
      <Box sx={{ px: '5cqw', height: '19cqw', flexShrink: 0, fontSize: '3.4cqw', lineHeight: 1.5 }}><Box sx={{ fontWeight: 600 }}>{demoPost.name}</Box>Le quotidien, sous un autre jour.<Box sx={{ color: t.color.nativeMuted, fontSize: '3cqw' }}>Compte de démonstration</Box></Box>
      <Box sx={{ display: 'flex', mx: '4cqw', gap: '2cqw', mb: '3cqw', fontSize: '3.4cqw', fontWeight: 600 }}>{['Modifier le profil','Partager'].map(label => <Box key={label} sx={{ flex: 1, py: '2cqw', textAlign: 'center', bgcolor: '#EFEFEF', borderRadius: '4px' }}>{label}</Box>)}</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '12cqw', flexShrink: 0, '& svg': { fontSize: '6.1cqw' } }}><GridOn /><MovieOutlined sx={{ color: t.color.nativeMuted }} /><AssignmentIndOutlined sx={{ color: t.color.nativeMuted }} /></Box>
      <Box data-instagram-grid sx={{ containerType: 'inline-size', position: 'relative', width: '100%', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        {Array.from({ length: 8 }, (_, index) => {
          const col = index % 3, row = Math.floor(index / 3);
          const shift = animated ? 'var(--feed-shift,0)' : published ? '1' : '0';
          return <Box key={index} data-feed-existing={index} sx={{ position: 'absolute', left: `${col * 100 / 3}%`, top: `${row * 100 / 3 * 1.25}cqw`, width: 'calc(100% / 3)', aspectRatio: '4/5', p: '1px', transform: `translate(calc(${shift} * ${col === 2 ? -200 : 100}%),calc(${shift} * ${col === 2 ? 100 : 0}%))` }}><GalleryTile index={index + 1} /></Box>;
        })}
        <Box data-travel-target="feed" data-feed-new data-published={published} sx={{ position: 'absolute', top: 0, left: 0, width: 'calc(100% / 3)', aspectRatio: '4/5', p: '1px', opacity: animated ? 'var(--feed-arrival,0)' : Number(published) }}><Box sx={{ position: 'relative', width: '100%', height: '100%' }}><Image src={photo} alt="" fill sizes="90px" style={{ objectFit: 'cover' }} /></Box></Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '13cqw', flexShrink: 0, '& svg': { fontSize: '6.2cqw' }, borderTop: `1px solid ${t.color.nativeLine}` }}><HomeOutlined /><Search /><AddBoxOutlined /><MovieOutlined /><PersonOutline /></Box>
      <Box sx={{ width: '32%', height: '1.3cqw', bgcolor: t.color.instagram, borderRadius: '4px', mx: 'auto', mb: '2.3cqw', flexShrink: 0 }} />
    </Box>
  </Box>;
}
