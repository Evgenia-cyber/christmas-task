import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAudioPlaySlice, toogleIsAudioPlay } from '../../redux/slices/commonSettingsSlice';
import snowImg from '../../assets/svg/snow.svg';
import audioImg from '../../assets/svg/audio.svg';
import audio from '../../utils/audio';

import './CommonSettings.scss';

const CommonSettings: FC = React.memo(() => {
  const dispatch = useDispatch();

  const isAudioPlay = useSelector(isAudioPlaySlice);

  if (isAudioPlay) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }

  React.useEffect(() => {
    const onClickHandler = () => {
      if (isAudioPlay) {
        audio.play();
      }
      document.removeEventListener('click', onClickHandler);
    };

    document.addEventListener('click', onClickHandler);
  }, []);

  const onSnowClickHandler = () => {
    console.log('snow');
  };

  const onAudioClickHandler = () => {
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
});

export default CommonSettings;
