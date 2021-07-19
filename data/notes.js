export const majorNotes = {
	'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bm\u266d5'],
	'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#m\u266d5'],
	'D\u266d': ['D\u266d', 'E\u266dm', 'Fm', 'G\u266d', 'A\u266d', 'B\u266dm', 'Cm\u266d5'],
	'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#m\u266d5'],
	'E\u266d': ['E\u266d', 'Fm', 'Gm', 'A\u266d', 'B\u266d', 'Cm', 'Dm\u266d5'],
	'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#m\u266d5'],
	'F': ['F', 'Gm', 'Am', 'B\u266d', 'C', 'Dm', 'Em\u266d5'],
	'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#m\u266d5'],
	'G\u266d': ['G\u266d', 'A\u266dm', 'B\u266dm', 'C\u266d', 'D\u266d', 'E\u266dm', 'Fm\u266d5'],
	'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#m\u266d5'],
	'A\u266d': ['A\u266d', 'B\u266dm', 'Cm', 'D\u266d', 'E\u266dm', 'Fm', 'Gm\u266d5'],
	'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#m\u266d5'],
	'B\u266d': ['B\u266d', 'Cm', 'Dm', 'E\u266d', 'F', 'Gm', 'Am\u266d5'],
	'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#m', 'A#m\u266d5']
};
export const minorNotes = {
	'Am': ['Am', 'Bm\u266d5', 'C', 'Dm', 'Em', 'F', 'G'],
	'A#m': ['A#m', 'B#m\u266d5', 'C#', 'D#m', 'E#m', 'F#', 'G#'],
	'B\u266dm': ['B\u266dm', 'Cm\u266d5', 'D\u266d', 'E\u266dm', 'Fm', 'G\u266d', 'A\u266d'],
	'Bm': ['Bm', 'C#m\u266d5', 'D', 'Em', 'F#m', 'G', 'A'],
	'Cm': ['Cm', 'Dm\u266d5', 'E\u266d', 'Fm', 'Gm', 'A\u266d', 'B\u266d'],
	'C#m': ['C#m', 'Dm\u266d5', 'E', 'F#m', 'G#m', 'A', 'B'],
	'Dm': ['Dm', 'Em\u266d5', 'F', 'Gm', 'Am', 'B\u266d', 'C'],
	'D#m': ['D#m', 'e#M\u266d5', 'F#', 'G#m', 'A#m', 'B', 'C#'],
	'E\u266dm': ['E\u266dm', 'Fm\u266d5', 'G\u266d', 'A\u266dm', 'B\u266dm', 'C\u266d', 'D\u266d'],
	'Em': ['Em', 'F#m\u266d5', 'G', 'Am', 'Bm', 'C', 'D'],
	'Fm': ['Fm', 'Gm\u266d5', 'A\u266d', 'B\u266dm', 'C#m', 'D', 'E'],
	'F#m': ['F#m', 'G#m\u266d5', 'A', 'Bm', 'C#m', 'D', 'E'],
	'Gm': ['Gm', 'Am\u266d5', 'B\u266d', 'Cm', 'Dm', 'E\u266d', 'F'],
	'G#m': ['G#m', 'A#m\u266d5', 'B', 'C#', 'D#', 'E', 'F#']
};
export const masterNotes = {...majorNotes, ...minorNotes}