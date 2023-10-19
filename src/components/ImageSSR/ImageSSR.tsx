import Image, { ImageProps } from 'next/image';
import * as React from 'react';

function ImageSSR(props: ImageProps) {
	return <Image {...props} />;
}

export default ImageSSR;
