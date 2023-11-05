'use client';
import * as React from 'react';

import { usePianoRollContext } from '@/context/pianoroll/PianoRollContext';
import { pianoRollSample } from '@/data/piano';
import { PianoRollType } from '@/types/Pianoroll/PianoRollTypes';

import PianoRoll from '../PianoRoll';

const prepareSequencesData = (data: Array<PianoRollType>) => {
	let sequencesData = [];

	for (let it = 0; it < 20; it++) {
		const start = it * 60;
		const end = start + 60;
		const partData = data.slice(start, end);
		sequencesData.push({ id: crypto.randomUUID(), data: partData });
	}

	return sequencesData;
};

function PianoRollList() {
	const { sequences, setSequences } = usePianoRollContext();

	React.useEffect(() => {
		const loadPianoRollData = async () => {
			try {
				const response = await fetch('https://pianoroll.ai/random_notes');
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();

				const sequencesData = prepareSequencesData(data);

				setSequences(sequencesData);
			} catch (e) {
				console.error('Error loading data:', e);
				throw e;
			}
		};

		// uncomment to use live data
		// loadPianoRollData();
		// comment when using live data
		setSequences(prepareSequencesData(pianoRollSample));
	}, [setSequences]);

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 my-8">
			{sequences.map((sequence, index) => {
				return (
					<div key={sequence?.id}>
						<div className="text-2xl pb-3 font-semibold">
							Piano roll no. {index + 1}
						</div>
						<PianoRoll
							id={sequence?.id}
							sequence={sequence?.data}
							className="hover:scale-105 transition-transform duration-200"
						/>
					</div>
				);
			})}
		</div>
	);
}

export default PianoRollList;
