import React from 'react';

export default class InnerDiv extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
		return <div className='inner' id={this.props.id}>{this.props.title}</div>;
	}
}