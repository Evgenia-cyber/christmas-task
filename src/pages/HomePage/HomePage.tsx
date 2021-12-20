import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import { TOYS_PAGE_PATH } from '../../constants';
import { BUTTON_TYPES } from '../../types/common';
import Header from '../../components/Header/Header';

import './HomePage.scss';

const HomePage: FC = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(TOYS_PAGE_PATH);
  };

  return (
    <Background isHomePage>
      <div
        style={{
          width: '90%',
          position: 'absolute',
          left: '5%',
          right: '5%',
          top: 0,
        }}
      >
        <Header />
      </div>
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
