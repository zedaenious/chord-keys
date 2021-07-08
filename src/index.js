import React from 'react'
import ReactDOM from 'react-dom';
// import InnerDiv from '../src/components/InnerDiv.js';
import Header from '../src/components/Header.js';

import './main.css';

const layout = (
	<div id='flex-container'>
		<Header
			logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0VHAi11_LUnAO5snKgiZpa-fxrF50RkzbQ&usqp=CAU'
			name='Compute Cool' />
	</div>
);

ReactDOM.render(
	layout,
	document.getElementById('root')
);