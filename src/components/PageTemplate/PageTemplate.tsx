import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { isSnowSlice } from '../../redux/slices/commonSettingsSlice';
import Background from '../Background/Background';
import Footer from '../Footer/Footer';
import Snow from '../Snow/Snow';

import './PageTemplate.scss';

interface Props {
  children: React.ReactNode;
}

const PageTemplate: FC<Props> = ({ children }: Props) => {
  const isSnow = useSelector(isSnowSlice);

  return (
    <Background>
      <div className="blur">
        {isSnow && <Snow />}
        <main className="main">{children}</main>
        <Footer />
      </div>
    </Background>
  );
};

export default PageTemplate;
