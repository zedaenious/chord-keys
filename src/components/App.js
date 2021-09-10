import Chart from './Chart';
import React, {useState, useEffect} from 'react';
import ChordPicker from './ChordPicker';
import LowerBar from './LowerBar';
import { majorChords, minorChords } from '../../data/chords';
import { masterNotes } from '../../data/notes';

export default function App() {
	const [isMajor, setIsMajor] = useState(true);
	const toggleIsMajor = () => {
		setIsMajor((prev) => !prev);
	};
  useEffect(() => {
    removeSelectedAll();
    setChords(isMajor ? majorChords : minorChords);
    setNotes([]);
  }, [isMajor])

	const [chords, setChords] = useState(majorChords);
	const handleToggleMajorClick = () => {
		toggleIsMajor();
	};

	const [notes, setNotes] = useState([]);
	const handleChordClick = ({target}) => {
		setNotes(masterNotes[target.textContent]);
    removeSelectedAll();
		target.classList.add('selected');
	};
	const removeSelectedAll = () => {
    const chords = document.querySelectorAll('.chord');
    chords.forEach((chord) => {
      chord.classList.remove('selected');
    });
  };
  const onResetClick = (e) => {
  	removeSelectedAll();
  	setNotes([]);
  };

	return (
		<main>
			<header>
				<h3>Chord Theory Helper</h3>
			</header>
			<section>
				<ChordPicker
					id="chord-picker"
					name="chord-picker"
					chords={chords}
					onChordClick={handleChordClick} />
			</section>
			<section>
				<Chart
					notes={notes} />
			</section>
			<section>
				<LowerBar
	        isMajor={isMajor}
	        onToggleMajorClick={handleToggleMajorClick}
	        onResetClick={onResetClick} />
			</section>
		</main>
	)
}