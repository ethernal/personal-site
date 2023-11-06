'use client';
import Link from 'next/link';
import * as React from 'react';

import { usePianoRollContext } from '@/context/pianoroll/PianoRollContext';

import PianoRoll from '../PianoRoll';

type PianoRollVerticalListProps = {
	exclude: string[];
};
function PianoRollVerticalList({ exclude }: PianoRollVerticalListProps) {
	const { sequences } = usePianoRollContext();

	return (
		<section className="grid grid-cols-1 gap-4">
			{sequences
				.filter((sequence) => !exclude.includes(sequence.id))
				.map((sequence, index) => (
					<article
						key={sequence?.id}
						// both transition classes are required to make the animation work contrafy to what IDE might suggest
						className="hover:opacity-100 hover:scale-105 opacity-80 transition-opacity transition-transform duration-200"
					>
						<Link
							href={`/piano-roll/${sequence.id}`}
							className="grid grid-cols-2 gap-2 no-underline"
						>
							<PianoRoll
								id={sequence?.id}
								sequence={sequence?.data}
								listIndex={index + 1}
							/>
							<section className="flex flex-col items-start justify-start">
								<div className="text-lg pb-3 font-semibold">
									{/* simulate YouTube experience */}
									<h3 className="mt-0">
										Piano roll {sequence.id.substring(0, 5)}&hellip;
									</h3>
									<p>Description</p>
								</div>
							</section>
						</Link>
					</article>
				))}
		</section>
	);
}

export default PianoRollVerticalList;
