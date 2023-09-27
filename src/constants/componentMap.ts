import Image from 'next/image';

import AboutMeToggleMessage from '@/components/AboutMeToggleMessage';
import { default as CodeSnippet } from '@/components/CodeSnippet/CodeSnippet';
import CV from '@/components/CurriculumVitae';
import FullWidthSplitSection from '@/components/FullWidthSplitSection';
import ResponsiveImage from '@/components/ResponsiveImage';
import Spinner from '@/components/Spinner';
import TooltipMessage from '@/components/TooltipMessage';

export const COMPONENT_MAP = {
	pre: CodeSnippet,
	ResponsiveImage,
	Image,
	FullWidthSplitSection,
	Spinner,
	AboutMeToggleMessage,
	TooltipMessage,
	CV,
};
