import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import GameSettings from '../../components/GameSettings/GameSettings';
import GameToysCards from '../../components/GameToysCards/GameToysCards';
import GameTree from '../../components/GameTree/GameTree';
import Garlands from '../../components/Garlands/Garlands';
import GarlandSetting from '../../components/GarlandSetting/GarlandSetting';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { offAudioAndSnow } from '../../redux/slices/commonSettingsSlice';
import { resetTreeAndBg } from '../../redux/slices/gameSlice';
import { BUTTON_TYPES } from '../../types/common';

import './GamePage.scss';

const GamePage: FC = () => {
  const dispatch = useDispatch();

  const onResetAllBtnClickHandler = () => {
    dispatch(resetTreeAndBg());
    dispatch(offAudioAndSnow());
  };

  return (
    <PageTemplate>
      <div className="page-content">
        <div>
          <GameSettings />
          <Button text="Сбросить настройки" type={BUTTON_TYPES.BUTTON} onClick={onResetAllBtnClickHandler} />
        </div>
        <div className="tree-container">
          <GameTree />
          <Garlands />
        </div>
        <div className="page-content-right">
          <GameToysCards />
          <GarlandSetting />
        </div>
      </div>
    </PageTemplate>
  );
};

export default GamePage;
