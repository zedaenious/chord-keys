import React from 'react';

export default function ChordPicker(props) {
	const chords = props.chords?.map((chord, i) => {
		return <li onClick={props.onChordClick} key={"_chord" + i} className="chord">{chord}</li>;
	});

	return (
		<ul id="chord-picker" className="flex-justify-evenly flex-wrap">
			{chords}
		</ul>
	);
};