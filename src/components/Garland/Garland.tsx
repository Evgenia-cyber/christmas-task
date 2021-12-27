import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { activeGarlandSlice } from '../../redux/slices/gameSlice';

import './Garland.scss';

interface Props {
  count: number;
}

const Garland: FC<Props> = ({ count }) => {
  const activeGarland = useSelector(activeGarlandSlice);

  return (
    <ul className={`garland ${activeGarland}`}>
      {new Array(count).fill(1).map((garland, index) => {
        const key = garland + index;
        return <li key={key}>{}</li>;
      })}
    </ul>
  );
};

export default Garland;
