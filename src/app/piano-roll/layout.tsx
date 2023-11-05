import '@/app/globals.css';

import { ReactNode } from 'react';

import PianoRollContextProvider from '@/context/pianoroll/PianoRollContext';

function PianoRollLayout({ children }: { children: ReactNode }) {
	return <PianoRollContextProvider>{children}</PianoRollContextProvider>;
}

export default PianoRollLayout;
