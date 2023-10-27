import AboutMeSection from '@/components/LandingPage/AboutMeSection';
import ContactSection from '@/components/LandingPage/ContactSection';
import HeroSection from '@/components/LandingPage/HeroSection';
import WorkedForSection from '@/components/LandingPage/WorkedForSection';
import { SITE_TITLE } from '@/constants/constants';

export const metadata = {
	title: SITE_TITLE,
	description:
		"Sebastian's thoughts on software development and all things life related.",
};

async function Home() {
	return (
		<>
			<div className="">
				<HeroSection className="px-theme-default dark:bg-theme-dark-background-light" />

				<AboutMeSection className="px-theme-default rounded-theme-default bg-theme-light-background-secondary text-theme-light-text-light dark:text-theme-dark-text-light dark:bg-theme-dark-background-secondary" />

				<WorkedForSection className="px-theme-default rounded-theme-default bg-theme-light-background-primary dark:bg-theme-dark-background-primary" />

				{/* <RecentWorkSection className="px-theme-default rounded-theme-default bg-theme-light-background-secondary text-theme-light-text-light dark:text-theme-dark-text-light dark:bg-theme-dark-background-secondary" /> */}

				{/* <TestimonialsSection className="px-theme-default rounded-theme-default bg-theme-light-background-primary dark:bg-theme-dark-background-primary" /> */}

				<ContactSection className="px-theme-default rounded-theme-default text-theme-light-text-light dark:text-theme-dark-text-light" />
			</div>
		</>
	);
}

export default Home;
