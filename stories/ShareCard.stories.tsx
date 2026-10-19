import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ShareCard } from '@/components/product/ShareCard';
const meta = { title: 'Produit/Partage social', component: ShareCard, parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'reset' }, docs: { description: { component: 'Composition MUI capturée pour opengraph-image.png. Régénérer avec npm run assets:brand après un changement de marque, puis conserver la provenance du rendu.' } } } } satisfies Meta<typeof ShareCard>;
export default meta;
export const ImageSociale: StoryObj<typeof meta> = {};
