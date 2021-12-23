import React, { FC } from 'react';
import { IGameToy } from '../../types/common';
import GameToy from '../GameToy/GameToy';

import './GameToyCard.scss';

const GameToyCard: FC<IGameToy> = ({ num, countOfToysOnSlot, countOfToysOnTree }) => (
  <div className="game-toy-card">
    {countOfToysOnSlot &&
      new Array(countOfToysOnSlot).fill(0).map((_item, index) => {
        const key = index + num;
        return <GameToy key={key} num={num} />;
      })}
    <span className="toy-card-count">{countOfToysOnSlot}</span>
  </div>
);

export default GameToyCard;
