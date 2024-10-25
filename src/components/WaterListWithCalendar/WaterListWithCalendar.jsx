import MonthStatsTable from '../MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../TodayWaterList/TodayWaterList';
import styles from './WaterListWithCalendar.module.css';

const WaterListWithCalendar = ({
  openModal,
  waterConsumed,
  userDailyNormWater,
  onEdit,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.todayText}>Today</h2>
      <div className={styles.waterList}>
        {/* Pass openModal down to TodayWaterList */}
        <TodayWaterList openModal={openModal} onEdit={onEdit} />
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
