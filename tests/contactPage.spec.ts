import { expect, test } from '@playwright/test';

test('contact page desktop screenshot', async ({ page }) => {
	await page.goto('http://localhost:3000/contact');
	await expect(page).toHaveScreenshot();
});

test.describe('contact page mobile (w-280) screenshot', () => {
	test.use({ viewport: { width: 280, height: 1200 } });

	test('visual regression', async ({ page }) => {
		await page.goto('http://localhost:3000/contact');
		await expect(page).toHaveScreenshot();
	});
});
