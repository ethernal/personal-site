import * as React from 'react';

import { cn } from '@/utils/utils';

type ImageVariant = 'float' | 'static';

type ImageOptions =
	| {
			variant: ImageVariant;
			float: 'left' | 'right';
			floatTextAroundImage?: false;
	  }
	| {
			variant: 'float';
			float: 'left' | 'right';
			floatTextAroundImage: false;
	  }
	| {
			variant: 'float';
			float: 'left' | 'right';
			floatTextAroundImage: true;
	  }
	| {
			variant?: 'static' | undefined;
	  }
	| undefined;

type FigureUIProps = {
	className?: string;
	caption?: string;
	width?: number | string;
	height?: number | string;
	srcImage?: string;
	options?: Prettify<ImageOptions>;
	children: React.ReactNode;
} & React.ComponentProps<'figure'>;

type FigureCaptionUIProps = {
	className?: string;
	width?: number | string;
	height?: number | string;
	children: React.ReactNode;
	options?: Prettify<ImageOptions>;
} & React.ComponentProps<'figcaption'>;

export function FigureCaptionUI(props: FigureCaptionUIProps) {
	const { children, className } = props;
	return (
		<figcaption
			style={{
				hyphenateCharacter: 'auto',
			}}
			className={cn(
				'text-tiny break-words hyphens-auto text-theme-white tracking-[0.10rem] p-2 bg-theme-black',
				className,
			)}
		>
			{children}
		</figcaption>
	);
}

export function FigureUI(props: FigureUIProps) {
	const { options, className, srcImage, width, height, children, caption } =
		props;

	let floatTextAroundImage = false;
	let float = undefined;

	if (options?.variant === 'float') {
		float = options.float;
		floatTextAroundImage = options.floatTextAroundImage ?? false;
	}

	const shapeOutside =
		floatTextAroundImage === true ? `url(${srcImage})` : 'border-box';

	return (
		<figure
			// style={{
			// 	width: width ?? 'inherit',
			// 	height: height ?? 'inherit',
			// }}
			className={cn(
				{ 'float-right': float === 'right' },
				{ 'float-left': float === 'left' },
				{ shapeOutside: shapeOutside },
				{ 'pr-4': float === 'left' },
				{ 'pl-4': float === 'right' },
				// { 'max-w-full': typeof width === 'undefined' },
				className,
			)}
		>
			{children}
			{caption && (
				<FigureCaptionUI options={options} width={width} height={height}>
					{caption}
				</FigureCaptionUI>
			)}
		</figure>
	);
}

export default FigureUI;
