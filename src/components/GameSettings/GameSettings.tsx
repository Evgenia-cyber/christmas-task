import React, { FC } from 'react';
import ChooseBG from '../ChooseBG/ChooseBG';
import ChooseTree from '../ChooseTree/ChooseTree';

import './GameSettings.scss';

const GameSettings: FC = () => (
  <div>
    <div className="game-settings-container">
      <ChooseTree />
      <ChooseBG />
    </div>
  </div>
);

export default GameSettings;
