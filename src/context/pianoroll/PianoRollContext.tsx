'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

import { Sequence } from '@/types/Pianoroll/PianoRollTypes';

export type PianoRollContext = {
	sequences: Array<Sequence>;
	setSequences: React.Dispatch<React.SetStateAction<Array<Sequence>>>;
};

export type PianoRollContextProviderProps = {
	initialSequences?: Array<Sequence> | [];
	children: ReactNode;
};

const PianoRollContext = createContext<PianoRollContext | null>(null);

function PianoRollContextProvider({
	initialSequences = [],
	children,
}: PianoRollContextProviderProps) {
	const [sequences, setSequences] = useState<Array<Sequence>>(initialSequences);

	return (
		<PianoRollContext.Provider value={{ sequences, setSequences }}>
			{children}
		</PianoRollContext.Provider>
	);
}

export function usePianoRollContext(): PianoRollContext {
	const context = useContext(PianoRollContext);

	if (context === undefined || context === null) {
		throw new Error(
			'usePianoRollContext must be used within PianoRollContextProvider',
		);
	}

	return context;
}

export default PianoRollContextProvider;
