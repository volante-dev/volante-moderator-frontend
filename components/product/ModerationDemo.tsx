'use client';
import { useId, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import UndoOutlined from '@mui/icons-material/UndoOutlined';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import { Surface } from '@/components/ui/Surface';
import { ActionButton } from '@/components/ui/ActionButton';

const comments = [
  { id: 'lea', name: 'Léa', handle: 'lea.demo', content: 'Cette lumière donne envie de s’installer ici pour la journée.' },
  { id: 'alex', name: 'Alex', handle: 'alex.demo', content: 'Comment peut-on découvrir votre atelier ?' },
  { id: 'sam', name: 'Sam', handle: 'sam.demo', content: 'Un commentaire à masquer pour essayer la modération.' },
];

export function ModerationDemo({ initialHidden = [] }: { initialHidden?: string[] }) {
  const [hidden, setHidden] = useState(initialHidden);
  const [tab, setTab] = useState(0);
  const [notice, setNotice] = useState('Essayez de masquer un commentaire, puis de le rétablir.');
  const id = useId();
  const visibleComments = comments.filter(comment => hidden.includes(comment.id) === Boolean(tab));

  function toggle(commentId: string, name: string) {
    const wasHidden = hidden.includes(commentId);
    setHidden(previous => wasHidden ? previous.filter(value => value !== commentId) : [...previous, commentId]);
    setNotice(`${name} : commentaire ${wasHidden ? 'rétabli' : 'masqué'} dans cette démonstration.`);
  }

  return <Surface sx={{ p: { xs: 2.5, sm: 4 }, position: 'relative' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}><ChatBubbleOutlineRounded /><Typography variant="h4" component="h3">Les commentaires</Typography></Box>
      <Typography variant="caption" color="text.secondary">Démo interactive</Typography>
    </Box>
    <Tabs value={tab} onChange={(_, value: number) => setTab(value)} aria-label="Commentaires de démonstration" sx={{ mb: 1 }}>
      <Tab label={`Visibles · ${comments.length - hidden.length}`} id={`${id}-tab-0`} aria-controls={`${id}-panel-0`} />
      <Tab label={`Masqués · ${hidden.length}`} id={`${id}-tab-1`} aria-controls={`${id}-panel-1`} />
    </Tabs>
    <Box role="tabpanel" id={`${id}-panel-${tab}`} aria-labelledby={`${id}-tab-${tab}`} sx={{ minHeight: { xs: 380, sm: 340 } }}>
      {visibleComments.length === 0 ? <Box sx={{ py: 7, textAlign: 'center' }}><Typography variant="h4" component="p">{tab ? 'Aucun commentaire masqué.' : 'Tous les commentaires sont masqués.'}</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>{tab ? 'Les commentaires masqués apparaîtront ici.' : 'Ouvrez « Masqués » pour les rétablir.'}</Typography></Box> : visibleComments.map(comment => <Box key={comment.id} sx={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 1.5, py: 2.5, '& + &': { borderTop: '1px solid', borderColor: 'divider' } }}>
        <Avatar sx={{ width: 36, height: 36, bgcolor: 'action.selected', color: 'text.primary', fontSize: 16 }}>{comment.name[0]}</Avatar>
        <Box><Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap' }}><Typography sx={{ fontWeight: 500 }}>{comment.name}</Typography><Typography variant="caption" color="text.secondary">@{comment.handle}</Typography></Box>
          <Typography sx={{ fontSize: 17, mt: .25 }}>{comment.content}</Typography>
          <ActionButton variant="text" size="small" startIcon={tab ? <UndoOutlined /> : <VisibilityOffOutlined />} aria-label={`${tab ? 'Rétablir' : 'Masquer'} le commentaire de ${comment.name}`} onClick={() => toggle(comment.id, comment.name)} sx={{ px: 0, mt: .5, fontSize: 14 }}>{tab ? 'Rétablir' : 'Masquer'}</ActionButton>
        </Box>
      </Box>)}
    </Box>
    <Typography role="status" aria-live="polite" variant="caption" sx={{ display: 'block', color: 'text.secondary', pt: 2, borderTop: '1px solid', borderColor: 'divider', minHeight: 57 }}>{notice}</Typography>
  </Surface>;
}
