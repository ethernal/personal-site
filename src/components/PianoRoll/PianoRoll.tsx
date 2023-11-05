'use client';

import * as React from 'react';

import { cn } from '@/utils/utils';

import pianoroll from '../../utils/pianoroll';

type PianoRollProps = {
	sequence: Array<any>;
	id: string;
	listIndex: number;
	className?: string;
	delegated?: any;
};

// React component
function PianoRoll({
	sequence,
	id,
	listIndex,
	className,
	...delegated
}: PianoRollProps) {
	const svgRef = React.useRef(null);

	React.useEffect(() => {
		if (!sequence || sequence?.length === 0) return;
		if (svgRef?.current) {
			console.log('svgRef.current', svgRef.current);
			new pianoroll(svgRef.current, sequence);
		}
	}, [sequence]);

	return (
		/* piano-roll-card styles */
		<div
			className={cn('border-1 border-[#ccc] mb-3 p-3', className)}
			{...delegated}
		>
			{/* description styles */}
			<div className="text-2xl pb-3 font-semibold">
				Piano roll no. {listIndex}
			</div>
			{/* piano-roll-svg styles */}
			<svg
				id="pianoRollContainer"
				ref={svgRef}
				className="piano-roll-svg border-2 border-[#381815] bg-white"
			></svg>
		</div>
	);
}

export default React.memo(PianoRoll);
