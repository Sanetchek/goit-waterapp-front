import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors';

import css from './AppBar.module.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderUserSignIn from '../HeaderUserSignIn/HeaderUserSignIn';
import HeaderUserSignOut from 'components/HeaderUserSignOut/HeaderUserSignOut';

import clsx from 'clsx';

export default function AppBar() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const headerClass = clsx('mainContainer', css.appBar);

  return (
    <header className={headerClass}>
      <HeaderLogo />

      <div className={css.userStatus}>
        {isAuthenticated ? <HeaderUserSignIn /> : <HeaderUserSignOut />}
      </div>
    </header>
  );
}
