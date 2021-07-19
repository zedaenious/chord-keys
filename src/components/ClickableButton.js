import React from 'react';

export default function ClickableButton(props) {
	return (
		<button
			onClick={props.onClickHandler}>{props.text}
		</button>
	);
};