import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TOY_IMAGE_URL } from '../../constants';
import { IGameToy } from '../../types/common';

import './GameToyCard.scss';

const GameToyCard: FC<IGameToy> = ({ num, countOfToysOnSlot, countOfToysOnTree }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log('click');
  };

  return (
    <button className="game-toy-card" onClick={onClickHandler}>
      {countOfToysOnSlot &&
        new Array(countOfToysOnSlot).fill(0).map((_item, index) => {
          const key = index + num;
          return <img key={key} src={`${TOY_IMAGE_URL}/${num}.png`} alt={`игрушка${num}`} />;
        })}
      <span className="toy-card-count">{countOfToysOnSlot}</span>
    </button>
  );
};

export default GameToyCard;
