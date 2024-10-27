import { useSelector } from 'react-redux';
import * as waterSelectors from '../../redux/water/selectors';

import MonthStatsTable from '../MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../TodayWaterList/TodayWaterList';
import Loading from '../Loading/Loading';
import snippets from '../../assets/images/snippets.svg';
import styles from './WaterListWithCalendar.module.css';

const WaterListWithCalendar = ({
  waterConsumed,
  userDailyNormWater,
  openModal,
}) => {
  const waterIsLoading = useSelector(waterSelectors.selectIsLoading);
  const waterIsError = useSelector(waterSelectors.selectError);
  const waterNotes = useSelector(waterSelectors.selectTodaysWaterNotes) || [];

  return (
    <div className={styles.container}>
      <h2 className={styles.todayText}>Today</h2>
      <div className={styles.waterList}>
        {waterIsLoading && <Loading />}
        {!waterIsLoading && waterIsError && (
          <div className={styles.error}>Error loading water data</div>
        )}
        {!waterIsLoading && !waterIsError && (
          <>
            {waterNotes.length > 0 ? (
              <>
                <TodayWaterList openModal={openModal} />
                <div className={styles.addButtonContainer}>
                  <button className={styles.addButton} onClick={openModal}>
                    <svg className={styles.icon} width="24" height="24">
                      <use href={`${snippets}#icon-plus`}></use>
                    </svg>
                    <span className={styles.addText}>Add water</span>
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.emptyContainer}>
                <div className={styles.addButtonContainer}>
                  <button className={styles.addButton} onClick={openModal}>
                    <svg className={styles.icon} width="24" height="24">
                      <use href={`${snippets}#icon-plus`}></use>
                    </svg>
                    <span className={styles.addText}>Add water</span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <div className={styles.calendar}>
        <MonthStatsTable
          waterConsumed={waterConsumed}
          dailyNorm={userDailyNormWater}
        />
      </div>
    </div>
  );
};

export default WaterListWithCalendar;
