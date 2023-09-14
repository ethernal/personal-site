import dynamic from 'next/dynamic';

const AboutMeToggleMessage = dynamic(
	() => import('@/components/AboutMeToggleMessage/AboutMeToggleMessage'),
);

export default AboutMeToggleMessage;
