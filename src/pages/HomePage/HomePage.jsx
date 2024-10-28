import React, { useEffect, useState } from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodayWaterConsumption,
  fetchMonthlyWaterConsumption,
  addWaterVolume,
} from '../../redux/water/operations';
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
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const userAuthLoading = useSelector(selectors.selectAuthLoading);
  const userAuthError = useSelector(selectors.selectAuthError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodayWaterConsumption());
    dispatch(fetchMonthlyWaterConsumption({ year, month }));
  }, [dispatch, year, month]);

  const containerClass = clsx(css.homeContainer, css.pageBackground);
  const contentClass = clsx('mainContainer', css.container);

  // Modal state and handlers
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = setModalOpen => () => {
    setModalOpen(prev => !prev);
  };

  const handleSave = data => {
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
            <WaterRatioPanel openModal={toggleModal(setIsModalOpen)} />
          )}
        </div>
        {!userAuthLoading && !userAuthError && (
          <WaterListWithCalendar openModal={toggleModal(setIsModalOpen)} />
        )}
      </div>
      {renderModal()}
    </section>
  );
}
