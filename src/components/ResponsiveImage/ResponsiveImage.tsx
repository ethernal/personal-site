import Image from 'next/image';
import React, { ComponentProps } from 'react';

import { cn } from '@/utils/utils';

type ImageVariant = 'float' | 'static';

type ImageOptions =
	| {
			variant: ImageVariant;
			float: 'left' | 'right';
			floatTextAroundImage?: false;
			showBorder?: boolean;
	  }
	| {
			variant: 'float';
			float: 'left' | 'right';
			floatTextAroundImage: false;
			showBorder?: boolean;
	  }
	| {
			variant: 'float';
			float: 'left' | 'right';
			floatTextAroundImage: true;
	  }
	| {
			variant?: 'static' | undefined;
			showBorder?: boolean;
	  }
	| undefined;

type ResponsiveImageProps = {
	src: string;
	className?: string;
	caption?: string;
	alt: string;
	width?: number;
	height?: number;
	options?: Prettify<ImageOptions>;
	delegated?: ComponentProps<'img'>;
};

function ResponsiveImage({
	src,
	alt,
	caption,
	className,
	width,
	height,
	options,
	...delegated
}: ResponsiveImageProps) {
	let floatTextAroundImage = false;
	let float = undefined;
	let showBorder = true;

	if (options?.variant === 'float') {
		float = options.float;
		floatTextAroundImage = options.floatTextAroundImage ?? false;
	} else if (options?.variant === 'static' || options?.variant === undefined) {
		showBorder = options?.showBorder ?? false;
	}

	const shapeOutside =
		floatTextAroundImage === true ? `url(${src})` : 'border-box';

	return (
		<figure
			style={{
				width: width ?? 'inherit',
				maxWidth: width ?? 'inherit',
				shapeOutside: shapeOutside,
			}}
			className={cn(
				{ 'float-right': float === 'right' },
				{ 'float-left': float === 'left' },
				{ shapeOutside: shapeOutside },
				{ 'ps-4': float === 'left' },
				{ 'pe-4': float === 'right' },
				className,
			)}
		>
			<Image
				src={src}
				// for why next 3 lines are here see: https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724
				width={width ?? 0}
				height={height ?? 0}
				sizes="100dvw"
				alt={alt}
				style={{
					objectFit: 'cover',
					margin: 0,
					padding: 0,
					border:
						floatTextAroundImage === true || showBorder === false
							? 'none'
							: '2px solid var(--color-theme-black)',
					borderRadius:
						floatTextAroundImage === true || showBorder === false
							? 'none'
							: '4px 4px 0 0',
					width: width ?? 'inherit',
					height: height ?? 'inherit',
					maxWidth: width ?? 'inherit',
				}}
				{...delegated}
			/>
			{caption !== (undefined && '' && null) ? (
				<figcaption
					style={{
						backgroundColor: 'var(--color-theme-black)',
						padding: '0.2em',
						color: 'var(--color-theme-white)',
						borderRadius:
							floatTextAroundImage === true || showBorder === false
								? '4px'
								: 'inherit',
						wordBreak: 'break-word',
						hyphenateCharacter: 'auto',
						hyphens: 'auto',
					}}
					className="text-tiny"
				>
					{caption}
				</figcaption>
			) : null}
		</figure>
	);
}

export default ResponsiveImage;
