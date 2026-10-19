import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Surface } from '@/components/ui/Surface';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ActionButton } from '@/components/ui/ActionButton';
import { GlassDialog } from '@/components/ui/GlassDialog';
import { InfoAccordion } from '@/components/ui/InfoAccordion';

const meta = { title: 'Composants/Matières', parameters: { docs: { description: { component: 'Paper, Dialog, Accordion et champs MUI utilisent les mêmes tokens. Le fond et la face des surfaces en relief sont identiques. La lumière vient du haut et de la gauche. Les boutons restent plats.' } } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Surfaces: Story = { render: () => <Box sx={{ p: 4, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 6 }}>{(['raised','flat','ink'] as const).map(tone => <Surface key={tone} tone={tone} sx={{ p: 4 }}><Typography variant="h3">{tone}</Typography><Typography sx={{ mt: 2 }}>Une matière commune, une hiérarchie lisible.</Typography></Surface>)}</Box> };
export const Logotype: Story = { render: () => <Box sx={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}><BrandLogo /><BrandLogo compact /><Surface tone="ink" sx={{ p: 4 }}><BrandLogo inverse /></Surface></Box> };
function DialogExample() {
  const [open, setOpen] = useState(false);
  return <><ActionButton onClick={() => setOpen(true)}>Ouvrir la fenêtre</ActionButton><GlassDialog open={open} title="Choisir un horaire" onClose={() => setOpen(false)} actions={<ActionButton onClick={() => setOpen(false)}>Fermer la démonstration</ActionButton>}><Typography>Le fond frosté conserve la profondeur du contexte. Ceci est une démonstration du composant, aucun contenu n’est programmé.</Typography></GlassDialog></>;
}
export const FenetreFrostee: Story = { render: () => <DialogExample /> };
export const Champs: Story = { render: () => <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', p: 2 }}><TextField label="Légende" defaultValue="Un nouvel espace pour créer." /><TextField label="Horaire" error helperText="Choisissez un horaire dans le futur." defaultValue="Hier, 09:00" /><TextField label="Compte" disabled defaultValue="Compte non connecté" /></Box> };
export const Accordeon: Story = { render: () => <Box sx={{ maxWidth: 700 }}><InfoAccordion id="story-accordion" title="Un brouillon reste un brouillon"><Typography>Son enregistrement ne déclenche aucune publication.</Typography></InfoAccordion></Box> };
