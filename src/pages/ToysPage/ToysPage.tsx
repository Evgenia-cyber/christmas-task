import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import { selectCount, increment, decrement, incrementByAmount } from '../../redux/slices/testSlice';
import { BUTTON_TYPES } from '../../types/common';

import './ToysPage.scss';

const ToysPage: FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState('2');

  const onClickHandler = () => {
    console.log(1);
  };

  return (
    <Background>
      <div>
        <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
        <div>
          <input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button type="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
            Add Amount
          </button>
        </div>
      </div>
      <Button text="Начать" type={BUTTON_TYPES.BUTTON} onClick={onClickHandler} />
    </Background>
  );
};

export default ToysPage;
