import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

import css from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Function to build class names for NavLink
  const buildLinkClass = ({ isActive }) => (isActive ? css.active : css.link);

  return (
    <header className={css.appBar}>
      <img src={logo} alt="" />

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Wellcome
        </NavLink>
        <NavLink to="/home" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Login
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          Registration
        </NavLink>
      </nav>

      {isAuthenticated ? 'Sign In' : 'David'}
    </header>
  );
}
