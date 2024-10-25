import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodayWaterConsumption } from '../../redux/water/operations';
import * as waterSelectors from '../../redux/water/selectors';

import MonthStatsTable from '../MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../TodayWaterList/TodayWaterList';

import styles from './WaterListWithCalendar.module.css';

const WaterListWithCalendar = ({ waterConsumed, userDailyNormWater }) => {
  const waterIsLoading = useSelector(waterSelectors.selectIsLoading);
  const waterIsError = useSelector(waterSelectors.selectError);
  const waterNotes = useSelector(waterSelectors.selectTodaysWaterNotes) || []; // Fallback to an empty array
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodayWaterConsumption());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.todayText}>Today</h2>
      <div className={styles.waterList}>
        {!waterIsLoading && !waterIsError && waterNotes.length > 0 && (
          <TodayWaterList />
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
