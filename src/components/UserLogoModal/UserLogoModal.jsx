import React from 'react';
import css from './UserLogoModal.module.css'
import snippets from '../../assets/images/sippets.svg';

const UserLogoModal = ({ onClose }) => {
  return (
    <div className={css.dropdownMenu}>
      <ul className={css.listCon}>
        <li className={css.menuItem}>
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-settings`}></use>
          </svg>
          Setting
        </li>
        <li className={css.menuItem}>
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-logout`}></use>
          </svg>
          Log out
        </li>
      </ul>
    </div>
  )
}

export default UserLogoModal