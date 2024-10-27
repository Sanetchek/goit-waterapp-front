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
  const [popupStyle, setPopupStyle] = useState({
    left: '50%', // Start centered
    transform: 'translateX(-50%)', // Center the popup horizontally
  });

  useEffect(() => {
    if (isActive && popupRef.current) {
      // Use setTimeout to ensure the popup is fully rendered
      setTimeout(() => {
        const popupWidth = popupRef.current.getBoundingClientRect().width;
        const popupRect = popupRef.current.getBoundingClientRect();
        const screenWidth = window.innerWidth;

        // Determine space on the left and right of the popup
        const spaceOnLeft = popupRect.left;
        const spaceOnRight = screenWidth - popupRect.right;

        if (spaceOnLeft < 0) {
          console.log(1);
          setPopupStyle({ left: '-20px', right: 'unset' });
        } else if (spaceOnRight < 0) {
          console.log(2);
          setPopupStyle({ left: 'unset', right: '-20px' });
        } else if (spaceOnRight < popupWidth && spaceOnLeft >= popupWidth) {
          console.log(3);
          setPopupStyle({ left: 'unset', right: '8px' });
        } else if (spaceOnLeft < popupWidth && spaceOnRight >= popupWidth) {
          console.log(4);
          setPopupStyle({ left: '8px', right: 'unset' });
        }
      }, 0); // Set timeout to ensure DOM updates
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
          style={{ ...popupStyle }} // Adjust top position as needed
          onClick={e => e.stopPropagation()}
        >
          <DaysGeneralStats selectedDayData={dayObject} />
        </div>
      )}
    </div>
  );
}
