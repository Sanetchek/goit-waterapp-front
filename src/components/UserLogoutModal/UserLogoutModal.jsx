import React from 'react';
import Modal from 'components/Modal/Modal';
import css from './UserLogoutModal.module.css'; 
import {logout} from '../../redux/auth/operations'
import { useDispatch } from "react-redux";

const UserLogoutModal = ({ onClose, onDelete }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Modal title="Delete entry" onClose={onClose}>
      <div className={css.modalContent}>
        <p className={css.exitConfirmText}>Are you sure you want to delete the entry?</p>
        <div className={css.buttons}>
          <button className={css.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={css.deleteButton} onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UserLogoutModal;
