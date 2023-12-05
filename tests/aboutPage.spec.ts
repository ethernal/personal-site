import { expect, test } from '@playwright/test';

test('about page desktop screenshot', async ({ page }) => {
	await page.goto('http://localhost:3000/about');
	await expect(page).toHaveScreenshot();
});

test.describe('about page mobile (w-280) screenshot', () => {
	test.use({ viewport: { width: 280, height: 1200 } });

	test('mobile view about page screenshot', async ({ page }) => {
		await page.goto('http://localhost:3000/about');
		await expect(page).toHaveScreenshot();
	});
});
