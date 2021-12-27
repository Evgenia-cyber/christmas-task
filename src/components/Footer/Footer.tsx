import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import rssLogo from '../../assets/svg/rss.svg';

import './Footer.scss';

const Footer: FC = () => (
  <footer className="footer">
    <NavLink className="footer-author" to="https://github.com/Evgenia-cyber" target="_blank" rel="noopener noreferrer">
      Куринёва Евгения
    </NavLink>

    <p>2021</p>

    <NavLink to="https://rs.school/js/" target="_blank" rel="noopener noreferrer">
      <img className="rs-school" src={rssLogo} alt="rs.school" />
    </NavLink>
  </footer>
);

export default Footer;
