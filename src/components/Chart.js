import React from 'react';

export default function Chart(props) {
	const notes = props.notes.map((note, i) => {
		return <div>{note}</div>;
	});

	return (
		<section>
			{notes}
		</section>
	);
};