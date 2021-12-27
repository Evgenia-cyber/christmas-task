import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_MAP_FOR_TREE, TREE_IMAGE_URL } from '../../constants';
import { gameSettingsSlice, gameToysOnTreeSlice, setIsToyAboveTreeNow } from '../../redux/slices/gameSlice';
import GameToy from '../GameToy/GameToy';

import './GameTree.scss';

const GameTree: FC = () => {
  const dispatch = useDispatch();

  const toysOnTree = useSelector(gameToysOnTreeSlice);

  const { activeTreeNum: tree, activeBgNum: bg } = useSelector(gameSettingsSlice);

  const allowDrop = (event: React.MouseEvent<HTMLAreaElement>) => {
    event.preventDefault();
  };

  const onDropToyToTree = (event: React.MouseEvent<HTMLAreaElement>) => {
    event.preventDefault();
    dispatch(setIsToyAboveTreeNow(true));
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
      {toysOnTree.length > 0 &&
        toysOnTree.map((toy) => <GameToy key={toy.id} id={toy.id} num={toy.num} x={toy.x} y={toy.y} />)}
    </div>
  );
};

export default GameTree;
