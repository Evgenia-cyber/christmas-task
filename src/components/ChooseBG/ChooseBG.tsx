import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BG_COUNT, BG_IMAGE_URL } from '../../constants';
import { gameSettingsSlice, setGameSettings } from '../../redux/slices/gameSlice';
import { IGameSettings } from '../../types/common';
import ChooseItem from '../ChooseItem/ChooseItem';

import './ChooseBG.scss';

const ChooseBG: FC = () => {
  const dispatch = useDispatch();

  const settings = useSelector(gameSettingsSlice);

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.dataset.settingvalue;
    if (data) {
      const newSettings: IGameSettings = { ...settings, activeBgNum: data };

      dispatch(setGameSettings(newSettings));
    }
  };

  return (
    <ChooseItem
      settingTitle="Фоны:"
      countItems={BG_COUNT}
      imageUrl={BG_IMAGE_URL}
      imageExtension="jpg"
      imageAlt="фон"
      onClickHandler={onClickHandler}
      activeItemNum={settings.activeBgNum}
      className="bg-btn"
    />
  );
};

export default ChooseBG;
