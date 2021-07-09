import React from 'react'
import ReactDOM from 'react-dom';
import App from './/components/App.js';

import './main.less';

const linkList = ['Creative', 'Sales', 'Mobile', 'Security', 'Infrastructure'];

const siteLayout = (
	<main id="container">
		<App />
	</main>
);

ReactDOM.render(
	siteLayout,
	document.querySelector('#root')
);