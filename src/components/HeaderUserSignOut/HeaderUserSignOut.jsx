import React from 'react';
import { Link } from 'react-router-dom';
import css from './HeaderUserSignOut.module.css';
import snippets from '../../assets/images/snippets.svg';

export default function HeaderUserSignOut() {
  return (
    <Link to="/signin" className={css.link}>
      <span className={css.linkName}>Sign in</span>
      <svg
        className={css.iconUser}
        width="28"
        height="28"
        aria-label="User Icon"
      >
        <use href={`${snippets}#icon-user`}></use>
      </svg>
    </Link>
  );
}
