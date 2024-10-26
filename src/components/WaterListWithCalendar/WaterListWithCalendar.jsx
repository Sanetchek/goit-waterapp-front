import { useDispatch, useSelector } from 'react-redux';
import * as waterSelectors from '../../redux/water/selectors';

import MonthStatsTable from '../MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../TodayWaterList/TodayWaterList';

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
        {!waterIsLoading && !waterIsError && waterNotes.length > 0 && (
          <TodayWaterList openModal={openModal} />
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
