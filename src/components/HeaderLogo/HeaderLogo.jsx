import React from 'react';
import { Link } from 'react-router-dom';
import css from './HeaderLogo.module.css';
import logo from '../../assets/images/logo.png';
import logo2x from '../../assets/images/logo@2x.png';

export default function HeaderLogo() {
  return (
    <Link to="/" className={css.logo}>
      <picture>
        <source srcSet={`${logo2x} 2x, ${logo} 1x`} />
        <img
          className={css.logoImage}
          src={logo}
          loading="lazy"
          alt="Logo"
          width="102"
          height="48"
        />
      </picture>
    </Link>
  );
}
