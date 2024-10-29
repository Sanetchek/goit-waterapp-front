import React, { useState } from 'react';
import css from './UserLogoModal.module.css';
import snippets from '../../assets/images/snippets.svg';
import Modal from '../Modal/Modal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import clsx from 'clsx';

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
      <ul className={menuClasses}>
        <li className={menuItemClasses} onClick={openSettingsModal}>
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-settings`}></use>
          </svg>
          Settings
        </li>
        <li className={menuItemClasses} onClick={openLogoutModal}>
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-logout`}></use>
          </svg>
          Log out
        </li>
      </ul>
      {isSettingsModalOpen && (
        <Modal title="Settings" onClose={closeSettingsModal}>
          <UserSettingsForm onClose={closeSettingsModal} />
        </Modal>
      )}
      {isLogoutModalOpen && <UserLogoutModal onClose={closeLogoutModal} />}
    </div>
  );
};

export default UserLogoModal;
