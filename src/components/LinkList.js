import React from 'react';

export default function LinkList(props) {
	const links = props.links.map((link, i) => {
		return <li key={'_link' + i}>{link}</li>;
	});

	return (
		<ul>{links}</ul>
	);
};