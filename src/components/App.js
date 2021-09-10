import React, {useState, useEffect} from 'react';
import IntroText from './IntroText';
import ChordPicker from './ChordPicker';
import Chart from './Chart';
import LowerBar from './LowerBar';
import { majorChords, minorChords } from '../../data/chords';
import { masterNotes } from '../../data/notes';

export default function App() {
  // ------------------------------------
  const [textHidden, setTextHidden] = useState(false);
  const handleToggleTextClick = () => {
  	setTextHidden((prev) => !prev);
  }


	// ------------------------------------
	const [chords, setChords] = useState(majorChords);
	const handleToggleMajorClick = () => {
		toggleIsMajor();
	};


	// ------------------------------------
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


  // ------------------------------------
  const [isMajor, setIsMajor] = useState(true);
	const toggleIsMajor = () => {
		setIsMajor((prev) => !prev);
	};
	const onResetClick = (e) => {
  	removeSelectedAll();
  	setNotes([]);
  };
  useEffect(() => {
    removeSelectedAll();
    setChords(isMajor ? majorChords : minorChords);
    setNotes([]);
  }, [isMajor])


	// ------------------------------------
	return (
		<main>
			<header>
				<h3>Chord Theory Helper</h3>
			</header>
			<IntroText
				isTextHidden={textHidden}
				onToggleTextVisClick={handleToggleTextClick} />
			<ChordPicker
				chords={chords}
				onChordClick={handleChordClick} />
			<Chart
				notes={notes} />
			<LowerBar
        isMajor={isMajor}
        onToggleMajorClick={handleToggleMajorClick}
        onResetClick={onResetClick} />
		</main>
	);
}