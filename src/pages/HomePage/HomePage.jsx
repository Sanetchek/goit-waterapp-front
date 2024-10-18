import React from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList.jsx';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable.jsx';
import css from './HomePage.module.css';
import botleImage from '../../assets/images/BotleHomescreen@1x-dec-min.jpg';
import tabletImage1x from '../../assets/images/Frame@1x-tablet-min.jpg';
import tabletImage2x from '../../assets/images/Frame@2x-tablet-min.jpg';
import mobileImage1x from '../../assets/images/Frame@1x-mobile-min.jpg';
import mobileImage2x from '../../assets/images/Frame@2x-mobile-min.jpg';

export default function HomePage() {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // if (!isAuthenticated) {
  //   return <h2>You must be logged in to view this page.</h2>;
  // }

  return (
    <div className={css.container}>
      <h1 className={css.title}>HomePage</h1>
      <DailyNorma />
      <div className={css.image}>
        <picture>
          <source
            srcSet={`${tabletImage1x} 1x, ${tabletImage2x} 2x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${mobileImage1x} 1x, ${mobileImage2x} 2x`}
            media="(max-width: 768px)"
          />
          <img className={css.foto} src={botleImage} alt="foto" />
        </picture>
      </div>
      <WaterRatioPanel />
      <TodayWaterList />
      <MonthStatsTable />
    </div>
  );
}
