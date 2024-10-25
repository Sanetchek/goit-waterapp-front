import React from 'react';
import styles from './DeleteEntry.module.css';
// import snippets from '../../../assets/images/snippets.svg';

const DeleteEntry = ({ onCancel, onDelete }) => {

  return (
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
  );
};

export default DeleteEntry;
