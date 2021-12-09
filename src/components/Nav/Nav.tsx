import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_PAGE_PATH, NAV_LINKS } from '../../constants';
import logoImg from '../../assets/svg/tree.svg';

import './Nav.scss';

const Nav: FC = () => (
  <nav className="nav">
    {NAV_LINKS.map((link) => {
      const { to, text } = link;

      const isLogo = to === HOME_PAGE_PATH;

      const linkClass = isLogo ? 'logo' : 'nav-link';

      const setActiveLink = ({ isActive }: { isActive: boolean }) => (isActive ? `${linkClass} active` : linkClass);

      return isLogo ? (
        <NavLink key={to} to={`/${to}`} className={setActiveLink}>
          <img src={logoImg} alt="Лого" />
        </NavLink>
      ) : (
        <NavLink key={to} to={`/${to}`} className={setActiveLink}>
          {text}
        </NavLink>
      );
    })}
  </nav>
);

export default Nav;
