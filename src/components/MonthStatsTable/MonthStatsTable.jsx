import { useState, useEffect,} from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import styles from './MonthStatsTable.module.css';
import clsx from 'clsx';
import Loading from '../Loading/Loading';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';

const fetchDataForMonth = (year, month) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const data = Array.from({ length: daysInMonth }, (_, i) => ({
        id: i + 1,
        percentage: Math.floor(Math.random() * 101),
        date: `${i + 1}/${month + 1}/${year}`, 
        dailyNorm: 2, 
        servings: Math.floor(Math.random() * 10),
      }));
      resolve(data);
    }, 1000);
  });
};

const MonthStatsTable = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDayId, setSelectedDayId] = useState(null); 

  useEffect(() => {
    setIsLoading(true);
    fetchDataForMonth(currentYear, currentMonth).then(data => {
      setCurrentMonthData(data);
      setIsLoading(false);
    });
  }, [currentYear, currentMonth]);

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

  const handleDayClick = (dayId) => {
  const selectedDate = new Date(currentYear, currentMonth, dayId);
  const dayNumber = selectedDate.getDate();
    const monthName = selectedDate.toLocaleString('en-US', { month: 'long' });
    
    const selectedDayData = currentMonthData.find(day => day.id === dayId);

  if (selectedDayId?.dayId === dayId) {
    setSelectedDayId(null); // Скинути вибір
  } else {
    setSelectedDayId({
      dayId,
      dayNumber,
      monthName,
      dailyNorm: selectedDayData.dailyNorm, // Додати dailyNorm
      percentage: selectedDayData.percentage, // Додати percentage
      servings: selectedDayData.servings, // Додати servings
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
                  <li key={day.id} className={styles.dayWrapper} onClick={() => handleDayClick(day.id)}
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
