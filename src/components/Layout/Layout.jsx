import React from 'react';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

const Layout = ({ children, username }) => {

  return (
    <div className={css.layout}>
      <AppBar username={username} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
