import React, { useEffect } from 'react';
import styles from './DeleteEntryModal.module.css';
import snippets from '../../../assets/images/sippets.svg';
const DeleteEntryModal = ({ onCancel, onDelete }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onCancel]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.deleteTextEntry}>Delete Entry</h2>
          <button className={styles.modalClose} onClick={onCancel}>
            <svg className="icon-x" width="24" height="24">
              <use href={`${snippets}#icon-x`}></use>
            </svg>
          </button>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.textAreYou}>
            Are you sure you want to delete the entry?
          </p>
          <div className={styles.btnContainer}>
            <button className={styles.cancelBtn} onClick={onCancel}>
              Cancel
            </button>
            <button className={styles.deleteBtn} onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteEntryModal;
