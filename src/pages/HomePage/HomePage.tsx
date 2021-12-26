import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import Snow from '../../components/Snow/Snow';
import { TOYS_PAGE_PATH } from '../../constants';
import { isSnowSlice } from '../../redux/slices/commonSettingsSlice';
import { BUTTON_TYPES } from '../../types/common';

import './HomePage.scss';

const HomePage: FC = () => {
  const navigate = useNavigate();

  const isSnow = useSelector(isSnowSlice);

  const onClickHandler = () => {
    navigate(TOYS_PAGE_PATH);
  };

  return (
    <Background isHomePage>
      {isSnow && <Snow />}
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
