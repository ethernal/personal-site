import dynamic from 'next/dynamic';

const FullWidthSplitSection = dynamic(
	() => import('@/components/FullWidthSplitSection/FullWidthSplitSection'),
);

export default FullWidthSplitSection;
