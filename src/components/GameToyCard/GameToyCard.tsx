import React, { FC } from 'react';
import { IGameSlotToy } from '../../types/common';
import GameToy from '../GameToy/GameToy';

import './GameToyCard.scss';

interface Props {
  toysOnSlot: Array<IGameSlotToy>;
}

const GameToyCard: FC<Props> = ({ toysOnSlot }) => (
  <div className="game-toy-card">
    {toysOnSlot.length !== 0 && toysOnSlot.map((toy) => <GameToy key={toy.id} id={toy.id} num={toy.num} />)}
    <span className="toy-card-count">{toysOnSlot.length}</span>
  </div>
);

export default GameToyCard;
