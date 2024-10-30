import React, { useState, lazy, Suspense } from 'react';
import css from './UserLogoModal.module.css';
import snippets from '../../assets/images/snippets.svg';
import Modal from '../Modal/Modal';
import clsx from 'clsx';

const UserSettingsForm = lazy(() =>
  import('../UserSettingsForm/UserSettingsForm')
);
const UserLogoutModal = lazy(() =>
  import('../UserLogoutModal/UserLogoutModal')
);

const UserLogoModal = ({ onClose }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const modalClasses = clsx('dropdown', css.dropdownMenu);
  const menuClasses = clsx('user-menu', css.listCon);
  const menuItemClasses = clsx('user-menu-item', css.menuItem);

  return (
    <div className={modalClasses}>
      <ul className={menuClasses} role="menu" aria-label="User Menu">
        <li
          className={menuItemClasses}
          role="menuitem"
          onClick={openSettingsModal}
        >
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-settings`}></use>
          </svg>
          Settings
        </li>
        <li
          className={menuItemClasses}
          role="menuitem"
          onClick={openLogoutModal}
        >
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-logout`}></use>
          </svg>
          Log out
        </li>
      </ul>
      {isSettingsModalOpen && (
        <Suspense>
          <Modal title="Settings" onClose={closeSettingsModal}>
            <UserSettingsForm onClose={closeSettingsModal} />
          </Modal>
        </Suspense>
      )}
      {isLogoutModalOpen && (
        <Suspense>
          <UserLogoutModal onClose={closeLogoutModal} />
        </Suspense>
      )}
    </div>
  );
};

export default UserLogoModal;
