import React, { useState } from 'react';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal.jsx';
import css from './DailyNorma.module.css';

export default function DailyNorma() {
  const [dailyNorm, setDailyNorm] = useState(2.0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }
  const handleSave = (newNorm) => {
    setDailyNorm(newNorm);
    setIsModalOpen(false);
  };

  return (
    <div className={css.normaContainer}>
      <h2 className={css.title}>My daily norma</h2>
      <div className={css.normWater}>
        {dailyNorm}L <button className={css.editBtn} onClick={handleEditClick}>Edit</button>
      </div>
      {isModalOpen && (
        <DailyNormaModal onClose={closeModal} onSave={handleSave} />
      )}
    </div>
  );
}
