import React from 'react';
import css from "./DaysGeneralStats.module.css"


const DaysGeneralStats = ({ selectedDayData, onClose, position }) => {


  return (
    <div className={css.popup}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    onClick={onClose}>
      <div className={css.popupContent} onClick={(e) => e.stopPropagation()}>
        <h3 className={css.title}>{selectedDayData.dayNumber}, { selectedDayData.monthName}</h3>
        <p className={css.text}>
          Daily norma: <span className={css.span}>{selectedDayData.dailyNorm} L</span>
        </p>
        <p className={css.text}>
          Fulfillment of the daily norm: <span className={css.span}>{selectedDayData.percentage}%</span>
        </p>
        <p className={css.text}>
          How many servings of water: <span className={css.span}>{selectedDayData.servings}</span>
        </p>
      </div>
    </div>
  );
};


export default DaysGeneralStats;