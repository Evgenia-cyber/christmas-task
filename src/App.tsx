import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GAME_PAGE_PATH, HOME_PAGE_PATH, TOYS_PAGE_PATH } from './constants';
import GamePage from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage';
import ToysPage from './pages/ToysPage/ToysPage';

const App: FC = () => (
  <Routes>
    <Route path={HOME_PAGE_PATH} element={<HomePage />} />
    <Route path={TOYS_PAGE_PATH} element={<ToysPage />} />
    <Route path={GAME_PAGE_PATH} element={<GamePage />} />
  </Routes>
);

export default App;
