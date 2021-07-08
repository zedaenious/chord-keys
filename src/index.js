// node_modules
import React from 'react'
import ReactDOM from 'react-dom';

// class components
import Header from '../src/components/Header.js';
import Body from '../src/components/Body.js';
import Footer from '../src/components/Footer.js';

ReactDOM.render(
	(
		<div id='flex-container'>
			<Header
				logo='https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg'
				name='Fire Tigers' />
			<Body />
			<Footer />
		</div>
	),
	document.getElementById('root')
);