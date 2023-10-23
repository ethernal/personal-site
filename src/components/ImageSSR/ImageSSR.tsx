import Image, { ImageProps } from 'next/image';
import * as React from 'react';

function ImageSSR(props: ImageProps) {
	const alt = props.alt || '';
	// eslint-disable-next-line jsx-a11y/alt-text
	return <Image {...props} />;
}

export default ImageSSR;
