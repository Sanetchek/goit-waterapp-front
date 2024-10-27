import React, { useState } from 'react';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal.jsx';
import css from './DailyNorma.module.css';
import Modal from 'components/Modal/Modal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../redux/water/selectors.js';
import { updateDailyWaterNorm } from '../../redux/water/operations.js';

export default function DailyNorma() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const todaysWaterDailyNorm = useSelector(selectors.selectTodaysWaterDailyNorm);
  const userWaterNorma = todaysWaterDailyNorm ? todaysWaterDailyNorm / 1000 : '-';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (newNorm) => {
    const ml = newNorm * 1000;
    dispatch(updateDailyWaterNorm({ dailyNormWater: ml }));
  };

  return (
    <div className={css.normaContainer}>
      <h2 className={css.title}>My daily norma</h2>
      <div className={css.normWater}>
        {`${userWaterNorma} L`}
        <button className={css.editBtn} onClick={openModal}>
          Edit
        </button>
      </div>

      {isModalOpen && (
        <Modal title="My daily norma" onClose={closeModal}>
          <DailyNormaModal onClose={closeModal} onSave={handleSave} />
        </Modal>
      )}
    </div>
  );
}
