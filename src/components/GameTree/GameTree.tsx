import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_MAP_FOR_TREE, TREE_IMAGE_URL } from '../../constants';
import { gameSettingsSlice } from '../../redux/slices/gameSlice';

import './GameTree.scss';

const GameTree: FC = () => {
  const { activeTreeNum: tree, activeBgNum: bg } = useSelector(gameSettingsSlice);

  const allowDrop = (event: React.MouseEvent<HTMLAreaElement>) => {
    event.preventDefault();
    console.log('dragOver');
  };

  const onDropToyToTree = (event: React.MouseEvent<HTMLAreaElement>) => {
    event.preventDefault();
    console.log('drop');
  };

  return (
    <div className={`game-bg-img game-bg-img${bg}`}>
      <map name="image-tree-map">
        <area
          coords={(IMAGE_MAP_FOR_TREE as Record<string, any>)[tree]}
          shape="poly"
          alt=""
          onDragOver={allowDrop}
          onDrop={onDropToyToTree}
        />
      </map>
      <img
        className="game-tree-img"
        src={`${TREE_IMAGE_URL}/${tree}.png`}
        alt="Ёлка"
        useMap="#image-tree-map"
        draggable={false}
      />
    </div>
  );
};

export default GameTree;
