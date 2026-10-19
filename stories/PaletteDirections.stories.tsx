import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Box, Typography, Button, Chip } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { paletteDirections } from '@/theme/paletteDirections';

const meta = { title: 'Décisions/Identité couleur', parameters: { layout: 'fullscreen', docs: { description: { component: 'Trois propositions appliquées à la même composition. Le choix sera partagé par le site et l’admin. Valeurs et activités fictives.' } } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Comparaison: Story = { render: () => <Box sx={{ p: { xs: 3, md: 5 }, bgcolor: '#E9EBF0' }}>
  <Typography variant="h3" component="h1" sx={{ color: '#17264B', mb: 1 }}>Une couleur à soi.</Typography>
  <Typography sx={{ color: '#59647B', mb: 4 }}>Tournesol · trois directions pour le site et l’application</Typography>
  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3,minmax(0,1fr))' }, gap: 4 }}>
    {paletteDirections.map(p => <Box key={p.id} sx={{ color: p.deep }}>
      <Typography variant="h4" sx={{ mb: 1 }}>{p.letter} — {p.name}</Typography>
      <Typography variant="body2" sx={{ color: '#59647B', minHeight: 48, mb: 2 }}>{p.description}</Typography>
      <Box sx={{ bgcolor: p.paper, borderRadius: '16px', overflow: 'hidden', boxShadow: '6px 10px 22px #17264B14' }}>
        <Box sx={{ p: 4, '& [role="img"]': { color: p.deep } }}>
          <BrandLogo compact />
          <Typography component="h2" sx={{ fontFamily: 'h1.fontFamily', fontWeight: 500, fontSize: 'clamp(32px,3.1vw,54px)', lineHeight: 1.08, letterSpacing: '-.03em', mt: 6, mb: 2 }}>Du brouillon<br />à la publication.</Typography>
          <Typography sx={{ color: p.muted, fontSize: 18, mb: 3 }}>Vos idées prennent place.<br />Votre communauté aussi.</Typography>
          <Button endIcon={<ArrowForward />} sx={{ bgcolor: p.primary, color: '#fff', '&:hover': { bgcolor: p.deep } }}>Découvrir Tournesol</Button>
        </Box>
        <Box sx={{ mx: 3, mb: 3, p: 3, borderRadius: '16px', boxShadow: '-8px -8px 18px #FFFFFF,8px 10px 20px #17264B14', bgcolor: p.paper }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Typography sx={{ fontSize: 22 }}>Votre semaine</Typography><CalendarMonthOutlined sx={{ color: p.primary }} /></Box>
          <Box sx={{ display: 'flex', gap: 2, mt: 2, alignItems: 'center' }}><Typography sx={{ fontSize: 68, lineHeight: 1, color: p.primary }}>12</Typography><Typography sx={{ color: p.muted, fontSize: 16, lineHeight: 1.4 }}>publications<br />prêtes à partir</Typography></Box>
          <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>{['Liste','Calendrier','Aperçu'].map((label, i) => <Box key={label} sx={{ bgcolor: i === 1 ? p.accent : p.light, px: 1.5, py: 1, borderRadius: '4px', fontSize: 14 }}>{label}</Box>)}</Box>
          <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: .5 }}>{Array.from({ length: 14 }, (_, i) => <Box key={i} sx={{ height: 30, display: 'grid', placeItems: 'center', borderTop: `1px solid ${p.line}`, bgcolor: i === 8 ? p.accent : 'transparent', color: i === 8 ? p.deep : p.muted, fontSize: 13 }}>{i + 12}</Box>)}</Box>
        </Box>
        <Box sx={{ p: 3, background: `linear-gradient(115deg,${p.deep},${p.primary})`, color: '#fff', display: 'flex', gap: 2, alignItems: 'center' }}><ChatBubbleOutline /><Box><Typography sx={{ fontSize: 18 }}>Le fil de vos échanges.</Typography><Typography sx={{ fontSize: 14, color: '#FFFFFFD9' }}>6 commentaires à retrouver</Typography></Box><Chip label="À lire" size="small" sx={{ ml: 'auto', bgcolor: p.accent, color: p.deep, borderRadius: '4px' }} /></Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 2, gap: 1 }}>{[p.deep,p.primary,p.accent,p.paper].map(color => <Box key={color} sx={{ flex: 1 }}><Box sx={{ height: 28, bgcolor: color, borderRadius: '4px' }} /><Typography sx={{ fontSize: 12, color: '#59647B', mt: .5 }}>{color}</Typography></Box>)}</Box>
    </Box>)}
  </Box>
</Box> };
