import React from 'react';
import ClickableButton from './ClickableButton';
import {majorChords, minorChords} from '../data/chords';
import {masterNotes} from '../data/masterNotes';
import ChordPicker from './ChordPicker';
import Chart from './Chart';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMajor: true,
			chords: majorChords,
			notes: []
		};
		this.toggleMajorMinor = this.toggleMajorMinor.bind(this);
		this.handleChordClick = this.handleChordClick.bind(this);
	}

	toggleMajorMinor() {
		this.setState({
			isMajor: !this.state.isMajor,
			chords: this.state.isMajor ? majorChords : minorChords
		});
	}

	handleChordClick(e) {
		this.setState({
			notes: masterNotes[e.currentTarget.textContent]
		});
	}

	render() {
		return (
			<section>
				<ClickableButton
					isMajor={this.state.isMajor}
					buttonText='Togger Major/Minor Chords'
					onClickHandler={this.toggleMajorMinor} />
				<ChordPicker
					id="chord-picker"
					name="chord-picker"
					chords={this.state.chords}
					onChordClick={this.handleChordClick} />
				<Chart
					notes={this.state.notes} />
			</section>
		)
	}
}