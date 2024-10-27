import { useSelector } from 'react-redux';
import * as waterSelectors from '../../redux/water/selectors';

import MonthStatsTable from '../MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../TodayWaterList/TodayWaterList';
import Loading from '../Loading/Loading';

import styles from './WaterListWithCalendar.module.css';

const WaterListWithCalendar = ({ openModal }) => {
  const waterIsLoading = useSelector(waterSelectors.selectIsLoading);
  const waterIsError = useSelector(waterSelectors.selectError);
  const waterNotes = useSelector(waterSelectors.selectTodaysWaterNotes) || [];
  const monthlyConsumption =
    useSelector(waterSelectors.selectMonthlyWaterData) || [];
  const monthlyWaterlist = monthlyConsumption?.data || [];

  return (
    <div className={styles.container}>
      <h2 className={styles.todayText}>Today</h2>
      <div className={styles.waterList}>
        {waterIsLoading && <Loading />}
        {!waterIsLoading && waterIsError && (
          <div className={styles.error}>Error loading water data</div>
        )}
        {!waterIsLoading && !waterIsError && waterNotes.length > 0 && (
          <TodayWaterList openModal={openModal} />
        )}
      </div>
      <div className={styles.calendar}>
        {waterIsLoading && <Loading />}
        {!waterIsLoading && waterIsError && (
          <div className={styles.error}>Error loading water data</div>
        )}
        {!waterIsLoading && !waterIsError && monthlyWaterlist.length > 0 && (
          <MonthStatsTable monthlyWaterlist={monthlyWaterlist} />
        )}
      </div>
    </div>
  );
};

export default WaterListWithCalendar;
