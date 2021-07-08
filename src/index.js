import React from 'react'
import ReactDOM from 'react-dom';
import Header from '../src/components/Header.js';
import Body from '../src/components/Body.js';
import Footer from '../src/components/Footer.js';

import './main.css';

const layout = (
	<div id='flex-container'>
		<Header
			logo='https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg'
			name='Fire Tigers' />
		<Body />
		<Footer />
	</div>
);

ReactDOM.render(
	layout,
	document.getElementById('root')
);