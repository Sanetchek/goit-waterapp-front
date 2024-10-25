import { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import styles from './MonthStatsTable.module.css';
import clsx from 'clsx';
import Loading from '../Loading/Loading';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';

const MonthStatsTable = ({ waterConsumed, dailyNorm = 1500 }) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDayId, setSelectedDayId] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchDataForMonth(currentYear, currentMonth, waterConsumed, dailyNorm);
  }, [currentYear, currentMonth, waterConsumed, dailyNorm]);

  const fetchDataForMonth = (year, month, consumed, norm) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const data = Array.from({ length: daysInMonth }, (_, i) => {
      const dayWaterConsumption = consumed[i] || 0;
      const percentage = Math.min(
        Math.round((dayWaterConsumption / norm) * 100),
        100
      );

      console.log(
        `Day: ${
          i + 1
        }, Water Consumed: ${dayWaterConsumption}, Daily Norm: ${norm}, Percentage: ${percentage}`
      );

      return {
        id: i + 1,
        percentage,
        date: `${i + 1}/${month + 1}/${year}`,
        servings: Math.floor(dayWaterConsumption / 250),
      };
    });

    setCurrentMonthData(data);
    setIsLoading(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = prev === 0 ? 11 : prev - 1;
      if (prev === 0) setCurrentYear(yearPrev => yearPrev - 1);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    if (
      currentYear < today.getFullYear() ||
      (currentYear === today.getFullYear() && currentMonth < today.getMonth())
    ) {
      setCurrentMonth(prev => {
        const newMonth = prev === 11 ? 0 : prev + 1;
        if (prev === 11) setCurrentYear(yearPrev => yearPrev + 1);
        return newMonth;
      });
    }
  };

  const handleDayClick = dayId => {
    const selectedDayData = currentMonthData.find(day => day.id === dayId);
    if (selectedDayId?.dayId === dayId) {
      setSelectedDayId(null);
    } else {
      setSelectedDayId({
        dayId,
        dayNumber: selectedDayData.id,
        dailyNorm: dailyNorm,
        percentage: selectedDayData.percentage,
        servings: selectedDayData.servings,
      });
    }
  };

  return (
    <>
      <div className={styles.navigation}>
        <h3 className={styles.selectedDay}>Month</h3>
        <div className={styles.monthYear}>
          <button className={styles.prevButton} onClick={handlePrevMonth}>
            <IoIosArrowBack />
          </button>
          <p className={styles.month}>
            {new Date(currentYear, currentMonth).toLocaleString('en-US', {
              month: 'long',
            })}
          </p>
          <p className={styles.year}>{currentYear}</p>
          {currentYear < today.getFullYear() ||
          (currentYear === today.getFullYear() &&
            currentMonth < today.getMonth()) ? (
            <button className={styles.nextButton} onClick={handleNextMonth}>
              <IoIosArrowForward />
            </button>
          ) : (
            <div style={{ width: '14px' }}></div>
          )}
        </div>
      </div>

      <div className={styles.calendarContainer}>
        <div
          className={clsx(styles.containerDay, {
            [styles.loadingContainer]: isLoading,
          })}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <ul className={styles.daysList}>
              {currentMonthData.map(day => {
                const circleClass = clsx(styles.dayItem, {
                  [styles.lowPercentage]:
                    day.percentage > 0 && day.percentage < 100,
                  [styles.fullPercentage]: day.percentage >= 100,
                  [styles.zeroPercentage]: day.percentage === 0,
                });
                return (
                  <li
                    key={day.id}
                    className={styles.dayWrapper}
                    onClick={() => handleDayClick(day.id)}
                  >
                    <div className={circleClass}>
                      <p className={styles.calendarDay}>{day.id}</p>
                    </div>
                    <p className={styles.percentageText}>{day.percentage}%</p>
                    {selectedDayId && selectedDayId.dayId === day.id && (
                      <DaysGeneralStats selectedDayData={selectedDayId} />
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default MonthStatsTable;
