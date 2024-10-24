import React from 'react';
import css from './HeaderUserSignIn.module.css';
import snippets from '../../assets/images/snippets.svg';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/auth/selectors.js';
import clsx from 'clsx';

export default function HeaderUserSignIn() {
  const username = useSelector(selectors.selectUserName);
  const userAvatar = useSelector(selectors.selectUserAvatar);

  const svgClass = clsx('icon-chevron-down', css.svgChevron);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Get the first letter of the username
  const firstLetter = username ? username.charAt(0).toUpperCase() : '';

  return (
    <div className={css.button}>
      <span className={css.userName}>{username}</span>
      <span className={css.userAva}>
        {userAvatar ? (
          <img src={userAvatar} alt="avatar" />
        ) : (
          <div
            className={css.avatarPlaceholder}
            style={{ backgroundColor: getRandomColor() }}
          >
            {firstLetter}
          </div>
        )}
      </span>
      <svg className={svgClass} width="20" height="16">
        <use href={`${snippets}#icon-chevron-down`}></use>
      </svg>
    </div>
  );
}
