import { useSelector } from 'react-redux';
import * as waterSelectors from '../../redux/water/selectors';
import MonthStatsTable from '../MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../TodayWaterList/TodayWaterList';
import Loading from '../Loading/Loading';
import snippets from '../../assets/images/snippets.svg';
import styles from './WaterListWithCalendar.module.css';

const WaterListWithCalendar = ({
  openModal,
  currentYear,
  currentMonth,
  setCurrentYear,
  setCurrentMonth,
}) => {
  const waterIsLoading = useSelector(waterSelectors.selectIsLoading);
  const waterIsError = useSelector(waterSelectors.selectError);
  const waterNotes = useSelector(waterSelectors.selectTodaysWaterNotes) || [];
  const monthlyConsumption =
    useSelector(waterSelectors.selectMonthlyWaterData) || [];
  const monthlyWaterlist = monthlyConsumption?.data || [];

  const handleMonthChange = (newYear, newMonth) => {
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

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
                <TodayWaterList
                  openModal={openModal}
                  currentYear={currentYear}
                  currentMonth={currentMonth}
                />
                <div className={styles.addButtonContainer}>
                  <button className={styles.addButton} onClick={openModal}>
                    <svg className={styles.icon} width="24" height="24">
                      <use href={`${snippets}#icon-plus`} />
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
                      <use href={`${snippets}#icon-plus`} />
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
        {waterIsLoading && <Loading />}
        {!waterIsLoading && waterIsError && (
          <div className={styles.error}>Error loading water data</div>
        )}
        {!waterIsLoading && !waterIsError && monthlyWaterlist.length > 0 && (
          <MonthStatsTable
            monthlyWaterlist={monthlyWaterlist}
            currentYear={currentYear}
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
          />
        )}
      </div>
    </div>
  );
};

export default WaterListWithCalendar;
