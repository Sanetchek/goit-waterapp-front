import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

import css from './AppBar.module.css';

export default function AppBar({ username }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const buildLinkClass = ({ isActive }) => (isActive ? css.active : css.link);

  return (
    <header className={css.appBar}>
      <img src={logo} alt="Logo" />

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Wellcome
        </NavLink>
        <NavLink to="/home" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/signin" className={buildLinkClass}>
          Sign in
        </NavLink>
        <NavLink to="/signup" className={buildLinkClass}>
          Sign up
        </NavLink>
      </nav>

      <div className={css.userStatus}>
        {isAuthenticated ? `Welcome, ${username}!` : 'Please sign in'}
      </div>
    </header>
  );
}
