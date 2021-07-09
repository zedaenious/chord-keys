import React from 'react';

export default function ClickableButton(props) {
	return (
		<div className="button-container">
			<button onClick={props.onClickHandler}>{props.buttonText}</button>
		</div>
	);
};