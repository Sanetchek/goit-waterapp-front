import React, { useState } from 'react';
import TodayListModal from '../../components/TodayListModal/TodayListModal.jsx';
import css from './WaterRatioPanel.module.css';

export default function WaterRatioPanel({ dailyNorm }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterConsumed, setWaterConsumed] = useState(0);

  const handleAddWaterClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const progress = dailyNorm > 0 ? (waterConsumed / dailyNorm) * 100 : 0;

  return (
    <div className={css.panelContainer}>
      <h2>
        Випита вода: {waterConsumed} л / {dailyNorm} л
      </h2>
      <div className={css.scale}>
        <div className={css.progress} style={{ width: `${progress}%` }}></div>
      </div>
      <button onClick={handleAddWaterClick}>Add Water</button>
      {isModalOpen && (
        <TodayListModal onClose={closeModal} onAddWater={setWaterConsumed} />
      )}
    </div>
  );
}
