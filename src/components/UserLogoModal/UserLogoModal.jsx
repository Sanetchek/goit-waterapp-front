import React, {useState} from 'react';
import css from './UserLogoModal.module.css'
import snippets from '../../assets/images/snippets.svg';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import UserSettingsModal from 'components/UserSettingsModal/UserSettingsModal.jsx';

const UserLogoModal = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // const handleDelete = () => {
  //   console.log("Entry deleted");
  //   setIsModalOpen(false);
  // };


  return (
    <div className={css.dropdownMenu}>
      <ul className={css.listCon}>
        <li className={css.menuItem} onClick={() => setModalOpen(true)}>
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-settings`}></use>
          </svg>
          Setting
        </li>
        <li className={css.menuItem} onClick={() => setIsModalOpen(true)}>
          <svg className={css.icon} width="16" height="16" viewBox="0 0 24 24">
            <use href={`${snippets}#icon-logout`}></use>
          </svg>
          Log out
        </li>
      </ul>
      {modalOpen && (
        <UserSettingsModal onClose={() => setModalOpen(false)} />
      )}
      {isModalOpen && (
        <UserLogoutModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}

export default UserLogoModal;
