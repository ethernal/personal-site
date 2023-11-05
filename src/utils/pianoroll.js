export function generateGradientTable(startColor, endColor, steps) {
	const gradientTable = [];
	for (let i = 0; i < steps; i++) {
		const r = startColor.r + ((endColor.r - startColor.r) * i) / (steps - 1);
		const g = startColor.g + ((endColor.g - startColor.g) * i) / (steps - 1);
		const b = startColor.b + ((endColor.b - startColor.b) * i) / (steps - 1);
		gradientTable.push(
			`rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`,
		);
	}
	return gradientTable;
}

// PianoRoll brand #5DB5D5
export const backgroundStartColor = { r: 93, g: 181, b: 213 };
// #154151
export const backgroundEndColor = { r: 21, g: 65, b: 81 };

const backgroundColormap = generateGradientTable(
	backgroundStartColor,
	backgroundEndColor,
	128,
);

const noteStartColor = { r: 66, g: 66, b: 61 };
const noteEndColor = { r: 28, g: 28, b: 26 };

const noteColormap = generateGradientTable(noteStartColor, noteEndColor, 128);

function timeToX(time, end) {
	return time / end;
}

function drawEmptyPianoRoll(pitch_min, pitch_max, svgElement) {
	console.log('Drawing empty piano roll');
	const pitch_span = pitch_max - pitch_min;
	for (let it = pitch_min; it <= pitch_max + 1; it++) {
		// Black keys
		if ([1, 3, 6, 8, 10].includes(it % 12)) {
			const rect = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'rect',
			);
			const y = 1 - (it - pitch_min) / pitch_span;
			const x = 0;
			const h = 1 / pitch_span;
			const w = 1;

			rect.setAttribute('fill', backgroundColormap[12]);
			rect.setAttribute('fill-opacity', '0.666');
			rect.setAttribute('x', `${x}`);
			rect.setAttribute('y', `${y}`);
			rect.setAttribute('width', `${w}`);
			rect.setAttribute('height', `${h}`);
			console.log('rect: ', rect);
			console.log('svg: ', svgElement);
			if (svgElement) {
				svgElement.appendChild(rect);
			}
		}

		// Key separation
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		const y = 1 - (it - pitch_min) / pitch_span + 1 / pitch_span;
		line.setAttribute('x1', '0');
		line.setAttribute('y1', `${y}`);
		line.setAttribute('x2', '2');
		line.setAttribute('y2', `${y}`);
		let line_width;

		// Every octave, line is bolder
		if (it % 12 === 0) {
			line_width = 0.003;
		} else {
			line_width = 0.001;
		}
		line.setAttribute('stroke-width', `${line_width}`);
		line.setAttribute('stroke', 'black');
		if (svgElement) {
			svgElement.appendChild(line);
		}
	}
}

function drawPianoRollSequence(sequence, noteColormap, svgElement) {
	console.log('Drawing sequence: ', sequence, ' on SVG: ', svgElement);
	const startOfSequence = sequence[0].start;
	const endOfSequence = sequence[sequence.length - 1].end - startOfSequence;
	// Extract just the pitches to prepare the SVG parameters
	const pitches = sequence.map((note) => {
		return note.pitch;
	});

	// Make it at lest 2 octaves (2 * 12)
	let pitch_min = Math.min(...pitches);
	let pitch_max = Math.max(...pitches);
	let pitch_span = pitch_max - pitch_min;

	// If the span is too low, we have to extend it equally on both sides
	if (pitch_span < 24) {
		const diff = 24 - pitch_span;
		const low = Math.ceil(diff / 2);
		const high = Math.floor(diff / 2);
		pitch_min -= low;
		pitch_max += high;
	}
	// And margin up and down
	pitch_min -= 3;
	pitch_max += 3;
	pitch_span = pitch_max - pitch_min;
	const note_height = 1 / pitch_span;

	if (svgElement) {
		drawEmptyPianoRoll(pitch_min, pitch_max, svgElement);
	}

	sequence.forEach((note) => {
		const note_rectangle = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'rect',
		);

		// Position and width are based on time
		const x = timeToX(note.start - startOfSequence, endOfSequence);
		const w = timeToX(note.end - note.start, endOfSequence);

		note_rectangle.setAttribute('x', `${x}`);
		note_rectangle.setAttribute('width', `${w}`);

		// Computers draw upside down
		const y = 1 - (note.pitch - pitch_min) / pitch_span;

		note_rectangle.setAttribute('y', `${y}`);
		note_rectangle.setAttribute('height', `${note_height}`);

		// Colorcoding velocity
		const color = noteColormap[note.velocity];
		note_rectangle.setAttribute('fill', color);

		note_rectangle.classList.add('note-rectangle');

		// Draw it
		if (svgElement) {
			svgElement.appendChild(note_rectangle);
		}
	});
}

export default class PianoRoll {
	constructor(svgElement, sequence) {
		if (svgElement) {
			svgElement.setAttribute('viewBox', '0 0 1 1');
			svgElement.setAttribute('preserveAspectRatio', 'none');
			drawPianoRollSequence(sequence, noteColormap, svgElement);
		}
	}
}
