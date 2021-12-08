import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_PAGE_PATH } from './constants';
import HomePage from './pages/HomePage/HomePage';

const App: FC = () => (
  <Routes>
    <Route path={HOME_PAGE_PATH} element={<HomePage />} />
  </Routes>
);

export default App;
