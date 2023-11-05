'use client';
import * as React from 'react';

import PianoRoll from '@/components/PianoRoll';
import { usePianoRollContext } from '@/context/pianoroll/PianoRollContext';

function PianoRollHero({ id }: { id: string }) {
	const { sequences } = usePianoRollContext();

	const sequence = sequences.find((sequence) => sequence.id === id);

	return (
		<div className="min-h-[67dvh]">
			{sequence && sequence.data && (
				<PianoRoll sequence={sequence.data} id={sequence.id} listIndex={id} />
			)}
			{!sequence && <h2>No sequence found with id {id}</h2>}
		</div>
	);
}

export default PianoRollHero;
