import css from './CalendarItem.module.css';
import clsx from 'clsx';
import DaysGeneralStats from 'components/DaysGeneralStats/DaysGeneralStats';

export default function CalendarItem({ dayObject, onPopupToggle, isActive }) {
  const { day, percentage } = dayObject;
  const floorPercentage = Math.floor(percentage);
  const circleClass = clsx(css.dayItem, {
    [css.lowPercentage]: floorPercentage > 0 && floorPercentage < 100,
    [css.fullPercentage]: floorPercentage >= 100,
    [css.zeroPercentage]: floorPercentage === 0,
  });

  return (
    <div className={css.dayWrapper} onClick={() => onPopupToggle(dayObject)}>
      <div className={circleClass}>
        <p className={css.calendarDay}>{day}</p>
      </div>
      <p className={css.percentageText}>{floorPercentage}%</p>

      {isActive && (
        <div
          className='popup'
          onClick={e => e.stopPropagation()}
        >
          <DaysGeneralStats selectedDayData={dayObject} />
        </div>
      )}
    </div>
  );
}
