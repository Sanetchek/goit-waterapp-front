import { FaEdit } from 'react-icons/fa';
import { CiGlass, CiTrash } from 'react-icons/ci';
import styles from './WaterListRow.module.css';

export default function WaterListRow({ rowData, onDelete }) {
  return (
    <div className={styles.listItem}>
      <CiGlass className={styles.icon} />
      <p className={styles.volume}>{rowData.volume} ml</p>
      <p className={styles.time}>{rowData.time}</p>

      <button className={styles.editButton} aria-label="Edit">
        <FaEdit className={styles.editIcon} />
      </button>

      <button
        className={styles.deleteButton}
        aria-label="Delete"
        onClick={() => onDelete(rowData.id)}
      >
        <CiTrash className={styles.deleteIcon} />
      </button>
    </div>
  );
}
