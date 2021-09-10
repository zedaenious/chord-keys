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
	const onResetClick = (e) => {
  	removeSelectedAll();
  	setNotes([]);
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

	return (
		<main>
			<header>
				<h3>Chord Theory Helper</h3>
			</header>
			<section id="intro-text-container">
				<aside className={textHidden ? 'collapsed' : ''}>
					<p>I created this small application as a mobile helper when playing, for me, guitar. You may find this tool helpful too, when your writing your next song, as a quick way to check your playing the correct notes in whatever key you happen to choose.</p>
					<p>I'm far from a master with music theory, but check out <a href="https://www.guitarmusictheory.com/modes/" target="_blank">this excellent site focused on guitar music theory</a> explanations to learn more about music theory for yourself!</p>
					<div onClick={onToggleTextClick}>{textHidden ? 'Show' : 'Hide'} this information</div>
				</aside>
			</section>
			<section id="chord-picker-container">
				<ChordPicker
					chords={chords}
					onChordClick={handleChordClick} />
			</section>
			<section id="notes-chart-container">
				<Chart
					notes={notes} />
			</section>
			<footer>
				<LowerBar
	        isMajor={isMajor}
	        onToggleMajorClick={handleToggleMajorClick}
	        onResetClick={onResetClick} />
			</footer>
		</main>
	)
}