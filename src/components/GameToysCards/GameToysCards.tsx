import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameToysData, gameToysSlice, isLoadingSlice } from '../../redux/slices/gameSlice';
import GameToyCard from '../GameToyCard/GameToyCard';
import Loader from '../Loader/Loader';

import './GameToysCards.scss';

const GameToysCards: FC = () => {
  const isLoading = useSelector(isLoadingSlice);
  const toys = useSelector(gameToysSlice);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (toys.length === 0) {
      dispatch(fetchGameToysData());
    }
  }, []);

  return (
    <div className="setting">
      <h3 className="setting-title">Игрушки:</h3>
      <div className="game-toys-cards">
        {isLoading ? (
          <Loader />
        ) : (
          toys.length > 0 &&
          toys.map((toy) => (
            <GameToyCard
              key={toy.num}
              num={toy.num}
              countOfToysOnSlot={toy.countOfToysOnSlot}
              countOfToysOnTree={toy.countOfToysOnTree}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameToysCards;
