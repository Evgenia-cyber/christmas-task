import React, { FC } from 'react';
import CommonSettings from '../CommonSettings/CommonSettings';
import Nav from '../Nav/Nav';

import './Header.scss';

const Header: FC = () => (
  <header className="header">
    <Nav />
    <CommonSettings />
  </header>
);

export default Header;
