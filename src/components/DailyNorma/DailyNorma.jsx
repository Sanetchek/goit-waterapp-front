import React, { useState } from 'react';
import DailyNormaModal from '../../components/DailyNormaModal/DailyNormaModa.jsx';
import css from './DailyNorma.module.css';

export default function DailyNorma() {
  const [dailyNorm, setDailyNorm] = useState(5.0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.normaContainer}>
      <h2>Розрахована денна норма: {dailyNorm} л</h2>
      <button onClick={handleEditClick}>Edit</button>
      {isModalOpen && (
        <DailyNormaModal onClose={closeModal} setDailyNorm={setDailyNorm} />
      )}
    </div>
  );
}
