import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<header>
				<img src={this.props.logo} />
				{this.props.name}
				<section id='nav'></section>
			</header>
		);
	}
}