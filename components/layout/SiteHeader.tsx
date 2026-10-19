'use client';
import { useId, useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ActionButton } from '@/components/ui/ActionButton';
import { site } from '@/lib/site';
import { tokens } from '@/theme/tokens';

export function SiteHeader() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const id = useId();
  return <Box component="header" sx={{ position: 'relative', zIndex: 5, width: '85.42%', maxWidth: tokens.space.maxWidth, mx: 'auto', height: { xs: 84, md: 80 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', '@media (max-width: 899px)': { width: 'calc(100% - 40px)' } }}>
    <Link href="#contenu" className="skip-link">Aller au contenu</Link>
    <Link href="/" aria-label="Tournesol, accueil" sx={{ display: 'inline-flex', textDecoration: 'none' }}><BrandLogo /></Link>
    <Box component="nav" aria-label="Navigation principale" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4.5 }}>
      <Link href="#produit" color="text.primary" sx={{ fontSize: 15 }}>Le produit</Link>
      <Link href="#studio" color="text.primary" sx={{ fontSize: 15 }}>Studio Volante</Link>
      <ActionButton href={site.appUrl} sx={{ fontSize: 15, minWidth: 134 }}>Se connecter</ActionButton>
    </Box>
    <IconButton id={`${id}-button`} aria-label="Ouvrir le menu" aria-controls={anchor ? `${id}-menu` : undefined} aria-expanded={Boolean(anchor)} aria-haspopup="menu" onClick={event => setAnchor(event.currentTarget)} sx={{ display: { md: 'none' } }}><MenuOutlined /></IconButton>
    <Menu id={`${id}-menu`} anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)} slotProps={{ list: { 'aria-labelledby': `${id}-button` }, paper: { sx: { p: 1, mt: 1, minWidth: 220 } } }}>
      <MenuItem component="a" href="#produit" onClick={() => setAnchor(null)}>Le produit</MenuItem>
      <MenuItem component="a" href="#studio" onClick={() => setAnchor(null)}>Studio Volante</MenuItem>
      <MenuItem component="a" href={site.appUrl}>Se connecter</MenuItem>
    </Menu>
  </Box>;
}
