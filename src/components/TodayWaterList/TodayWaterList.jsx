import React, { useState } from 'react';
import styles from './TodayWaterList.module.css';
import waterData from './WaterData';
import WaterListRow from './WaterListRow/WaterListRow';
import { FaPlus } from 'react-icons/fa';
import DeleteEntryModal from '../TodayWaterList/DeleteEntryModal/DeleteEntryModal';

export default function TodayWaterList() {
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

  return (
    <div className={`${styles.listContainer} ${styles.todayWaterList}`}>
      <div className={styles.scrollContainer}>
        <ul className={styles.waterList}>
          {waterList.map(rowData => (
            <li className={styles.waterItem} key={rowData.id}>
              <WaterListRow rowData={rowData} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      </div>

      {waterList.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.addButtonContainer}>
            <button className={styles.addButton}>
              <FaPlus className="icon" />
              <span className={styles.addText}>Add water</span>
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton}>
            <FaPlus className="icon" />
            <span className={styles.addText}>Add water</span>
          </button>
        </div>
      )}

      {isModalOpen && (
        <DeleteEntryModal
          onCancel={handleCloseModal}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
}
