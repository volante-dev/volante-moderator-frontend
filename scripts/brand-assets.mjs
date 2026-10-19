import { chromium } from '@playwright/test';

const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: 'reduce' });
await page.goto(`${process.env.STORYBOOK_URL || 'http://127.0.0.1:6006'}/iframe.html?id=produit-partage-social--image-sociale&viewMode=story`, { waitUntil: 'networkidle' });
await page.getByText('Du brouillon à la publication.').waitFor();
await page.evaluate(() => document.fonts.ready);
await page.locator('img').evaluateAll(images => { images.forEach(image => { image.loading = 'eager'; }); return Promise.all(images.map(image => image.decode().catch(() => {}))); });
await page.screenshot({ path: 'app/opengraph-image.png', animations: 'disabled' });
await page.goto(`${process.env.STORYBOOK_URL || 'http://127.0.0.1:6006'}/iframe.html?id=composants-symbole-tournesol--icone&viewMode=story`, { waitUntil: 'networkidle' });
const symbol = page.locator('[data-tournesol-symbol]');
await symbol.locator('img').evaluate(image => image.decode());
await page.addStyleTag({ content: 'html, body, #storybook-root { background: transparent !important; }' });
await symbol.screenshot({ path: 'app/icon.png', omitBackground: true });
await symbol.evaluate(element => { element.style.width = '180px'; });
await symbol.screenshot({ path: 'app/apple-icon.png', omitBackground: true });
await browser.close();
