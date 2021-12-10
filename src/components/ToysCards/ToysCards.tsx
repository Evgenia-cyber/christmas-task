import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { fetchToysData, isLoadingSlice, toysArrSlice } from '../../redux/slices/toysSlice';
import ToyCard from '../ToyCard/ToyCard';

import './ToysCards.scss';

const ToysCards: FC = () => {
  const isLoading = useSelector(isLoadingSlice);
  const toys = useSelector(toysArrSlice);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (toys.length === 0) {
      dispatch(fetchToysData());
    }
  }, []);

  return (
    <div className="toys-cards">
      {isLoading ? (
        <Loader />
      ) : (
        toys.length > 0 &&
        toys.map((toy) => (
          <ToyCard
            key={toy.num}
            num={toy.num}
            name={toy.name}
            count={toy.count}
            year={toy.year}
            shape={toy.shape}
            color={toy.color}
            size={toy.size}
            favorite={toy.favorite}
            isSelected={toy.isSelected}
          />
        ))
      )}
    </div>
  );
};

export default ToysCards;
