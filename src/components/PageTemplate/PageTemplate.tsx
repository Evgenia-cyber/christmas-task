import React, { FC } from 'react';
import Background from '../Background/Background';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './PageTemplate.scss';

interface Props {
  children: React.ReactNode;
}

const PageTemplate: FC<Props> = ({ children }: Props) => (
  <Background>
    <div className="blur">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  </Background>
);

export default PageTemplate;
