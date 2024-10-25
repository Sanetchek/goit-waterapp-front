import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './WaterListRow.module.css';
import icons from '../../../assets/images/snippets.svg';
import DeleteEntryModal from '../DeleteEntry/DeleteEntry';
import Modal from '../../Modal/Modal';
import { deleteWaterVolume } from '../../../redux/water/operations';

export default function WaterListRow({ rowData }) {
  const { _id, amount, date } = rowData || {};

  const time = date ? date.split('T')[1] : 'No time available';

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openDeleteModal = () => {
    setModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = waterId => {
    dispatch(deleteWaterVolume(waterId));
    closeDeleteModal();
  };

  const handleEdit = waterId => {
    console.log(waterId);
  };

  return (
    <div className={styles.listItem}>
      <svg className={styles.icon} width="36" height="36">
        <use href={`${icons}#icon-glass`} />
      </svg>
      <p className={styles.volume}>{amount} ml</p>
      <p className={styles.time}>{time}</p>

      <button
        className={styles.editButton}
        aria-label="Edit"
        onClick={() => handleEdit(_id)}
      >
        <svg className={styles.editIcon} width="16" height="16">
          <use href={`${icons}#icon-pencil`} />
        </svg>
      </button>

      <button
        className={styles.deleteButton}
        aria-label="Delete"
        onClick={openDeleteModal}
      >
        <svg className={styles.deleteIcon} width="16" height="16">
          <use href={`${icons}#icon-trash`} />
        </svg>
      </button>

      {modalIsOpen && (
        <Modal title="Delete Entry" onClose={closeDeleteModal}>
          <DeleteEntryModal
            onCancel={closeDeleteModal}
            onDelete={() => handleDelete(_id)} // Pass function reference
          />
        </Modal>
      )}
    </div>
  );
}
