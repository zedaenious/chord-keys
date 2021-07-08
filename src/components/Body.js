import InnerDiv from './InnerDiv';
import React from 'react';

export default class Body extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<div>
				<InnerDiv className='inner' id='div1' title='Section 1' />
				<InnerDiv className='inner' id='div2' title='Section 2' />
				<InnerDiv className='inner' id='div3' title='Section 3' />
				<InnerDiv className='inner' id='div4' title='Section 4' />
				<InnerDiv className='inner' id='div5' title='Section 5' />
				<InnerDiv className='inner' id='div6' title='Section 6' />
				<InnerDiv className='inner' id='div7' title='Section 7' />
				<InnerDiv className='inner' id='div8' title='Section 8' />
			</div>
		);
	}
}