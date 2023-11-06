import PianoRollHero from '@/components/PianoRollHero';
import PianoRollVerticalList from '@/components/PianoRollVerticalList';
import PianoRollContextProvider from '@/context/pianoroll/PianoRollContext';

export const metadata = {
	title: 'PianoRoll Sequence',
	description: 'Challenge for PianoRoll frontend',
};

// Single PianoRoll YouTube like view will receive dynamic param "sequenceId" and find it in the data passed via context and display it. Side will have all other sequences.
async function PianoChallengeSequence({
	params,
}: {
	params: { sequenceId: string };
}) {
	const { sequenceId } = params;

	return (
		<div className="grid xs:grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 p-8">
			<div>
				<PianoRollHero id={sequenceId} />
				<h2>Piano Roll {sequenceId}</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
					quia asperiores cum odio vel alias nemo tempora corrupti fugiat
					reiciendis tenetur est, officiis soluta veritatis, accusantium natus.
					Id, nesciunt modi?
				</p>
				<h2>Comments</h2>
				<p>No comments yet.</p>
			</div>
			<aside>
				<PianoRollVerticalList exclude={[sequenceId]} />
			</aside>
		</div>
	);
}

export default PianoChallengeSequence;
