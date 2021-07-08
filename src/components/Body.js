import InnerDiv from './InnerDiv';
import React from 'react';

export default class Body extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<div>
				<InnerDiv className='inner' id='div-1' title='Section 1' />
				<InnerDiv className='inner' id='div-2' title='Section 2' />
				<InnerDiv className='inner' id='div-3' title='Section 3' />
			</div>
		);
	}
}