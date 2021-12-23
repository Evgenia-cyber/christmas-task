import React, { FC } from 'react';
import { IGameToyCategory } from '../../types/common';
import GameToy from '../GameToy/GameToy';

import './GameToyCard.scss';

const GameToyCard: FC<IGameToyCategory> = ({ toysOnSlot }) => (
  <div className="game-toy-card">
    {toysOnSlot.length !== 0 && toysOnSlot.map((toy) => <GameToy key={toy.id} num={toy.num} />)}
    <span className="toy-card-count">{toysOnSlot.length}</span>
  </div>
);

export default GameToyCard;
