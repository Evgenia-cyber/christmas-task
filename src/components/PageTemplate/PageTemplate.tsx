import React, { FC } from 'react';
import Background from '../Background/Background';
import Header from '../Header/Header';

import './PageTemplate.scss';

interface Props {
  children: React.ReactNode;
}

const PageTemplate: FC<Props> = ({ children }: Props) => (
  <Background>
    <div className="blur">
      <Header />
      <main>{children}</main>
    </div>
  </Background>
);

export default PageTemplate;
