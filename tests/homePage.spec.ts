import { expect, test } from '@playwright/test';

test('elements of the Home Page', async ({ page }) => {
	await page.goto('http://localhost:3000/');

	const GetInTouchButton = page.getByRole('button', { name: 'Get in Touch' });
	const CookieButton = page
		.locator('section')
		.filter({ hasText: 'By continuing to use this' })
		.getByRole('button');

	const headingWelcome = page.getByRole('heading', {
		name: 'I am a software engineer',
	});
	const headingAboutMeSection = page.getByRole('heading', { name: 'About me' });
	const headingWorkedForSection = page.getByRole('heading', {
		name: 'Companies I have worked for',
	});
	const headingContactSection = page.getByRole('heading', {
		name: "Let's get in touch!",
	});
	const headingFooterTitle = page
		.getByRole('link', { name: 'sebee.website' })
		.nth(1);
	const headingFooterLinks = page.getByRole('heading', { name: 'Links' });

	const linkHomePage = page
		.getByRole('banner')
		.getByRole('link', { name: 'sebee.website' });
	const linkMoreCode = page.getByRole('link', { name: 'MoreCode' });
	const linkIfm = page.getByRole('link', { name: 'ifm ecolink' }).first();
	const linkKarrsa = page.getByRole('link', { name: 'KARR S.A.' });
	const linkFooterHomePage = page.getByRole('link', {
		name: 'Sebastian Pieczyński',
	});

	await expect(headingWelcome).toBeVisible();
	await expect(headingAboutMeSection).toBeVisible();
	await expect(headingWorkedForSection).toBeVisible();
	await expect(headingContactSection).toBeVisible();
	await expect(headingFooterTitle).toBeVisible();
	await expect(headingFooterLinks).toBeVisible();
	await expect(linkHomePage).toBeVisible();
	await expect(linkMoreCode).toBeVisible();
	await expect(linkIfm).toBeVisible();
	await expect(linkKarrsa).toBeVisible();
	await expect(linkFooterHomePage).toBeVisible();
	await expect(GetInTouchButton).toBeVisible();

	await expect(CookieButton).toBeVisible();
	await CookieButton.click();
	await expect(CookieButton).not.toBeVisible();
});
