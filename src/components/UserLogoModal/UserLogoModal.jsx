import React, { useState } from 'react';
import css from './UserLogoModal.module.css';
import snippets from '../../assets/images/snippets.svg';
import Modal from '../Modal/Modal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';

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

  return (
    <div className={css.dropdownMenu}>
      <ul className={css.listCon}>
        <li className={css.menuItem} onClick={openSettingsModal}>
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-settings`}></use>
          </svg>
          Settings
        </li>
        <li className={css.menuItem} onClick={openLogoutModal}>
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
