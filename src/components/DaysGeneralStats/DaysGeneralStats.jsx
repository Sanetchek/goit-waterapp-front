import React from 'react';
import css from './DaysGeneralStats.module.css';

const DaysGeneralStats = ({ selectedDayData }) => {
  const { date, dailyNorm, percentage, consumptionCount } = selectedDayData;
  const floorPercentage = Math.floor(percentage);

  return (
    <div className={css.popup}>
      <div className={css.popupContent}>
        <h3 className={css.title}>{date}</h3>
        <p className={css.text}>
          Daily norma: <span className={css.span}>{dailyNorm / 1000} L</span>
        </p>
        <p className={css.text}>
          Fulfillment of the daily norm:{' '}
          <span className={css.span}>{floorPercentage}%</span>
        </p>
        <p className={css.text}>
          How many servings of water:{' '}
          <span className={css.span}>{consumptionCount}</span>
        </p>
      </div>
    </div>
  );
};

export default DaysGeneralStats;
