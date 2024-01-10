import { expect, test } from '@playwright/test';

test.use({
	viewport: {
		height: 800,
		width: 280,
	},
});

test('dark mode', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	await expect(page.getByRole('button', { name: 'open menu' })).toBeVisible();
	await page.getByRole('button', { name: 'open menu' }).click();
	await expect(
		page.getByRole('button', { name: 'Toggle dark / light mode' }),
	).toBeVisible();
	await expect(page).toHaveScreenshot('lightMode.png');
	await page.getByRole('button', { name: 'Toggle dark / light mode' }).click();
	await expect(page).toHaveScreenshot('darkMode.png');

	await expect(page.getByRole('button', { name: 'close menu' })).toBeVisible();
	await page.getByRole('button', { name: 'close menu' }).click();
});
