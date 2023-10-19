import { MDXComponents } from 'mdx/types';

import AboutMeToggleMessage from '@/components/AboutMeToggleMessage';
import { default as CodeSnippet } from '@/components/CodeSnippet/CodeSnippet';
import CV from '@/components/CurriculumVitae';
import FullWidthSplitSection from '@/components/FullWidthSplitSection';
import Image from '@/components/ImageSSR';
import ResponsiveImage from '@/components/ResponsiveImage';
import Spinner from '@/components/Spinner';
import TooltipMessage from '@/components/TooltipMessage';

export const COMPONENT_MAP: MDXComponents = {
	pre: CodeSnippet,
	ResponsiveImage,
	Image,
	Spinner,
	AboutMeToggleMessage,
	TooltipMessage,
	CV,
	FullWidthSplitSection,
};
