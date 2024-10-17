import React from 'react';
// import { useSelector } from 'react-redux';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList.jsx';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable.jsx';
import css from './HomePage.module.css';

export default function HomePage() {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Перевірка статусу авторизації

  // if (!isAuthenticated) {
  //   return <h2>You must be logged in to view this page.</h2>; // Відображення повідомлення для неавторизованих користувачів
  // }
  return (
    <div className={css.container}>
      <h1 className={css.title}>HomePage</h1>
      <DailyNorma className={css.norma} />
      <div className={css.image}>
        <picture>
          <source
            srcset="../../assets/images/BotleHomescreen@1x-dec-min.jpg 1x, ../../assets/images/BotleHomescreen@2x-dec-min.jpg 2x"
            media="(min-width: 1280px)"
          />
          <source
            srcset="../../assets/images/Frame@1x-tablet-min.jpg 1x, ../../assets/images/Frame@2x-tablet-min.jpg 2x"
            media="(min-width: 768px)"
          />
          <source
            srcset="../../assets/images/Frame@1x-mobile-min.jpg 1x, ../../assets/images/Frame@2x-mobile-min.jpg 2x"
            media="(max-width: 768px)"
          />
          <img
            className={css.foto}
            src="../../assets/images/BotleHomescreen@1x-dec-min.jpg"
            alt="foto"
          />
        </picture>
      </div>
      <WaterRatioPanel className={css.ratio} />
      <TodayWaterList />
      <MonthStatsTable />
    </div>
  );
}
