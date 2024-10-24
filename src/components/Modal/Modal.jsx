import React, { useEffect } from 'react';
import css from './Modal.module.css'; // Import your CSS module
import snippets from '../../assets/images/snippets.svg';

const Modal = ({ title, children, onClose }) => {
  // Close modal when pressing the Esc key
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Close modal when clicking on the overlay
  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.modalOverlay} onClick={handleOverlayClick}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <h2>{title}</h2>
          <button className={css.modalClose} onClick={onClose}>
            <svg className="icon-x" width="24" height="24">
              <use href={`${snippets}#icon-x`}></use>
            </svg>
          </button>
        </div>
        <div className={css.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
