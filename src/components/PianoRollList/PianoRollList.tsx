'use client';
import * as React from 'react';

import { pianoRollSample } from '@/data/piano';

import PianoRoll from '../PianoRoll';

function PianoRollList() {
	const [pianoRolls, setPianoRolls] = React.useState<typeof pianoRollSample>(
		[],
	);

	let sequences = [];

	React.useEffect(() => {
		const loadPianoRollData = async () => {
			try {
				const response = await fetch('https://pianoroll.ai/random_notes');
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				setPianoRolls(data);
			} catch (e) {
				console.error('Error loading data:', e);
				throw e;
			}
		};

		// uncomment to use live data
		// loadPianoRollData();
		// comment when using live data
		setPianoRolls(pianoRollSample);
	}, []);

	for (let it = 0; it < 20; it++) {
		const start = it * 60;
		const end = start + 60;
		const partData = pianoRolls.slice(start, end);
		sequences.push({ id: crypto.randomUUID(), data: partData });
	}

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 my-8">
			{sequences.map((sequence, index) => {
				return (
					<PianoRoll
						key={sequence?.id}
						sequence={sequence?.data}
						listIndex={index + 1}
						className="hover:scale-105 transition-transform duration-200"
					/>
				);
			})}
		</div>
	);
}

export default PianoRollList;
