import React from 'react';

export default function ClickableButton(props) {
	return (
		<button
			onClick={props.onClickHandler}>Show {props.isMajor ? 'Minor':'Major'} Chords
		</button>
	);
};