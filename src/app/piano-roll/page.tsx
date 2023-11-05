import PianoRollList from '@/components/PianoRollList';

export const metadata = {
	title: 'PianoRoll Challenge',
	description: 'Challenge for PianoRoll frontend',
};
async function PianoChallenge() {
	return (
		<div className="wrapper max-w-[var('--page-wrapper-max-width')] min-h-[67dvh]">
			<h1>List of Piano Rolls</h1>
			<PianoRollList />
		</div>
	);
}

export default PianoChallenge;
