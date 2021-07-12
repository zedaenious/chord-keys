import React from 'react';

export default function Chart(props) {
	const notes = props.notes.map((note, i) => {
		const _key = 'note_' + i;
		return <div key={_key}>{note}</div>;
	});

	return (
		<section>
			{notes}
		</section>
	);
};