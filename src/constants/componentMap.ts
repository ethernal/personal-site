const {
	default: CodeSnippet,
} = require('@/components/CodeSnippet/CodeSnippet');

import Image from 'next/image';

import FullWidthSplitSection from '@/components/FullWidthSplitSection';
import ResponsiveImage from '@/components/ResponsiveImage';
import Spinner from '@/components/Spinner';

export const COMPONENT_MAP = {
	pre: CodeSnippet,
	ResponsiveImage,
	Image,
	FullWidthSplitSection,
	Spinner,
};
