import * as React from 'react';

import { cn } from '@/utils/utils';
import { CircularProgress, CircularProgressProps } from '@nextui-org/react';

type CircularProgressUIProps = {
	topic: string;
	value: number;
	size?: '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | undefined;
} & Omit<CircularProgressProps, 'size'>;

function CircularProgressUI({
	topic,
	value,
	size = '3xl',
	...delegated
}: CircularProgressUIProps) {
	let sizeClasses = '[&_svg]:h-40 [&_svg]:w-40';
	let valueClass = 'text-3xl';

	switch (size) {
		case '3xl':
			sizeClasses = '[&_svg]:h-40 [&_svg]:w-40'; // TODO: this is a full rule, but it works separated sometimes
			valueClass = 'text-3xl';
			break;

		case '2xl':
			sizeClasses = '[&_svg]:h-32 [&_svg]:w-32';
			valueClass = 'text-2xl';
			break;

		case 'xl':
			sizeClasses = '[&_svg]:h-28 [&_svg]:w-28';
			valueClass = 'text-xl';
			break;
		default:
			sizeClasses = '[&_svg]:h-[inherit] [&_svg]:w-[inherit]';
			valueClass = 'text-[inherit]';
			break;
	}

	return (
		<CircularProgress
			{...delegated}
			aria-label={`Progress for ${topic}`}
			value={value}
			color="success"
			showValueLabel={true}
			classNames={{
				// TODO: create a minimal repo to reproduce issue
				// two different selectors are REQUIRED here, otherwise classes are not applied
				// it works in HTMl version on Tailwind play so... no idea.. see https://play.tailwindcss.com/p3xrGjhzLH
				// this can be mitigated by using all required classes in variable but it's left as is to  crete issue
				base: `${sizeClasses}`,
				track: `stroke-theme-accent-muted`,
				// indicator: ``,
				value: `absolute font-normal inset-0 flex items-center justify-center ${valueClass}`,
			}}
		/>
	);
}

export default CircularProgressUI;
