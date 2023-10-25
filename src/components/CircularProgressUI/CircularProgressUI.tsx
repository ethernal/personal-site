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
			sizeClasses = '[&_svg]:h-40 [&_svg]:w-40'; //TODO: article about Tailwind classes and that custom selectors are also considered a part of the class
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
				base: `${sizeClasses}`,
				track: `stroke-theme-light-background-primary/80 dark:stroke-theme-dark-background-primary/80`,
				value: `absolute font-normal inset-0 flex items-center justify-center ${valueClass}`,
			}}
		/>
	);
}

export default CircularProgressUI;
