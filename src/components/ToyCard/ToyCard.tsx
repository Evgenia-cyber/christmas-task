import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TOY_IMAGE_URL } from '../../constants';
import { toogleIsSelectedOfToy } from '../../redux/slices/toysSlice';
import { IToy } from '../../types/common';

import './ToyCard.scss';

const ToyCard: FC<IToy> = ({ num, name, count, year, shape, color, size, favorite, isSelected }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toogleIsSelectedOfToy(num));
  };

  return (
    <div className="toy-card" onClick={onClickHandler} role="button" tabIndex={0} onKeyDown={onClickHandler}>
      <h2 className="toy-title">{name}</h2>
      <div className="toy-container">
        <div className="toy-container-left">
          <img className="toy-img" src={`${TOY_IMAGE_URL}/${num}.png`} alt="игрушка" />
          <div className={isSelected ? 'selected' : 'not-selected'}> </div>
        </div>
        <div className="toy-container-right">
          <p className="toy-count">Количество: {count}</p>
          <p>Форма: {shape}</p>
          <p>Цвет: {color}</p>
          <p>Размер: {size}</p>
          <p>Любимая: {favorite ? 'да' : 'нет'}</p>
          <p>Год покупки: {year}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
