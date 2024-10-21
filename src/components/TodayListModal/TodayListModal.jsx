import React, { useState, useEffect } from 'react';
import css from './TodayListModal.module.css';
import snippets from '../../assets/images/sippets.svg';

const WaterModal = ({ show, onClose, onSave, previousWaterData }) => {
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

  // Функція для отримання поточного часу з округленням до найближчих 5 хвилин
  function getCurrentTime() {
    const date = new Date();
    const minutes = Math.round(date.getMinutes() / 5) * 5;
    return `${date.getHours()}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }

  // Функція для визначення AM або PM
  function getAmPm(time) {
    const [hours] = time.split(':').map(Number);
    return hours >= 12 ? 'PM' : 'AM';
  }

  // Оновлювати AM/PM коли змінюється час
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

  const handleBlur = () => {
    setWaterAmount(Number(inputWaterAmount));
  };

  const incrementWaterAmount = () => {
    setWaterAmount(prev => prev + 50);
  };

  const decrementWaterAmount = () => {
    if (waterAmount > 0) {
      setWaterAmount(prev => prev - 50);
    }
  };

  const handleSave = () => {
    const dataToSave = {
      amount: waterAmount,
      time: selectedTime,
    };
    onSave(dataToSave);
    onClose();
  };

  if (!show) return null;

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>
        <div className={css.headerContainer}>
          <h2>Edit the entered amount of water</h2>
          <button className={css.modalClose} onClick={onClose}>
            <svg className="icon-x" width="24" height="24">
              <use href={`${snippets}#icon-x`}></use>
            </svg>
          </button>
        </div>

        <div className={css.previousData}>
          {previousWaterData ? (
            <div className={css.waterInfoContainer}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="5 5 15 15"
                className={css.icon}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Glass">
                  <path d="M18.279,2.54a1.475,1.475,0,0,0-1.1-.48H6.819a1.47,1.47,0,0,0-1.09.48,1.5,1.5,0,0 ,0-.41,1.12L6.379,19.6a2.51,2.51,0,0,0,2.49,2.34h6.26a2.519,2.519,0,0,0,2.5-2.34l1.05-15.94A1.5,1.5,0,0,0,18.279,2.54Zm-1.65,16.99a1.508,1.508,0,0,1-1.5,1.41H8.869a1.506,1.506,0,0,1-1.49-1.41l-.64-9.62a2.981,2.981,0,0,0,1.17-.49,1.828,1.828,0,0,1,1.18-.39,1.858,1.858,0,0,1,1.19.39,3.025,3.025,0,0,0,3.45,0,1.879,1.879,0,0,1,1.19-.39,1.828,1.828,0,0,1,1.18.39,3,3,0,0,0,1.16.49Зм.7-10.62a2.317,2.317,0,0,1-.69-.33,2.98,2.98,0,0,0-3.45,0,1.885,1.885,0,0,1-1.18.38,1.939,1.939,0,0,1-1.19-.38,2.818,2.818,0,0,0-1.73-.55,2.809,2.809,0,0,0-1.72.55,2.374,2.374,0,0,1-.7.33l-.35-5.32a.468.468,0,0,1,.14-.37.484.484,0,0,1,.36-.16h10.36a.523.523,0,0,1,.37.16.46.46,0,0,1,.13.37Z"></path>
                </g>
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
            onChange={e => setInputWaterAmount(e.target.value)}
            onBlur={handleBlur}
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
    </div>
  );
};

export default WaterModal;
