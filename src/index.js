// node_modules
import React from 'react'
import ReactDOM from 'react-dom';

// class components
import Header from './/components/Header.js';
import Body from './/components/Body.js';
import Footer from './/components/Footer.js';

import './main.less';

const linkList = ['Creative', 'Sales', 'Mobile', 'Security', 'Infrastructure'];

const siteLayout = (
	<main id="container">
		<Header linkList={linkList} />
		<Body />
		<Footer linkList={linkList} />
	</main>
);

ReactDOM.render(
	siteLayout,
	document.querySelector('#root')
);