import React from 'react';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch" onClick={onSwitch}>
      <span className="material-icons">{icon}</span>
    </div>
  );
};

export default IconSwitch;