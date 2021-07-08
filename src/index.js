import React from 'react'
import ReactDOM from 'react-dom';

import './main.css';

const layout = (
	<div id="outer">
		<div className="inner" id="inner-1"></div>
		<div className="inner" id="inner-2"></div>
		<div className="inner" id="inner-3"></div>
		<div className="inner" id="inner-4"></div>
	</div>
);

ReactDOM.render(
	layout,
	document.getElementById('root')
);