import React, { useState } from 'react';
import icon from '../../assets/images/sippets.svg';
import TodayListModal from '../TodayWaterList/TodayWaterList.jsx';
import css from './WaterRatioPanel.module.css';
import Modal from 'components/Modal/Modal.jsx';

export default function WaterRatioPanel({ dailyNorm = 2000 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterConsumed, setWaterConsumed] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addWater = amount => {
    setWaterConsumed(prev => prev + Number(amount));
    closeModal();
  };

  // Оновлення waterRatio на основі waterConsumed
  const waterRatio = Math.min(
    Math.round((waterConsumed / dailyNorm) * 100),
    100
  );

  return (
    <div className={css.box}>
      <div className={css.panelContainer}>
        <div className={css.sliderContainer}>
          <label className={css.label} htmlFor="waterRange">
            Today
          </label>
          <input
            type="range"
            id="waterRange"
            min="0"
            max="100"
            value={waterRatio}
            className={css.slider}
            style={{
              background: `linear-gradient(to right, #9ebbff ${waterRatio}%, #d7e3ff ${waterRatio}%)`,
            }}
            readOnly
          />
        </div>
        <div className={css.valueContainer}>
          <div className={css.borderWrapper}>
            <div className={css.afterBefor}>
              <span className={css.devider}>|</span>
              <span className={css.percent}>0%</span>
            </div>
            {waterConsumed > 0 && (
              <div className={css.afterBefor}>
                <span className={css.devider}>|</span>
                <span className={`${css.percent} ${css.percentToday}`}>
                  {waterRatio}%
                </span>
              </div>
            )}
            <div className={css.afterBefor}>
              <span className={css.devider}>|</span>
              <span className={css.percent}>100%</span>
            </div>
          </div>
        </div>
      </div>
      <button className={css.addWaterButton} onClick={openModal}>
        <svg className={css.icon} width="24" height="24">
          <use href={`${icon}#icon-plus-circle`}></use>
        </svg>
        Add Water
      </button>

      {isModalOpen && (
        <Modal title="Add Water" onClose={closeModal}>
          <TodayListModal
            onClose={closeModal}
            onAddWater={addWater} // Передаємо функцію для додавання води
          />
        </Modal>
      )}
    </div>
  );
}
