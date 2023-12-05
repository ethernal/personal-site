import { expect, test } from '@playwright/test';

test('navigation menu has 4 links', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	await expect(page.getByRole('link', { name: 'Articles' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'CV' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('should navigate to article page', async ({ page }) => {
	await page.goto('http://localhost:3000/articles');
	await expect(
		page.getByRole('link', {
			name: 'Web scraper with prisma and typescript (part 1)',
		}),
	).toBeVisible();
	await expect(
		page.getByRole('link', { name: 'Why do I need key when' }),
	).toBeVisible();
	await expect(
		page.getByRole('link', { name: 'How to send emails for free' }),
	).toBeVisible();
	await expect(
		page.getByRole('link', { name: 'Dark mode and seamless design' }),
	).toBeVisible();
});

test('should navigate to Web scraper (part 1) article', async ({ page }) => {
	await page.goto(
		'http://localhost:3000/article/project-creating-web-scrapper-with-prisma-and-typescript-part-1',
	);
	await expect(
		page.getByRole('heading', { name: 'Web scraper with prisma and' }),
	).toBeVisible();
	await expect(
		page.getByRole('img', { name: 'pirates loading treasure' }),
	).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible();
	await expect(
		page.getByRole('link', { name: 'Finished scraper' }),
	).toBeVisible();
});

test('should navigate to About page', async ({ page }) => {
	await page.goto('http://localhost:3000/about');
	await expect(page.getByRole('link', { name: 'Download CV' })).toBeVisible();
	await expect(
		page.getByRole('heading', { name: 'About Sebastian Pieczyński' }),
	).toBeVisible();

	await page.getByRole('link', { name: 'CV', exact: true }).click();
	await expect(page.getByRole('tab', { name: 'Recruiter' })).toBeVisible();
	await expect(page.getByRole('tab', { name: 'Technical' })).toBeVisible();
});

test('should navigate to Contact page', async ({ page }) => {
	await page.goto('http://localhost:3000/contact');
	await expect(
		page.getByRole('heading', { name: 'Contact Page' }),
	).toBeVisible();
	await expect(page.getByPlaceholder('Name')).toBeVisible();
	await expect(page.getByRole('button', { name: 'Send' })).toBeVisible();
});
