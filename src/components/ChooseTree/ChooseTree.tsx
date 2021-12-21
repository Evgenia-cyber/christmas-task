import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TREE_COUNT, TREE_IMAGE_URL } from '../../constants';
import { gameSettingsSlice, setGameSettings } from '../../redux/slices/gameSlice';
import { IGameSettings } from '../../types/common';
import ChooseItem from '../ChooseItem/ChooseItem';

import './ChooseTree.scss';

const ChooseTree: FC = () => {
  const dispatch = useDispatch();

  const settings = useSelector(gameSettingsSlice);

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const data = event.currentTarget.dataset.settingvalue;
    if (data) {
      const newSettings: IGameSettings = { ...settings, activeTreeNum: data };

      dispatch(setGameSettings(newSettings));
    }
  };

  return (
    <ChooseItem
      settingTitle="Ёлки:"
      countItems={TREE_COUNT}
      imageUrl={TREE_IMAGE_URL}
      imageExtension="png"
      imageAlt="ёлка"
      onClickHandler={onClickHandler}
      activeItemNum={settings.activeTreeNum}
      className="tree-btn"
    />
  );
};

export default ChooseTree;
