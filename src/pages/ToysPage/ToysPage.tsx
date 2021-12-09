import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import { fetchToysData, isLoadingSlice, toysArrSlice } from '../../redux/slices/toysSlice';
import { BUTTON_TYPES } from '../../types/common';

import './ToysPage.scss';

const ToysPage: FC = () => {
  const isLoading = useSelector(isLoadingSlice);
  const toys = useSelector(toysArrSlice);
  console.log('toys', toys);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (toys.length === 0) {
      dispatch(fetchToysData());
    }
  }, []);

  const onClickHandler = () => {
    console.log(1);
  };

  return (
    <Background>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>ToysPage</div>
          <Button text="Начать" type={BUTTON_TYPES.BUTTON} onClick={onClickHandler} />
        </>
      )}
    </Background>
  );
};

export default ToysPage;
