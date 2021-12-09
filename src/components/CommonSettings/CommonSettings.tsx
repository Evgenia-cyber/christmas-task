import React, { FC } from 'react';
import snowImg from '../../assets/svg/snow.svg';
import audioImg from '../../assets/svg/audio.svg';

import './CommonSettings.scss';

const CommonSettings: FC = () => {
  const onSnowClickHandler = () => {
    console.log('snow');
  };
  const onAudioClickHandler = () => {
    console.log('audio');
  };

  return (
    <div className="settings">
      <button className="settings-snow" onClick={onSnowClickHandler}>
        <img src={snowImg} alt="Снег" />
      </button>
      <button className="settings-audio" onClick={onAudioClickHandler}>
        <img src={audioImg} alt="Звук" />
      </button>
    </div>
  );
};

export default CommonSettings;
