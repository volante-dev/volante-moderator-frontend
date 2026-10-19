'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import gallery from '@/public/images/phone-gallery.png';
/** Crop one photograph from the original 3×3 contact sheet without stretching it. */
export function GalleryTile({ index }: { index: number }) {
  const tile = index % 9;
  return <Box sx={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
    <Image src={gallery} alt="" width={1254} height={1254} sizes="450px" draggable={false} style={{ position: 'absolute', maxWidth: 'none', width: '375%', height: '300%', left: `${-(tile % 3) * 125 - 12.5}%`, top: `${-Math.floor(tile / 3) * 100}%` }} />
  </Box>;
}
