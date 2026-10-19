import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Section } from '@/components/ui/Section';
import { ModerationDemo } from '@/components/product/ModerationDemo';

export function ModerationSection() {
  return <Section id="moderation" aria-labelledby="moderation-title" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '.85fr 1.15fr' }, gap: { xs: 5, md: 10 }, alignItems: 'center' }}>
    <Box>
      <Typography id="moderation-title" variant="h2">Vos échanges,<br />au même endroit.</Typography>
      <Typography color="text.secondary" sx={{ mt: 3, maxWidth: '36ch', fontSize: { xs: 19, md: 22 } }}>Un contenu publié ouvre une conversation. Retrouvez les commentaires, examinez-les et choisissez ceux qui restent visibles.</Typography>
      <Typography color="text.secondary" sx={{ mt: 2, maxWidth: '38ch' }}>Les règles de modération accompagnent votre travail. L’historique permet de suivre les actions et de rétablir un commentaire masqué.</Typography>
      <Typography sx={{ mt: 4, color: 'primary.dark' }}>À vous d’essayer la modération.</Typography>
    </Box>
    <ModerationDemo />
  </Section>;
}
