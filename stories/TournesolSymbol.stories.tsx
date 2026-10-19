import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Box from '@mui/material/Box';
import { TournesolSymbol } from '@/components/ui/TournesolSymbol';

const meta = {
  title: 'Composants/Symbole Tournesol',
  component: TournesolSymbol,
  parameters: { layout: 'centered' },
  args: { size: 220, animated: true },
} satisfies Meta<typeof TournesolSymbol>;
export default meta;
type Story = StoryObj<typeof meta>;
export const PetalesAnimes: Story = {};
export const SurBleuNuit: Story = { decorators: [Story => <Box sx={{ bgcolor: 'primary.dark', p: 5 }}><Story /></Box>] };
export const Statique: Story = { args: { animated: false } };
export const Icone: Story = { args: { size: 192, animated: false }, parameters: { layout: 'fullscreen', backgrounds: { disable: true } } };
