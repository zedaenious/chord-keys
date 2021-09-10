import React, {useState} from 'react';
import CollapseToggle from './CollapseToggle';
import ClickableButton from './ClickableButton';

export default function LowerBar(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapseToggleClick = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div id="lower-bar" className={`${isCollapsed ? 'collapsed': ''}`}>
      <CollapseToggle 
        collapsed={isCollapsed}
        onCollapseToggleClick={handleCollapseToggleClick} />
      <div id="lower-bar-controls">
        <ClickableButton
          text='Reset'
          onClickHandler={props.onResetClick} />
        <ClickableButton
          text={`Show ${props.isMajor ? 'Minor':'Major'} Chords`}
          onClickHandler={props.onToggleMajorClick} />
      </div>
    </div>
  );
};