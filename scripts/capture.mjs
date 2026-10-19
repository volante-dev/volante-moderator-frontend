import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH });
await mkdir('.impeccable/review/oct19', { recursive: true });
const readings = [];
const base = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3117';
for (const [name, width, height] of [['desktop',1440,1000],['mobile',390,844],['brave-1280',1280,650]]) {
  const page = await browser.newPage({ viewport: { width, height }, reducedMotion: 'reduce' });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.locator('img').evaluateAll(images => { images.forEach(image => { image.loading = 'eager'; }); return Promise.all(images.map(image => image.decode().catch(() => {}))); });
  await page.addStyleTag({ content: 'nextjs-portal{display:none!important}' });
  await page.screenshot({ path: `.impeccable/review/oct19/${name}.png`, animations: 'disabled', fullPage: true });
  readings.push({ name, ...await page.evaluate(() => ({ overflow: document.documentElement.scrollWidth > innerWidth, font: getComputedStyle(document.querySelector('h1')).fontFamily, fontLoaded: document.fonts.check('400 20px futura-pt'), date: document.querySelector('[data-calendar-date]')?.dataset.calendarDate, phase: document.querySelector('#produit').dataset.phase })) });
  await page.close();
}
const motion = await browser.newPage({ viewport: { width:1440, height:1000 }, reducedMotion:'no-preference' });
await motion.goto(base);
await motion.addStyleTag({ content: 'nextjs-portal{display:none!important}' });
await motion.evaluate(() => document.fonts.ready);
const journey = motion.locator('#produit');
await journey.scrollIntoViewIfNeeded();
for (const phase of ['uploading','scheduled','arranging','publishing']) {
  await motion.waitForFunction(phase => document.querySelector('#produit').dataset.phase === phase, phase);
  if (phase === 'arranging' || phase === 'publishing') await motion.waitForTimeout(250);
  await motion.getByRole('button', {name:'Mettre en pause'}).click();
  await journey.screenshot({ path: `.impeccable/review/oct19/${phase}.png` });
  await motion.getByRole('button', {name:'Lire le parcours'}).click();
}
await motion.waitForFunction(() => document.querySelector('#produit').dataset.running === 'false');
await journey.screenshot({ path: '.impeccable/review/oct19/published.png' });
readings.push({ browser: await browser.version(), ...await motion.evaluate(() => ({ phase: document.querySelector('#produit').dataset.phase, gridRatios: Array.from(document.querySelectorAll('.journey-desktop [data-feed-existing]')).map(element => { const r=element.getBoundingClientRect(); return +(r.width/r.height).toFixed(3); }) })) });
await writeFile('.impeccable/review/oct19/browser-readings.json', JSON.stringify(readings,null,2));
console.log(JSON.stringify(readings));
await browser.close();
