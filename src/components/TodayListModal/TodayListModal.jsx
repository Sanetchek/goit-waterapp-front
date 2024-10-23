import React, { useState, useEffect } from 'react';
import css from './TodayListModal.module.css';
import snippet from '../../assets/images/sippets.svg';

const TodayListModal = ({ onSave, previousWaterData }) => {
  const [waterAmount, setWaterAmount] = useState(
    previousWaterData ? previousWaterData.amount : 0
  );
  const [inputWaterAmount, setInputWaterAmount] = useState(waterAmount);
  const [selectedTime, setSelectedTime] = useState(
    previousWaterData ? previousWaterData.time : getCurrentTime()
  );
  const [amPm, setAmPm] = useState(
    getAmPm(previousWaterData?.time || getCurrentTime())
  );

  function getCurrentTime() {
    const date = new Date();
    const minutes = Math.round(date.getMinutes() / 5) * 5;
    return `${date.getHours()}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }

  function getAmPm(time) {
    const [hours] = time.split(':').map(Number);
    return hours >= 12 ? 'PM' : 'AM';
  }

  useEffect(() => {
    setAmPm(getAmPm(selectedTime));
  }, [selectedTime]);

  const generateTimeOptions = () => {
    const options = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 5) {
        const hour = h < 10 ? `0${h}` : h;
        const minute = m < 10 ? `0${m}` : m;
        options.push(`${hour}:${minute}`);
      }
    }
    return options;
  };

  const handleInputChange = e => {
    const value = Number(e.target.value);
    setInputWaterAmount(value);
    setWaterAmount(value);
  };

  const incrementWaterAmount = () => {
    setWaterAmount(prev => {
      const newAmount = prev + 50;
      setInputWaterAmount(newAmount); // Sync inputWaterAmount
      return newAmount;
    });
  };

  const decrementWaterAmount = () => {
    setWaterAmount(prev => {
      const newAmount = prev > 0 ? prev - 50 : 0;
      setInputWaterAmount(newAmount); // Sync inputWaterAmount
      return newAmount;
    });
  };

  const handleSave = () => {
    const dataToSave = {
      amount: waterAmount,
      time: selectedTime,
    };
    onSave(dataToSave);
  };

  return (
    <div>
      <div className={css.previousData}>
        {previousWaterData ? (
          <div className={css.waterInfoContainer}>
            <svg className="icon-glass" width="24" height="24">
              <use href={`${snippet}#icon-glass`}></use>
            </svg>
            {previousWaterData.amount} ml {previousWaterData.time}
            <span className={css.amPmIndicator}>{amPm}</span>
          </div>
        ) : (
          <p>No notes yet</p>
        )}
      </div>

      <div className={css.editSection}>
        <label>Correct entered data:</label>
        <label>Amount of water:</label>
        <div className={css.stepInput}>
          <button className={css.roundButton} onClick={decrementWaterAmount}>
            -
          </button>
          <span>{waterAmount} ml</span>
          <button className={css.roundButton} onClick={incrementWaterAmount}>
            +
          </button>
        </div>
        <div className={css.timeSelectBlock}>
          <select
            value={selectedTime}
            onChange={e => setSelectedTime(e.target.value)}
          >
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <label>Enter the value of the water used:</label>
        <input
          type="number"
          value={inputWaterAmount}
          onChange={handleInputChange} // Sync input change
          className={css.waterInput}
        />
      </div>

      <div className={css.modalActions}>
        <div className={css.stepInput}>
          <span>{waterAmount}ml</span>
        </div>
        <button
          className={`${css.stepSave} ${css.saveButtonStyle}`}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TodayListModal;
