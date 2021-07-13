import Chart from './Chart';
import React, {useState, useEffect} from 'react';
import ChordPicker from './ChordPicker';
import ClickableButton from './ClickableButton';
import {majorChords, minorChords} from '../data/chords';
import {majorNotes, minorNotes, masterNotes} from '../data/notes';

export default function App() {
	const [notes, setNotes] = useState([]);
	const [isMajor, setIsMajor] = useState(true);
	const [chords, setChords] = useState(majorChords);

	const toggleIsMajor = () => {
		setIsMajor((prev) => !prev);
	}

	const handleButtonClick = () => {
		toggleIsMajor();
		setChords(isMajor ? majorChords : minorChords);
	}

	const handleChordClick = ({target}) => {
		removeSelected();
		setNotes(masterNotes[target.textContent]);
		target.classList.add('selected');
	}

	const removeSelected = () => {
		const chords = document.querySelectorAll('.chord');
		chords.forEach((chord) => {
			chord.classList.remove('selected');
		});
	};

	return (
		<section>
			<ClickableButton
				isMajor={isMajor}
				buttonText='Togger Major/Minor Chords'
				onClickHandler={handleButtonClick} />
			<ChordPicker
				id="chord-picker"
				name="chord-picker"
				chords={chords}
				onChordClick={handleChordClick} />
			<Chart
				notes={notes} />
		</section>
	)
}