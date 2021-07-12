import React from 'react';

export default function ChordPicker(props) {
	const chords = props.chords?.map((chord, i) => {
		return <div onClick={props.onChordClick} key={"_chord" + i} className="chord">{chord}</div>;
	});

	return (
		<section id="chord-picker" className="flex-justify-evenly flex-wrap">
			{chords}
		</section>
	);
};