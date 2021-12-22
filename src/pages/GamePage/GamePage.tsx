import React, { FC } from 'react';
import GameSettings from '../../components/GameSettings/GameSettings';
import GameToysCards from '../../components/GameToysCards/GameToysCards';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

import './GamePage.scss';

const GamePage: FC = () => (
  <PageTemplate>
    <div className="page-content">
      <div>
        <GameSettings />
      </div>
      <div className="page-content-right">
        <GameToysCards />
      </div>
    </div>
  </PageTemplate>
);

export default GamePage;
