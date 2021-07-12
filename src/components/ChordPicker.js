import React from 'react';

export default function ChordPicker(props) {
	const chords = props.chords?.map((chord, i) => {
		return <article onClick={props.onChordClick} key={"_chord" + i} className="chord">{chord}</article>;
	});

	return (
		<section id="chord-picker" className="flex-justify-evenly flex-wrap">
			{chords}
		</section>
	);
};