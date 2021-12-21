import React, { FC } from 'react';
import ChooseTree from '../ChooseTree/ChooseTree';

import './GameSettings.scss';

const GameSettings: FC = () => (
  <div>
    <div className="game-settings-container">
      <ChooseTree />
    </div>
  </div>
);

export default GameSettings;
