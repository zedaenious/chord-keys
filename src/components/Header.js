import React from 'react';
import LinkList from './LinkList';

export default function Header(props) {
	return (
		<header>
			<LinkList 
				links={props.linkList}
				direction="row" />
		</header>
	);
};