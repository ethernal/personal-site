import dynamic from 'next/dynamic';

const FullWidthSplitSection = dynamic(
	() => import('@/components/FullWidthSplitSection/FullWidthSplitSection'),
);

// export * from './FullWidthSplitSection';
// export { default } from './FullWidthSplitSection';
export default FullWidthSplitSection;
