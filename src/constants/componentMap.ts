const {
	default: CodeSnippet,
} = require('@/components/CodeSnippet/CodeSnippet');

import Image from 'next/image';

import AboutMeToggleMessage from '@/components/AboutMeToggleMessage';
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
};
