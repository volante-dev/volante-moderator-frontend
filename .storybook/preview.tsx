import type { Preview } from '@storybook/nextjs-vite';
import { ThemeProvider } from '../theme/ThemeProvider';
import '../app/globals.css';

const preview: Preview = {
  decorators: [Story => <ThemeProvider><Story /></ThemeProvider>],
  parameters: {
    layout: 'padded',
    a11y: { test: 'error' },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: { storySort: { order: ['Fondations', 'Composants', 'Produit', 'Sections', 'Pages'] } },
  },
  tags: ['autodocs'],
};
export default preview;
