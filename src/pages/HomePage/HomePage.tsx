import React, { FC } from 'react';
import Button from '../../components/Button/Button';
import { BUTTON_TYPES } from '../../types/common';

import './HomePage.scss';

const HomePage: FC = () => {
  const onClickHandler = () => {
    console.log(1);
  };

  return (
    <main>
      <Button text="Начать" type={BUTTON_TYPES.BUTTON} onClick={onClickHandler} />
    </main>
  );
};

export default HomePage;
