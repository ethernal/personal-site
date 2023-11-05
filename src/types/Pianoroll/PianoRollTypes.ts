export type PianoRollType = {
	duration: number;
	end: number;
	pitch: number;
	start: number;
	velocity: number;
};

export type Sequence = {
	id: string;
	data: Array<PianoRollType>;
};
