import React from 'react';

export default function SelectDropdownInput(props) {
	const listItems = props.chords.map((chord, i) => {
		return (
			<option key={"_chord" + i}>{chord}</option>
		);
	});

	return (
		<select name={props.name} id={props.id}>
			{listItems}
		</select>
	);
};