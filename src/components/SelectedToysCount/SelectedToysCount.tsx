import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SELECTED_TOYS_MAX_COUNT } from '../../constants';
import { selectedToysCountSlice } from '../../redux/slices/toysSlice';

import './SelectedToysCount.scss';

const SelectedToysCount: FC = () => {
  const selectedToysCount = useSelector(selectedToysCountSlice);

  return (
    <p className="selected-toys-count">
      Количество выбранных видов игрушек: <span>{selectedToysCount}</span> из {SELECTED_TOYS_MAX_COUNT}
    </p>
  );
};

export default SelectedToysCount;
