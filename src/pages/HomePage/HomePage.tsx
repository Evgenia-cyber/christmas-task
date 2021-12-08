import React, { FC } from 'react';
import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import { BUTTON_TYPES } from '../../types/common';

import './HomePage.scss';

const HomePage: FC = () => {
  const onClickHandler = () => {
    console.log(1);
  };

  return (
    <Background isHomePage>
      <h1 className="home-title">
        Новогодняя игра
        <br />
        „Наряди Ёлку“
      </h1>
      <Button text="Начать" type={BUTTON_TYPES.BUTTON} onClick={onClickHandler} />
    </Background>
  );
};

export default HomePage;
