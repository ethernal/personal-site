import { expect, test } from '@playwright/test';

test.use({
	viewport: {
		height: 800,
		width: 280,
	},
});

test('test mobile menu', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	await expect(page.getByRole('button', { name: 'open menu' })).toBeVisible();
	await page.getByRole('button', { name: 'open menu' }).click();
	await expect(page.getByText('ArticlesCVAboutContactToggle')).toBeVisible();
	await expect(page.getByRole('link', { name: 'Articles' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'CV' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
	await expect(
		page.getByRole('button', { name: 'Toggle dark / light mode' }),
	).toBeVisible();
	await page.getByRole('button', { name: 'Toggle dark / light mode' }).click();
	await expect(page.getByRole('button', { name: 'close menu' })).toBeVisible();
	await page.getByRole('button', { name: 'close menu' }).click();
});
