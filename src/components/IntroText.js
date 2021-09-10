import React from 'react';

export default function IntroText(props) {
  return (
    <section id="intro-text-container">
      <aside className={props.isTextHidden ? 'collapsed' : ''}>
        <p>I created this small application as a mobile helper when playing, for me, guitar. You may find this tool helpful too, when your writing your next song, as a quick way to check your playing the correct notes in whatever key you happen to choose.</p>
        <p>I'm far from a master with music theory, but check out <a href="https://www.guitarmusictheory.com/modes/" target="_blank">this excellent site focused on guitar music theory</a> explanations to learn more about music theory for yourself!</p>
        <div onClick={props.onToggleTextVisClick}>{props.isTextHidden ? 'Show' : 'Hide'} this information</div>
      </aside>
    </section>
  );
}