import React from 'react';
import Modal from '../Modal/Modal';
import css from './UserLogoutModal.module.css';
import {logout} from '../../redux/auth/operations'
import { useDispatch } from "react-redux";

const UserLogoutModal = ({ onClose, onDelete }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Modal title="Log out" onClose={onClose}>
      <div className={css.modalContent}>
        <p className={css.exitConfirmText}>Do you really want to leave?</p>
        <div className={css.buttons}>
          <button className={css.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={css.deleteButton} onClick={handleClick}>
          Log out
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UserLogoutModal;
