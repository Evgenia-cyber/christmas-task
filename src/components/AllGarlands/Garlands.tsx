import React, { FC } from 'react';
import { FIRST_GARLAND_COUNT, FOURTH_GARLAND_COUNT, SECOND_GARLAND_COUNT, THIRD_GARLAND_COUNT } from '../../constants';
import Garland from '../Garland/Garland';

import './Garlands.scss';

const Garlands: FC = () => (
  <div className="garlands-container">
    <div className="first-garland">
      <Garland count={FIRST_GARLAND_COUNT} />
    </div>
    <div className="second-garland">
      <Garland count={SECOND_GARLAND_COUNT} />
    </div>
    <div className="third-garland">
      <Garland count={THIRD_GARLAND_COUNT} />
    </div>
    <div className="fourth-garland">
      <Garland count={FOURTH_GARLAND_COUNT} />
    </div>
  </div>
);

export default Garlands;
