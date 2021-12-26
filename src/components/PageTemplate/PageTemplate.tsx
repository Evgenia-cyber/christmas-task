import React, { FC } from 'react';
import Background from '../Background/Background';
import Footer from '../Footer/Footer';

import './PageTemplate.scss';

interface Props {
  children: React.ReactNode;
}

const PageTemplate: FC<Props> = ({ children }: Props) => (
  <Background>
    <div className="blur">
      <main className="main">{children}</main>
      <Footer />
    </div>
  </Background>
);

export default PageTemplate;
