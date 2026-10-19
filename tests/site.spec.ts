import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Server-rendered content, canonical identity and crawl routes', async ({ request }) => {
  const response = await request.get('/');
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect(html).toContain('<html lang="fr"');
  expect(html).toMatch(/rel="canonical" href="https:\/\/tournesol.vlnt.st\/?"/);
  expect(html).toContain('application/ld+json');
  expect(html).toContain('WebApplication');
  expect(html).toContain('Vos échanges,');
  expect(html).toContain('WR EURL');
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('https://tournesol.vlnt.st/sitemap.xml');
  const sitemap = await request.get('/sitemap.xml');
  expect(await sitemap.text()).toContain('<loc>https://tournesol.vlnt.st</loc>');
  const missing = await request.get('/page-inexistante');
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain('noindex');
});

test('Page is accessible and fits the viewport', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Du brouillonà la publication.');
  await page.evaluate(() => document.fonts.ready);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
});

test('Moderation demo masks and restores without sending a request', async ({ page }) => {
  const writes: string[] = [];
  page.on('request', request => { if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method())) writes.push(request.url()); });
  await page.goto('/');
  await page.getByRole('button', { name: 'Masquer le commentaire de Sam' }).click();
  await expect(page.getByRole('status')).toContainText('Sam : commentaire masqué');
  await page.getByRole('tab', { name: 'Masqués · 1' }).click();
  await page.getByRole('button', { name: 'Rétablir le commentaire de Sam' }).click();
  await expect(page.getByRole('status')).toContainText('Sam : commentaire rétabli');
  await expect(page.getByText('Aucun commentaire masqué.')).toBeVisible();
  expect(writes).toEqual([]);
});

test('Mobile navigation, step tabs and native accordion work', async ({ page }, testInfo) => {
  await page.goto('/');
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    await page.getByRole('menuitem', { name: 'Le produit' }).click();
    await expect(page.getByRole('menu')).not.toBeVisible();
    await page.getByRole('tab', { name: 'Calendrier', exact: true }).click();
    await expect(page.getByRole('tabpanel').filter({ hasText: 'Choisissez le moment.' })).toBeVisible();
    await page.getByRole('tab', { name: 'Aperçu', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Imaginez votre fil.' }).first()).toBeVisible();
  }
  await page.getByRole('button', { name: 'Un brouillon reste un brouillon' }).click();
  await expect(page.getByText('L’enregistrement n’envoie rien sur Instagram.', { exact: false })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Ouvrir Tournesol', exact: true })).toHaveAttribute('href', 'https://moderator.vlnt.st');
});
