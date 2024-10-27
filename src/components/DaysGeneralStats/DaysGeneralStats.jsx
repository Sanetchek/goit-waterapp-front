import React, {useEffect} from 'react';
import css from "./DaysGeneralStats.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { selectDailyNorm } from '../../redux/water/selectors.js';
import { fetchTodayWaterConsumption } from '../../redux/water/operations.js';


const DaysGeneralStats = ({ selectedDayData }) => {
  const dispatch = useDispatch();

  const dailyNormWater = useSelector(selectDailyNorm)
  
  useEffect(() => {
    dispatch(fetchTodayWaterConsumption());
  }, [dispatch]);

  return (
    <div className={css.popup}>
      <div className={css.popupContent} onClick={(e) => e.stopPropagation()}>
        <h3 className={css.title}>{selectedDayData.dayNumber}, { selectedDayData.monthName}</h3>
        <p className={css.text}>
          Daily norma: <span className={css.span}>{(dailyNormWater / 1000)} L</span>
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