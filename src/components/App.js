import React, {useState} from 'react';
import ClickableButton from './ClickableButton';
import {majorChords, minorChords} from '../data/chords';
import {majorNotes, minorNotes, masterNotes} from '../data/notes';
import ChordPicker from './ChordPicker';
import Chart from './Chart';

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
		setNotes(() => masterNotes[target.textContent]);
	}

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