import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { SNOWFLAKES_COUNT, TOYS_PAGE_PATH } from '../../constants';

import './Snow.scss';

const Snow: FC = () => {
  const { pathname } = useLocation();
  const isToysPage = pathname === `/${TOYS_PAGE_PATH}`;

  return (
    <div className={isToysPage ? 'snow-container snow-toy-page' : 'snow-container snow-home-and-game-page'}>
      {new Array(SNOWFLAKES_COUNT).fill('*').map((item, index) => {
        const key = index + 1;
        return (
          <p key={key} className="snowflake">
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default Snow;
