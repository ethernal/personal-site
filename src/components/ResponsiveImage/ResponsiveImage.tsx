import Image from 'next/image';
import React, { ComponentProps } from 'react';

type ImageVariant = 'float' | 'static';

type ImageOptions =
	| {
			variant: ImageVariant;
			float: 'left' | 'right';
			floatTextAroundImage: false;
			showBorder?: boolean;
	  }
	| {
			variant: ImageVariant;
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
	className: string;
	caption: string;
	alt: string;
	width?: number;
	height?: number;
	options?: ImageOptions;
	delegated: ComponentProps<'img'>;
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
		floatTextAroundImage = options.floatTextAroundImage;
	} else if (options?.variant === 'static' || options?.variant === undefined) {
		showBorder = options?.showBorder;
	}

	const shapeOutside =
		floatTextAroundImage === true ? `url(${src})` : 'border-box';

	return (
		<figure
			style={{
				float: float,
				width: 'inherit',
				shapeOutside: shapeOutside,
				padding: `0 ${float === 'left' ? '1rem' : '0'} 0  ${
					float === 'right' ? '1rem' : '0'
				}`,
			}}
			className={className}
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
							: '2px solid var(--color-gray-900)',
					borderRadius:
						floatTextAroundImage === true || showBorder === false
							? 'none'
							: '4px 4px 0 0',
					width: width ?? 'inherit',
					height: height ?? 'inherit',
				}}
				{...delegated}
			/>
			{caption !== (undefined && '' && null) ? (
				<figcaption
					style={{
						backgroundColor: 'var(--color-gray-900)',
						padding: '0.2em',
						color: 'var(--color-gray-100)',
						borderRadius:
							floatTextAroundImage === true || showBorder === false
								? '4px'
								: 'inherit',
					}}
				>
					{caption}
				</figcaption>
			) : null}
		</figure>
	);
}

export default ResponsiveImage;
