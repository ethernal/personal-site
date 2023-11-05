'use client';

import * as React from 'react';

import { cn } from '@/utils/utils';

import pianoroll from '../../utils/pianoroll';

type PianoRollProps = {
	sequence: Array<any>;
	listIndex: number;
	className?: string;
	delegated?: any;
};

// React component
function PianoRoll({
	sequence,
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

	// 	.piano-roll-svg {
	//   border: 2px solid #381815;
	// }

	// .piano-roll-card {
	//   border: 1px solid #ccc;
	//   margin-bottom: 10px;
	//   padding: 10px;
	//   width: 50%;
	//   box-sizing: border-box;
	// }

	// .description {
	//   margin-top: 10px;
	// }

	{
		/* piano-roll-card styles */
	}
	return (
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
