import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import css from './MonthStatsTable.module.css';
// import { useDispatch } from 'react-redux';
// import { fetchMonthlyWaterConsumption } from '../../redux/water/operations';

// import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import CalendarItem from '../CalendarItem/CalendarItem';

const MonthStatsTable = ({ monthlyWaterlist }) => {
  // const dispatch = useDispatch();
  const date = new Date();

  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth()+1);
  const [activePopup, setActivePopup] = useState(null);
  // const [fetched, setFetched] = useState(false);

  const handlePopupToggle = dayObject => {
    setActivePopup(prev => (prev === dayObject ? null : dayObject));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = prev === 0 ? 11 : prev - 1;
      if (prev === 0) setCurrentYear(year => year - 1);
      console.log('Previous month:', newMonth, 'Year:', currentYear);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = prev === 11 ? 0 : prev + 1;
      if (prev === 11) setCurrentYear(year => year + 1);
      console.log('Next month:', newMonth, 'Year:', currentYear);
      return newMonth;
    });
  };

  // useEffect(() => {
  //   const dataExists =
  //     monthlyWaterlist?.year === currentYear &&
  //     monthlyWaterlist?.month === currentMonth;

  //   if (!dataExists) {
  //     console.log("Fetching data for year:", currentYear, "month:", currentMonth);
  //     dispatch(fetchMonthlyWaterConsumption({ year: currentYear, month: currentMonth }));
  //   }
  // }, [dispatch, currentYear, currentMonth, monthlyWaterlist]);

  return (
    <>
      <div className={css.navigation}>
        <h3 className={css.selectedDay}>Month</h3>
        <div className={css.monthYear}>
          <button className={css.prevButton} onClick={handlePrevMonth}>
            <IoIosArrowBack />
          </button>
          <p className={css.month}>
            {new Date(currentYear, currentMonth).toLocaleString('en-US', {
              month: 'long',
            })}
          </p>
          <p className={css.year}>{currentYear}</p>
          {currentYear < new Date().getFullYear() ||
          (currentYear === new Date().getFullYear() &&
            currentMonth < new Date().getMonth()) ? (
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
