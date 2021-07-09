import React from 'react';

export default function LinkList(props) {
	const links = props.links.map((link, i) => {
		return <li key={'_link' + i} className="linkList_item">{link}</li>;
	});

	let flexParentClasses = '';

	if(props.direction === 'row') {
		flexParentClasses += ' flex-justify-evenly flex-row';
	}
	if(props.direction === 'column') {
		flexParentClasses += ' flex-justify-start flex-column';
	}


	return (
		<ul className={"flex-container" + flexParentClasses}>{links}</ul>
	);
};