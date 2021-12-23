import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameToysData, gameToysOnSlotsSlice, isLoadingSlice } from '../../redux/slices/gameSlice';
import { selectedToysSlice } from '../../redux/slices/toysSlice';
import GameToyCard from '../GameToyCard/GameToyCard';
import Loader from '../Loader/Loader';

import './GameToysCards.scss';

const GameToysCards: FC = () => {
  const isLoading = useSelector(isLoadingSlice);
  const toysOnSlots = useSelector(gameToysOnSlotsSlice);
  const selectedToysFromToysPage = useSelector(selectedToysSlice);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGameToysData(selectedToysFromToysPage));
  }, []);

  return (
    <div className="setting">
      <h3 className="setting-title">Игрушки:</h3>
      <div className="game-toys-cards">
        {isLoading ? (
          <Loader />
        ) : (
          toysOnSlots.length > 0 &&
          toysOnSlots.map((category, index) => {
            const key = index + 1;
            return <GameToyCard key={key} toysOnSlot={category.toysOnSlot} />;
          })
        )}
      </div>
    </div>
  );
};

export default GameToysCards;
