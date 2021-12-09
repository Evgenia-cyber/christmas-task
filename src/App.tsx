import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_PAGE_PATH, TOYS_PAGE_PATH } from './constants';
import HomePage from './pages/HomePage/HomePage';
import ToysPage from './pages/ToysPage/ToysPage';

const App: FC = () => (
  <Routes>
    <Route path={HOME_PAGE_PATH} element={<HomePage />} />
    <Route path={TOYS_PAGE_PATH} element={<ToysPage />} />
  </Routes>
);

export default App;
