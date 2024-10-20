import MonthStatsTable from '../MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../TodayWaterList/TodayWaterList';
import styles from './WaterListWithCalendar.module.css';

const WaterListWithCalendar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.todayText}>Today</h2>
      <div className={styles.waterList}>
        <TodayWaterList />
      </div>
      <div className={styles.calendar}>
        <MonthStatsTable />
      </div>
    </div>
  );
};

export default WaterListWithCalendar;
