import { useState, useEffect, useRef } from 'react';
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

  const popupRef = useRef(null);
  const [popupStyle, setPopupStyle] = useState({});

  useEffect(() => {
    if (isActive && popupRef.current) {
      const popupRect = popupRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      // Determine space on the left and right of the popup
      const spaceOnLeft = popupRect.left;
      const spaceOnRight = screenWidth - popupRect.right;

      // Calculate the popup's new position
      if (spaceOnRight < popupRect.width && spaceOnLeft >= popupRect.width) {
        // Move to the left if there's not enough space on the right
        setPopupStyle({ left: `${popupRect.width}px`, right: 'unset' }); // Adjust based on your needs
      } else {
        // Default position
        setPopupStyle({ right: '8px', left: 'unset' });
      }
    }
  }, [isActive]);

  return (
    <div className={css.dayWrapper} onClick={() => onPopupToggle(dayObject)}>
      <div className={circleClass}>
        <p className={css.calendarDay}>{day}</p>
      </div>
      <p className={css.percentageText}>{floorPercentage}%</p>

      {isActive && (
        <div
          ref={popupRef}
          className={css.popup}
          style={{ ...popupStyle, position: 'absolute', top: '-190px' }} // Top position can be adjusted as needed
          onClick={e => e.stopPropagation()}
        >
          <DaysGeneralStats selectedDayData={dayObject} />
        </div>
      )}
    </div>
  );
}
