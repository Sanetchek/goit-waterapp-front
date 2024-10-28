import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/water/selectors.js';
import css from './TodayListModal.module.css';
import snippet from '../../assets/images/snippets.svg';

function getAmPm(time) {
  const [hours] = time.split(':').map(Number);
  return hours >= 12 ? 'PM' : 'AM';
}

function getCurrentTime() {
  const date = new Date();
  let minutes = Math.round(date.getMinutes() / 5) * 5;

  // Check if rounding minutes goes up to 60
  if (minutes === 60) {
    minutes = 0; // Reset minutes to 0
    date.setHours(date.getHours() + 1); // Increment the hour
  }

  const hours = date.getHours();
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

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

const TodayListModal = ({ title = '', onSave, previousWaterData }) => {
  const userDailyNormWater = useSelector(selectors.selectTodaysWaterDailyNorm);
  const initialWaterAmount = previousWaterData ? previousWaterData.amount : 0;
  const initialTime = previousWaterData ? previousWaterData.time : getCurrentTime();

  return (
    <Formik
      initialValues={{
        waterVolume: initialWaterAmount,
        selectedTime: initialTime,
      }}
      onSubmit={values => {
        // Get the current date
        const currentDate = new Date();

        // Split the selected time (HH:mm) into hours and minutes
        const [hours, minutes] = values.selectedTime.split(':').map(Number);

        // Set the hours and minutes on the current date
        currentDate.setHours(hours, minutes, 0, 0); // Set hours, minutes, and reset seconds/milliseconds

        // Format date to 'YYYY-MM-DDTHH:mm' in local timezone
        const formattedDate = `${currentDate.getFullYear()}-${String(
          currentDate.getMonth() + 1
        ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(
          2,
          '0'
        )}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(
          2,
          '0'
        )}`;

        // Create the data object to save
        const dataToSave = {
          dailyNorm: userDailyNormWater, // Get the daily norm from Redux
          amount: values.waterVolume,
          date: formattedDate, // Format date as ISO string in local timezone
        };

        // Call the onSave function with the data
        onSave(dataToSave);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.waterContent}>
          <div className={css.previousData}>
            {previousWaterData && (
              <div className={css.waterInfoContainer}>
                <svg className={css.iconColor} width="24" height="24">
                  <use href={`${snippet}#icon-glass`}></use>
                </svg>
                <span className={css.waterLooc}>
                  {previousWaterData.amount} ml
                </span>
                <span className={css.amPmIndicator}>
                  {previousWaterData.time}{' '}
                  {getAmPm(previousWaterData.time)}
                </span>
              </div>
            )}
          </div>

          <div className={css.editSection}>
            <input type="hidden" name="dailyNorm" />
            <h3 className={css.title}>{title}</h3>
            <label>Amount of water:</label>
            <div className={css.stepInput}>
              <button
                type="button"
                className={css.roundButton}
                onClick={() => {
                  const newAmount = Math.max(0, values.waterVolume - 50); // Заборонити значення нижче 0
                  setFieldValue('waterVolume', newAmount);
                }}
              >
                -
              </button>
              <span>{values.waterVolume} ml</span>
              <button
                type="button"
                className={css.roundButton}
                onClick={() => {
                  const newAmount = Math.min(5000, values.waterVolume + 50); // Заборонити значення більше 5000
                  setFieldValue('waterVolume', newAmount);
                }}
              >
                +
              </button>
            </div>
            <label>Recording time:</label>
            <div className={css.timeSelectBlock}>
              <Field as="select" name="selectedTime">
                {generateTimeOptions().map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
            </div>
            <label className={css.namValue}>
              Enter the value of the water used:
            </label>
            <Field
              type="number"
              name="waterVolume"
              className={css.waterInput}
              min={0} // Заборонити від'ємне введення
              max={5000} // Заборонити значення більше 5000
              onFocus={e => {
                if (e.target.value === '0') {
                  setFieldValue('waterVolume', ''); // Очищати поле при фокусі, якщо значення 0
                }
              }}
              onChange={e => {
                let value = e.target.value;

                // Дозволити порожнє значення
                if (value === '') {
                  setFieldValue('waterVolume', '');
                  return;
                }

                // Перевірка на допустимий діапазон
                value = Math.max(0, Math.min(5000, Number(value)));

                setFieldValue('waterVolume', value);
              }}
            />
          </div>

          <div className={css.modalActions}>
            <div className={css.stepInputDown}>
              <span>{values.waterVolume} ml</span>
            </div>
            <div>
              <button
                type="submit"
                className={`${css.stepSave} ${css.saveButtonStyle}`}
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TodayListModal;
