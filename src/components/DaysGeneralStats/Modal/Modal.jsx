import React from 'react';
import './Modal.module.css';

const Modal = ({ day, onClose }) => {
  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <h3>{day.id}</h3>
        <p>
          Daily norma: <strong>{day.dailyNorm} L</strong>
        </p>
        <p>
          Fulfillment of the daily norm: <strong>{day.percentage}%</strong>
        </p>
        <p>
          How many servings of water: <strong>{day.servings}</strong>
        </p>
        <button className="modalBtn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
