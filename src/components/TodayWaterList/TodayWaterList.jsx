import React, { useState } from 'react';
import styles from './TodayWaterList.module.css';
import waterData from './WaterData';
import WaterListRow from './WaterListRow/WaterListRow';
import { FaPlus } from 'react-icons/fa';
import DeleteEntryModal from './DeleteEntryModal/DeleteEntryModal';
import { useDispatch } from 'react-redux';

export default function TodayWaterList({ openModal, onEdit }) {
  // const dispatch = useDispatch();
  // const waterData = dispatch();

  const [waterList, setWaterList] = useState(waterData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState(null);

  const handleDelete = id => {
    setEntryToDelete(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEntryToDelete(null);
  };

  const handleConfirmDelete = () => {
    setWaterList(prevList => prevList.filter(row => row.id !== entryToDelete));
    handleCloseModal();
  };

  const handleEdit = entry => {
    if (typeof onEdit === 'function') {
      onEdit(entry);
    } else {
      console.error('onEdit is not a function');
    }
  };

  return (
    <div className={`${styles.listContainer} ${styles.todayWaterList}`}>
      <div className={styles.scrollContainer}>
        <ul className={styles.waterList}>
          {waterList.map(rowData => (
            <li className={styles.waterItem} key={rowData.id}>
              <WaterListRow
                rowData={rowData}
                onDelete={handleDelete}
                onEdit={() => handleEdit(rowData)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.addButtonContainer}>
        <button
          className={styles.addButton}
          onClick={() => openModal('Add Water Entry', null, false)}
        >
          <FaPlus className="icon" />
          <span className={styles.addText}>Add water</span>
        </button>
      </div>

      {isModalOpen && (
        <DeleteEntryModal
          onCancel={handleCloseModal}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
}
