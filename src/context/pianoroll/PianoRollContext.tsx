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

/* Context will hold data fetched from the API so there will be no need to drill the props to every component needing them
for prop drilling see: https://kentcdodds.com/blog/prop-drilling
for context documentation: https://react.dev/reference/react/createContext
*/
const PianoRollContext = createContext<PianoRollContext | null>(null);

function PianoRollContextProvider({
	initialSequences = [],
	children,
}: PianoRollContextProviderProps) {
	const [sequences, setSequences] = useState<Array<Sequence>>(initialSequences);

	// components wrapped in PianoRollContextProvider will have access to sequences and setSequences
	return (
		<PianoRollContext.Provider value={{ sequences, setSequences }}>
			{children}
		</PianoRollContext.Provider>
	);
}

/*
Export the custom React hook to be used in components, that way we don't have to do this song and dance every time we want to use the context in the component and it's easier to keep type safe that way as well.
*/
export function usePianoRollContext(): PianoRollContext {
	const context = useContext(PianoRollContext);

	// when usePianoRollContext is used outside of PianoRollContextProvider, it will throw an error
	if (context === undefined || context === null) {
		throw new Error(
			'usePianoRollContext must be used within PianoRollContextProvider',
		);
	}

	return context;
}

export default PianoRollContextProvider;
