import React, { useState, useEffect } from 'react';
import css from './HeaderUserSignIn.module.css';
import snippets from '../../assets/images/snippets.svg';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/auth/selectors.js';
import clsx from 'clsx';
import UserLogoModal from '../UserLogoModal/UserLogoModal';

export default function HeaderUserSignIn() {
  const userAuthError = useSelector(selectors.selectAuthError);
  const userAuthLoading = useSelector(selectors.selectAuthLoading);
  const username = useSelector(selectors.selectUserName);
  const userAvatar = useSelector(selectors.selectUserAvatar);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [avatarColor, setAvatarColor] = useState(getRandomColor());

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      const button = document.querySelector(`.${css.button}`);
      const dropdown = event.target.closest('.dropdown');

      // Close the dropdown if click is outside of both button and dropdown
      if (isDropdownOpen && !dropdown && !button.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const svgClass = clsx('icon-chevron-down', css.svgChevron);

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Get the first letter of the username
  const firstLetter =
    !userAuthLoading && !userAuthError && username
      ? username.charAt(0).toUpperCase()
      : '';

  // Only generate a new color when the user avatar is not present
  useEffect(() => {
    if (!userAvatar) {
      setAvatarColor(getRandomColor());
    }
  }, [userAvatar]);

  return (
    <div className={css.buttonWrap}>
      <div
        className={css.button}
        onClick={() => setIsDropdownOpen(prev => !prev)}
      >
        <span className={css.userName}>
          {!userAuthLoading && !userAuthError && username}
        </span>
        <span className={css.userAva}>
          {userAvatar ? (
            <img
              src={userAvatar}
              loading="lazy"
              alt="avatar"
              className={css.avatarImage}
            />
          ) : (
            <div
              className={css.avatarPlaceholder}
              style={{ backgroundColor: avatarColor }}
            >
              {firstLetter}
            </div>
          )}
        </span>
        <svg className={svgClass} width="20" height="16">
          <use href={`${snippets}#icon-chevron-down`}></use>
        </svg>
      </div>
      {isDropdownOpen && <UserLogoModal onClose={handleClose} />}
    </div>
  );
}
