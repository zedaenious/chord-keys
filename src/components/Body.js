import React from 'react';
import ClickableButton from './ClickableButton';
import {majorChords, minorChords} from './chords';
import SelectDropdownInput from './SelectDropdownInput';

export default class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMajor: true,
			chords: majorChords
		};
		this.toggleMajorMinor = this.toggleMajorMinor.bind(this);
	}

	toggleMajorMinor() {
		this.setState({
			isMajor: !this.state.isMajor,
			chords: this.state.isMajor ? majorChords : minorChords
		});
	}

	render() {
		return (
			<section>
				<ClickableButton
					onClickHandler={this.toggleMajorMinor}
					buttonText='Togger Major/Minor Chords' />
				<SelectDropdownInput
					id="chord-picker"
					name="chord-picker"
					chords={this.state.chords} />
			</section>
		)
	}
}