import PianoRollHero from '@/components/PianoRollHero';
import PianoRollVerticalList from '@/components/PianoRollVerticalList';
import PianoRollContextProvider from '@/context/pianoroll/PianoRollContext';

export const metadata = {
	title: 'PianoRoll Sequence',
	description: 'Challenge for PianoRoll frontend',
};

// +-----------------------------------+  +--------------+
// |                                   |  |              |
// |                                   |  |  Piano Roll  |
// |                                   |  |              |
// |        Main Piano Roll            |  +--------------+
// |                                   |  +--------------+
// |                                   |  |              |
// |                                   |  |  Piano Roll  |
// +-----------------------------------+  |              |
//                                        +--------------+
//                                              ...
// ```

// Here are development tasks to build this interface:

// 1. **Implement Grid Layout**: Display the Piano Rolls in a responsive grid layout on the main page.
// 2. **Implement Interactive Selection**: Make each Piano Roll in the grid clickable. Upon clicking an item, it should become the main element on the page, enlarging for better visibility.
// 3. **List Display**: Simultaneously, display the rest of the Piano Rolls in a vertical list on the right side of the page, similar to how videos are listed on YouTube’s watch page. Ensure that the list is scrollable if there are more items than can fit on the screen.
// 4. **Styling**: Apply styling to make the grid and its items visually appealing. Ensure that Piano Rolls are identifiable and have a consistent size across different screen resolutions.

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
			<PianoRollVerticalList exclude={[sequenceId]} />
		</div>
	);
}

export default PianoChallengeSequence;
