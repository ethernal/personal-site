import PianoRollList from '@/components/PianoRollList';
import PianoRollContextProvider from '@/context/pianoroll/PianoRollContext';

export const metadata = {
	title: 'PianoRoll Challenge',
	description: 'Challenge for PianoRoll frontend',
};
async function PianoChallenge() {
	return (
		<PianoRollContextProvider>
			<div className="wrapper max-w-[var('--page-wrapper-max-width')] min-h-[67dvh]">
				<h1>List of Piano Rolls</h1>
				<PianoRollList />
			</div>
		</PianoRollContextProvider>
	);
}

export default PianoChallenge;
