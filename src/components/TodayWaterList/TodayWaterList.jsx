import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/water/selectors.js';
import WaterListRow from './WaterListRow/WaterListRow';

import styles from './TodayWaterList.module.css';

export default function TodayWaterList({ currentYear, currentMonth }) {
  const todaysWaterList = useSelector(selectors.selectVisibleWaterNotes);

  return (
    <div className={`${styles.listContainer} ${styles.todayWaterList}`}>
      <div className={styles.scrollContainer}>
        <ul className={styles.waterList}>
          {todaysWaterList.map((note, index) => (
            <li className={styles.waterItem} key={`${note._id}-${index}`}>
              <WaterListRow
                rowData={note}
                currentYear={currentYear}
                currentMonth={currentMonth}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
