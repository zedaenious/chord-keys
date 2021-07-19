import React, {useState} from 'react';
import CollapseToggle from './CollapseToggle';
import ClickableButton from './ClickableButton';

export default function LowerBar(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapseToggleClick = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <section id="lower-bar" className={`${isCollapsed ? 'collapsed': ''}`}>
      <CollapseToggle 
        collapsed={isCollapsed}
        onCollapseToggleClick={handleCollapseToggleClick} />

      <section id="lower-bar-controls">
        <ClickableButton
          text='dont click this button'
          onClickHandler={() => { alert('damnit i told you not to push this button!!')}} />
        <ClickableButton
          text={`Show ${props.isMajor ? 'Minor':'Major'} Chords`}
          onClickHandler={props.onToggleMajorClick} />
      </section>
    </section>
  );
};