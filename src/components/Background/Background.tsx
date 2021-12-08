import React, { FC } from 'react';

import './Background.scss';

interface Props {
  children: React.ReactNode;
  isHomePage?: boolean;
}

const Background: FC<Props> = ({ children, isHomePage = false }: Props) => (
  <div className={isHomePage ? 'home-page-bg' : 'page-bg'}>{children}</div>
);

export default Background;
