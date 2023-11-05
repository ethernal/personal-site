'use client';

import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/utils/utils';

import pianoroll from '../../utils/pianoroll';

type PianoRollProps = {
	sequence: Array<any>;
	id: string;
	listIndex?: number | string;
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
			className={cn('border-1 border-[#ccc] mb-3 p-3 rounded-lg', className)}
			{...delegated}
		>
			<Link href={`/piano-roll/${id}`}>
				{/* description styles */}
				{/* piano-roll-svg styles */}
				<svg
					id="pianoRollContainer"
					ref={svgRef}
					className="piano-roll-svg border-2 border-[#381815] bg-white"
				></svg>
			</Link>
		</div>
	);
}

export default React.memo(PianoRoll);
