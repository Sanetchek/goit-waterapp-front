import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/water/selectors.js';
import snippets from "../../assets/images/snippets.svg";

import styles from './TodayWaterList.module.css';

import WaterListRow from './WaterListRow/WaterListRow';

export default function TodayWaterList() {
  const todaysWaterList = useSelector(selectors.selectTodaysWaterNotes);

  return (
    <div className={`${styles.listContainer} ${styles.todayWaterList}`}>
      <div className={styles.scrollContainer}>
        <ul className={styles.waterList}>
          {todaysWaterList.map(note => (
            <li className={styles.waterItem} key={note._id}>
              <WaterListRow rowData={note} />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.addButtonContainer}>
        <button className={styles.addButton}>
          <svg className="icon" width="24" height="24">
            <use href={`${snippets}#icon-plus`}></use>
          </svg>
          <span className={styles.addText}>Add water</span>
        </button>
      </div>
    </div>
  );
}
