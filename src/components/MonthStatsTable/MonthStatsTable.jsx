import { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import css from './MonthStatsTable.module.css';
import CalendarItem from '../CalendarItem/CalendarItem';

const MonthStatsTable = ({
  monthlyWaterlist,
  currentYear,
  currentMonth,
  onMonthChange,
}) => {
  const [activePopup, setActivePopup] = useState(null);

  const handlePopupToggle = dayObject => {
    setActivePopup(prev => (prev === dayObject ? null : dayObject));
  };

  const handlePrevMonth = () => {
    const newMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const newYear = currentMonth === 1 ? currentYear - 1 : currentYear;
    onMonthChange(newYear, newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    const newYear = currentMonth === 12 ? currentYear + 1 : currentYear;
    onMonthChange(newYear, newMonth);
  };

  useEffect(() => {
    const fetchData = () => {
      console.log(
        'Fetching data for year:',
        currentYear,
        'month:',
        currentMonth
      );
    };

    fetchData();
  }, [currentYear, currentMonth]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (activePopup && !event.target.closest('.popup')) {
        setActivePopup(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopup]);

  return (
    <>
      <div className={css.navigation}>
        <h3 className={css.selectedDay}>Month</h3>
        <div className={css.monthYear}>
          <button className={css.prevButton} onClick={handlePrevMonth}>
            <IoIosArrowBack />
          </button>
          <p className={css.month}>
            {new Date(currentYear, currentMonth - 1).toLocaleString('en-US', {
              month: 'long',
            })}
          </p>
          <p className={css.year}>{currentYear}</p>
          {currentYear < new Date().getFullYear() ||
          (currentYear === new Date().getFullYear() &&
            currentMonth < new Date().getMonth() + 1) ? (
            <button className={css.nextButton} onClick={handleNextMonth}>
              <IoIosArrowForward />
            </button>
          ) : (
            <div style={{ width: '14px' }}></div>
          )}
        </div>
      </div>

      <div className={css.calendarContainer}>
        <div className={css.containerDay}>
          <ul className={css.daysList}>
            {monthlyWaterlist.length > 0 &&
              monthlyWaterlist.map(day => (
                <li className="itemWrapper" key={day.key}>
                  <CalendarItem
                    dayObject={day}
                    onPopupToggle={handlePopupToggle}
                    isActive={activePopup === day}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MonthStatsTable;
