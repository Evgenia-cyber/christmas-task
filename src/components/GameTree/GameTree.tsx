import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_MAP_FOR_TREE, TREE_IMAGE_URL } from '../../constants';
import { gameSettingsSlice } from '../../redux/slices/gameSlice';

import './GameTree.scss';

const GameTree: FC = () => {
  const { activeTreeNum: tree, activeBgNum: bg } = useSelector(gameSettingsSlice);

  return (
    <div className={`game-bg-img game-bg-img${bg}`}>
      <map name="image-tree-map">
        <area coords={(IMAGE_MAP_FOR_TREE as Record<string, any>)[tree]} shape="poly" alt="" />
      </map>
      <img className="game-tree-img" src={`${TREE_IMAGE_URL}/${tree}.png`} alt="Ёлка" useMap="#image-tree-map" />
    </div>
  );
};

export default GameTree;
