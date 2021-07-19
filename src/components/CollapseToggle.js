import React from 'react';

const upArrow = '\u21A5';
const downArrow = '\u21A7';

export default function CollapseToggle(props) {
	return (
		<div
      id="lower-bar-toggle"
      onClick={props.onCollapseToggleClick} >
      { props.collapsed ? upArrow : downArrow }
    </div>
	);
};