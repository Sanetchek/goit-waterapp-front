import { FaEdit } from 'react-icons/fa';
import { CiTrash } from 'react-icons/ci';
import styles from './WaterListRow.module.css';
import icons from '../../../assets/images/sippets.svg';

export default function WaterListRow({ rowData, onDelete }) {
  return (
    <div className={styles.listItem}>
      <svg className={styles.icon}>
        <use href={`${icons}#icon-water-icon`} />
      </svg>
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
