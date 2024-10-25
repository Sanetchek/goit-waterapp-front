import React from 'react';
import css from './WaterResult.module.css';

const WaterResult = ({ result }) => {
  return (
    <p>
      The required amount of water in liters per day:{' '}
      <span className={css.textBlue}>{result.toFixed(1)} L</span>
    </p>
  );
};

export default WaterResult;
