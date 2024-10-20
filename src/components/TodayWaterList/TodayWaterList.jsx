import { useState } from 'react';
import styles from './TodayWaterList.module.css';
import waterData from './WaterData';
import WaterListRow from './WaterListRow/WaterListRow';
import { FaPlus } from 'react-icons/fa';

export default function TodayWaterList() {
  const [waterList, setWaterList] = useState(waterData);

  const handleDelete = id => {
    setWaterList(prevList => prevList.filter(row => row.id !== id));
  };

  return (
    <div className={styles.listContainer}>
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
    </div>
  );
}
