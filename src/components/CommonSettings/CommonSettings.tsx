import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAudioPlaySlice, toogleIsAudioPlay } from '../../redux/slices/commonSettingsSlice';
import sound from '../../utils/sound';
import snowImg from '../../assets/svg/snow.svg';
import audioImg from '../../assets/svg/audio.svg';
import soundPath from '../../assets/audio/audio.mp3';

import './CommonSettings.scss';

const CommonSettings: FC = () => {
  const dispatch = useDispatch();

  const isAudioPlay = useSelector(isAudioPlaySlice);

  const onSnowClickHandler = () => {
    console.log('snow');
  };
  const onAudioClickHandler = () => {
    if (isAudioPlay) {
      sound.stopSound();
    } else {
      sound.playSound(soundPath);
    }
    dispatch(toogleIsAudioPlay(!isAudioPlay));
  };

  return (
    <div className="settings">
      <button className="settings-snow" onClick={onSnowClickHandler}>
        <img src={snowImg} alt="Снег" />
      </button>
      <button className={isAudioPlay ? 'settings-audio active' : 'settings-audio'} onClick={onAudioClickHandler}>
        <img src={audioImg} alt="Звук" />
      </button>
    </div>
  );
};

export default CommonSettings;
