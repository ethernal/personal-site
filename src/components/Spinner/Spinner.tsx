import React, { ComponentProps } from 'react';
import { Loader } from 'react-feather';

type SpinnerProps = ComponentProps<typeof Loader>;

const Spinner = ({ color, size, ...delegated }: SpinnerProps) => {
	return (
		<div
			className={`motion-safe:animate-spin-2s duration-1000 block w-min h-min opacity-60`}
		>
			<Loader
				color={color}
				size={size}
				{...delegated}
				className="block max-w-[revert]"
			/>
		</div>
	);
};

export default Spinner;
