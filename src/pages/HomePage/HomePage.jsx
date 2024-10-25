import React, { useEffect, useState } from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayWaterConsumption } from '../../redux/water/operations';
import { addWaterVolume } from '../../redux/water/operations.js';
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

const DAY_COUNT = 31;

export default function HomePage() {
  const userAuthLoading = useSelector(selectors.selectAuthLoading);
  const userAuthError = useSelector(selectors.selectAuthError);
  const userDailyNormWater = useSelector(selectors.selectUserDailyNormWater);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodayWaterConsumption());
  }, [dispatch]);

  const containerClass = clsx(css.homeContainer, css.pageBackground);
  const contentClass = clsx('mainContainer', css.container);

  // Modal state and handlers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterConsumed, setWaterConsumed] = useState(Array(DAY_COUNT).fill(0));

  const toggleModal = setModalOpen => () => {
    setModalOpen(prev => !prev);
  };

  const handleWaterChange = (amount, isEdit = false) => {
    const dayIndex = new Date().getDate() - 1;
    setWaterConsumed(prev => {
      const newWaterConsumed = [...prev];
      newWaterConsumed[dayIndex] = isEdit
        ? Number(amount)
        : newWaterConsumed[dayIndex] + Number(amount);
      return newWaterConsumed;
    });
  };

  const handleSave = data => {
    handleWaterChange(data.amount);
    toggleModal(setIsModalOpen)();
    dispatch(addWaterVolume(data));
  };

  const renderModal = () => {
    if (isModalOpen) {
      return (
        <Modal title="Add Water" onClose={toggleModal(setIsModalOpen)}>
          <TodayListModal title="Choose a value:" onSave={handleSave} />
        </Modal>
      );
    }
    return null;
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
              <img className={css.photo} src={botleImage1x} alt="Bottle" />
            </picture>
          </div>
          {!userAuthLoading && !userAuthError && (
            <WaterRatioPanel
              dailyNorm={userDailyNormWater}
              openModal={toggleModal(setIsModalOpen)}
              waterConsumed={waterConsumed[new Date().getDate() - 1]}
            />
          )}
        </div>
        {!userAuthLoading && !userAuthError && (
          <WaterListWithCalendar
            userDailyNormWater={userDailyNormWater}
            waterConsumed={waterConsumed}
            openModal={toggleModal(setIsModalOpen)}
          />
        )}
      </div>
      {renderModal()}
    </section>
  );
}
