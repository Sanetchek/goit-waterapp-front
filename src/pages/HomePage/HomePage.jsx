import React, { useState } from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/auth/selectors.js';
import css from './HomePage.module.css';
import botleImage1x from '../../assets/images/desktop/botle_home_screen.png';
import botleImage2x from '../../assets/images/desktop/botle_home_screen@2x.png';
import tabletImage1x from '../../assets/images/tablet/bottle_home_screen_tablet.png';
import tabletImage2x from '../../assets/images/tablet/bottle_home_screen_tablet@2x.png';
import mobileImage1x from '../../assets/images/mob/bottle_home_screen_mob.png';
import mobileImage2x from '../../assets/images/mob/bottle_home_screen_mob@2x.png';
import WaterListWithCalendar from '../../components/WaterListWithCalendar/WaterListWithCalendar.jsx';
import Modal from 'components/Modal/Modal.jsx';
import TodayListModal from 'components/TodayListModal/TodayListModal.jsx';
import clsx from 'clsx';

export default function HomePage() {
  const userDailyNormWater = useSelector(selectors.selectUserDailyNormWater);

  const containerClass = clsx(css.homeContainer, css.pageBackground);
  const contentClass = clsx('mainContainer', css.container);

  // Modal state and handlers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [waterConsumed, setWaterConsumed] = useState(Array(31).fill(0));
  const [currentVolume, setCurrentVolume] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalEdit = volume => {
    setCurrentVolume(volume);
    setIsModalOpenEdit(true);
  };

  const closeModalEdit = () => {
    setIsModalOpenEdit(false);
    setCurrentVolume(0);
  };

  const addWater = amount => {
    const dayIndex = new Date().getDate() - 1;
    setWaterConsumed(prev => {
      const newWaterConsumed = [...prev];
      newWaterConsumed[dayIndex] += Number(amount);
      return newWaterConsumed;
    });
    closeModal();
  };

  const editWater = amount => {
    const dayIndex = new Date().getDate() - 1;
    setWaterConsumed(prev => {
      const newWaterConsumed = [...prev];
      newWaterConsumed[dayIndex] = Number(amount);
      return newWaterConsumed;
    });
    closeModalEdit();
  };

  const handleSave = data => {
    console.log('Water data saved:', data);
    addWater(data.waterVolume);
  };

  const handleEditSave = data => {
    console.log('Water data edited:', data);
    editWater(data.waterVolume);
  };

  return (
    <section id="homePage" className={containerClass}>
      <div className={contentClass}>
        <div className={css.box}>
          <div className={css.imageModal}>
            <h1 className={css.title}>HomePage</h1>
            <DailyNorma />
            <picture>
              <source
                srcSet={`${botleImage1x} 1x, ${botleImage2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${tabletImage1x} 1x, ${tabletImage2x} 2x`}
                media="(min-width: 768px) and (max-width: 1439px)"
              />
              <source
                srcSet={`${mobileImage1x} 1x, ${mobileImage2x} 2x`}
                media="(max-width: 767px)"
              />
              <img className={css.photo} src={botleImage1x} alt="foto" />
            </picture>
          </div>
          <WaterRatioPanel
            dailyNorm={userDailyNormWater}
            openModal={openModal}
            waterConsumed={waterConsumed[new Date().getDate() - 1]}
          />
        </div>
        <WaterListWithCalendar
          dailyNorm={userDailyNormWater}
          openModal={openModal}
          waterConsumed={waterConsumed}
          onEdit={openModalEdit}
        />
      </div>

      {isModalOpen && (
        <Modal title="Add Water" onClose={closeModal}>
          <TodayListModal
            title="Choose a value:"
            onSave={handleSave}
            // previousWaterData={{ amount: 150, time: '14:00' }}
          />
        </Modal>
      )}

      {isModalOpenEdit && (
        <Modal
          title="Edit the entered amount of water"
          onClose={closeModalEdit}
        >
          <TodayListModal
            title="Correct entered data:"
            onSave={handleEditSave}
            initialValue={currentVolume}
          />
        </Modal>
      )}
    </section>
  );
}
