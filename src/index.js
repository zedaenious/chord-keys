import React from 'react'
import ReactDOM from 'react-dom';

ReactDOM.render(
	<div id="outer">
		<div id="inner-1"></div>
		<div id="inner-2"></div>
		<div id="inner-3"></div>
	</div>,
	document.getElementById('mount')
);