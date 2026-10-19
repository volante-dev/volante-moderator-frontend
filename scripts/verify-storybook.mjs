import { chromium, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const origin = process.env.STORYBOOK_URL || 'http://127.0.0.1:6006';
let response;
for (let attempt = 0; attempt < 30; attempt++) {
  try { response = await fetch(`${origin}/index.json`); if (response.ok) break; } catch { /* Server startup is bounded below. */ }
  await new Promise(resolve => setTimeout(resolve, 1000));
}
if (!response) throw new Error(`Storybook did not start at ${origin} within 30 seconds`);
if (!response.ok) throw new Error(`Storybook index: HTTP ${response.status}`);
await mkdir('.impeccable/review', { recursive: true });
const index = await response.json();
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const results = [];
let currentStory = '';
try {
  for (const entry of Object.values(index.entries).filter(entry => entry.type === 'story' && (!process.env.STORY_ID || entry.id === process.env.STORY_ID))) {
    currentStory = entry.id;
    await page.goto(`${origin}/iframe.html?id=${entry.id}&viewMode=story`, { waitUntil: 'networkidle' });
    // Image-only stories have no textContent but still render meaningful content.
    await expect(page.locator('#storybook-root > :visible').first()).toBeVisible();
    await expect(page.locator('.sb-errordisplay')).not.toBeVisible();
    if (entry.id.endsWith('--moderation')) {
      await page.getByRole('button', { name: 'Masquer le commentaire de Sam' }).click();
      await expect(page.getByRole('status')).toContainText('Sam : commentaire masqué');
      await page.getByRole('tab', { name: 'Masqués · 1' }).click();
      await page.getByRole('button', { name: 'Rétablir le commentaire de Sam' }).click();
      await expect(page.getByRole('status')).toContainText('Sam : commentaire rétabli');
    }
    if (entry.id.endsWith('--fenetre-frostee')) {
      await expect(page.getByRole('dialog')).not.toBeVisible();
      await page.getByRole('button', { name: 'Ouvrir la fenêtre' }).click();
      await expect(page.getByRole('dialog')).toBeVisible();
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
      expect(axe.violations).toEqual([]);
      await page.screenshot({ path: '.impeccable/review/storybook-dialog.png' });
      await page.keyboard.press('Escape');
      await expect(page.getByRole('button', { name: 'Ouvrir la fenêtre' })).toBeFocused();
    }
    results.push(entry.id);
  }
  expect(errors).toEqual([]);
  await writeFile('.impeccable/review/storybook-checks.json', JSON.stringify({ rendered: results.length, stories: results, errors }, null, 2));
  console.log(`${results.length} stories rendered. Browser interactions and dialog accessibility passed.`);
} catch (error) {
  console.error(JSON.stringify({ story: currentStory, errors, body: (await page.locator('body').innerText()).slice(0, 3000) }));
  throw error;
} finally { await browser.close(); }
