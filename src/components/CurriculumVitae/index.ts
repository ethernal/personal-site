import dynamic from 'next/dynamic';

const CV = dynamic(
	() => import('@/components/CurriculumVitae/CurriculumVitae'),
);

export * from './CurriculumVitae';
export default CV;
