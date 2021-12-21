import React, { FC } from 'react';
import GameSettings from '../../components/GameSettings/GameSettings';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const GamePage: FC = () => (
  <PageTemplate>
    <div className="page-content">
      <div className="page-content-left">
        <GameSettings />
      </div>
      <div className="page-content-right"> </div>
    </div>
  </PageTemplate>
);

export default GamePage;
