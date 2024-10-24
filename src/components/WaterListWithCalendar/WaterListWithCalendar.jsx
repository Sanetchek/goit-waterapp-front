import MonthStatsTable from '../MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../TodayWaterList/TodayWaterList';
import styles from './WaterListWithCalendar.module.css';

const WaterListWithCalendar = ({ openModal }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.todayText}>Today</h2>
      <div className={styles.waterList}>
        {/* Pass openModal down to TodayWaterList */}
        <TodayWaterList openModal={openModal} />
      </div>
      <div className={styles.calendar}>
        <MonthStatsTable />
      </div>
    </div>
  );
};

export default WaterListWithCalendar;
