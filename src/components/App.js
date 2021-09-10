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

  const [textHidden, setTextHidden] = useState(false);
  const onToggleTextClick = () => {
  	setTextHidden((prev) => !prev);
  }

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
			<section id="intro-text">
				<aside className={textHidden ? 'hidden' : 'shown'}>
					<p>I created this small application as a mobile helper when playing, for me, guitar. You may find this tool helpful too, when your writing your next song, as a quick way to check your playing the correct notes in whatever key you happen to choose.</p>
					<p>I don't have much experience with music theory, but you can go to <a href="https://www.guitarmusictheory.com/modes/" target="_blank">this excellent site focused on guitar music theory</a> explanations to learn more for yourself.</p>
					<div onClick={onToggleTextClick}>{textHidden ? 'Show' : 'Hide'} this information</div>
				</aside>
			</section>
			<section id="chord-picker">
				<ChordPicker
					chords={chords}
					onChordClick={handleChordClick} />
			</section>
			<section id="notes-chart">
				<Chart
					notes={notes} />
			</section>
			<section id="lower-bar">
				<LowerBar
	        isMajor={isMajor}
	        onToggleMajorClick={handleToggleMajorClick}
	        onResetClick={onResetClick} />
			</section>
		</main>
	)
}