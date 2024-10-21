import React from 'react';
import Modal from './Modal/Modal'; // Компонент для модального вікна

const DaysGeneralStats = ({ selectedDayData, onClose }) => {
  console.log(selectedDayData); // Для перевірки даних

  return (
    <div className="calendar">
      <div className="day-details">
        {selectedDayData ? (
          <Modal day={selectedDayData} onClose={onClose} />
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default DaysGeneralStats;
