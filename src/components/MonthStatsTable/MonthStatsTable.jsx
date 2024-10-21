import { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import styles from './MonthStatsTable.module.css';
import clsx from 'clsx';
import Loading from '../Loading/Loading';
<<<<<<< Updated upstream
=======
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
>>>>>>> Stashed changes

const fetchDataForMonth = (year, month) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const data = Array.from({ length: daysInMonth }, (_, i) => ({
        id: i + 1,
        percentage: Math.floor(Math.random() * 101),
      }));
      resolve(data);
    }, 1000);
  });
};

const MonthStatsTable = () => {
  const today = new Date();
  const calendarRef = useRef(null);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< Updated upstream
=======
  const [selectedDayData, setSelectedDayData] = useState(null); // Для вибору дня
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 }); // Для позиціонування pop-up
  
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
  const handleDayClick = (day, event) => {
  const rect = event.target.getBoundingClientRect();
    const top = rect.top + window.scrollY - 100;
    const left = rect.left + rect.width / 2;

     const selectedDate = new Date(currentYear, currentMonth, day.id);
  const dayNumber = selectedDate.getDate();
  const monthName = selectedDate.toLocaleString('en-US', { month: 'long' });

    setPopupPosition({ top, left });
    setSelectedDayData({ ...day, dayNumber, monthName }); // Вибраний день
};

  const closePopup = () => {
    setSelectedDayData(null); // Закриття попапу
  };

>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
      <div className={styles.calendarContainer}>
        <div className={styles.containerDay}>
=======
      <div ref={calendarRef} className={styles.calendarContainer}>
        <div
          className={clsx(styles.containerDay, {
            [styles.loadingContainer]: isLoading,
          })}
        >
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                  <li key={day.id} className={styles.dayWrapper}>
=======
                  <li key={day.id} className={styles.dayWrapper} onClick={(e) => handleDayClick(day, e)} // Відкриття попапу
                  >
>>>>>>> Stashed changes
                    <div className={circleClass}>
                      <p className={styles.calendarDay}>{day.id}</p>
                    </div>
                    <p className={styles.percentageText}>{day.percentage}%</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
<<<<<<< Updated upstream
=======
       {selectedDayData && (
        <DaysGeneralStats
    selectedDayData={selectedDayData} // Передавання данних
   onClose={closePopup}
          position={popupPosition}
  />
      )}
>>>>>>> Stashed changes
    </>
  );
};

export default MonthStatsTable;
