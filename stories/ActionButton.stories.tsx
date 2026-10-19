import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { fn } from 'storybook/test';
import { ActionButton } from '@/components/ui/ActionButton';

const meta = { title: 'Composants/ActionButton', component: ActionButton, args: { children: 'Ouvrir Tournesol', onClick: fn() }, argTypes: { color: { control: 'select', options: ['primary', 'secondary'] }, variant: { control: 'select', options: ['contained', 'outlined', 'text'] } }, parameters: { docs: { description: { component: 'Dérivé direct de MUI Button. Aplat, rayon 4px, cible de 44px minimum. Le lien conserve la sémantique native via href. Tous les états MUI sont disponibles.' } } } } satisfies Meta<typeof ActionButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Principal: Story = {};
export const CyanGlacier: Story = { args: { color: 'secondary', endIcon: <ArrowForwardRounded /> } };
export const Secondaire: Story = { args: { variant: 'outlined', children: 'Revenir au brouillon' } };
export const Discret: Story = { args: { variant: 'text', children: 'Découvrir le produit' } };
export const Chargement: Story = { args: { loading: true, children: 'Enregistrer' } };
export const Indisponible: Story = { args: { disabled: true, children: 'Programmer' } };
