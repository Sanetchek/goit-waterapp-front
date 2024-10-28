import React from 'react';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
import { useSelector } from 'react-redux';
import { selectUserThemeColor } from '../../redux/auth/selectors';
import clsx from 'clsx';

const Layout = ({ children, username }) => {
  const themeColor = useSelector(selectUserThemeColor);
  const layoutClasses = clsx(css.layout, themeColor === 'dark' ? css.dark : css.light);

  return (
    <div className={layoutClasses}>
      <AppBar username={username} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
