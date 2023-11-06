import '@/app/globals.css';

import { ReactNode } from 'react';

import PianoRollContextProvider from '@/context/pianoroll/PianoRollContext';

/**
 * Custom Layout for PianoRoll to keep the context from polluting the rest of the site
 * Layouts documentation can be found in: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts
 * It reuses the main layout and adds to it. Simillar how Symfony Twig templates work.
 */
function PianoRollLayout({ children }: { children: ReactNode }) {
	return <PianoRollContextProvider>{children}</PianoRollContextProvider>;
}

export default PianoRollLayout;
