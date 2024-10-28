import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './WaterListRow.module.css';
import icons from '../../../assets/images/snippets.svg';
import Modal from '../../Modal/Modal';
import DeleteEntryModal from '../DeleteEntry/DeleteEntry';
import TodayListModal from '../../TodayListModal/TodayListModal';
import {
  deleteWaterVolume,
  updateWaterVolume,
} from '../../../redux/water/operations';

export default function WaterListRow({ rowData, currentYear, currentMonth }) {
  const { _id, amount, date } = rowData || {};

  const time = date ? date.split('T')[1] : 'No time available';

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openDeleteModal = () => setModalIsOpen(true);
  const closeDeleteModal = () => setModalIsOpen(false);
  const openEditModal = () => setModalEditIsOpen(true);
  const closeEditModal = () => setModalEditIsOpen(false);

  const handleDelete = waterId => {
    dispatch(deleteWaterVolume(waterId))
    closeDeleteModal();
  };

  const handleEdit = (waterId, data) => {
    dispatch(updateWaterVolume({ id: waterId, updatedData: data }))
    closeEditModal();
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
        onClick={openEditModal}
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
            onDelete={() => handleDelete(_id)}
          />
        </Modal>
      )}
      {modalEditIsOpen && (
        <Modal
          title="Edit the entered amount of water"
          onClose={closeEditModal}
        >
          <TodayListModal
            title="Correct entered data:"
            onSave={values => handleEdit(_id, values)}
            previousWaterData={{ amount, time }}
          />
        </Modal>
      )}
    </div>
  );
}
