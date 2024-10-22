import React, { useState } from 'react';
import icon from '../../assets/images/sippets.svg';
import TodayListModal from '../TodayWaterList/TodayWaterList';
import css from './WaterRatioPanel.module.css';

export default function WaterRatioPanel({ dailyNorm = 2000 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterConsumed, setWaterConsumed] = useState(0);

  const handleAddWaterClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addWater = amount => {
    setWaterConsumed(prev => prev + Number(amount));
    closeModal();
  };

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
            value={waterConsumed > 0 ? waterRatio : 0}
            className={css.slider}
            style={{
              background: `linear-gradient(to right, #9ebbff ${waterRatio}%, #d7e3ff ${waterRatio}%)`,
            }}
            readOnly
            // onChange={e => setWaterConsumed((e.target.value / 100) * dailyNorm)}
          />
        </div>
        <div className={css.valueContainer}>
          <div className={css.borderWrapper}>
            <span className={css.percent}>
              <span className="devider">|</span>
              <span className="waterPercent">0%</span>
            </span>
            {waterConsumed > 0 && (
              <span className={`${css.percent} ${css.percentToday}`}>
                <span className="devider">|</span>
                <span className="waterPercent">{waterRatio}%</span>
              </span>
            )}
            <span className={css.percent}>
              <span className="devider">|</span>
              <span className="waterPercent">100%</span>
            </span>
          </div>
        </div>
      </div>
      <button className={css.addWaterButton} onClick={handleAddWaterClick}>
        <svg className={css.icon} width="24" height="24">
          <use href={`${icon}#icon-plus-circle`}></use>
        </svg>
        Add Water
      </button>

      {isModalOpen && (
        <TodayListModal onClose={closeModal} onAddWater={addWater} />
      )}
    </div>
  );
}
