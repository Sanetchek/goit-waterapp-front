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
  console.log('HomePage component is rendering');
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // if (!isAuthenticated) {
  //   return <h2>You must be logged in to view this page.</h2>;
  // }

  // Діагностика імпортованих зображень
  console.log('Path to bottle image:', botleImage);
  console.log('Path to tablet image 1x:', tabletImage1x);
  console.log('Path to tablet image 2x:', tabletImage2x);
  console.log('Path to mobile image 1x:', mobileImage1x);
  console.log('Path to mobile image 2x:', mobileImage2x);

  return (
    <div className={css.container}>
      <h1 className={css.title}>HomePage</h1>
      <DailyNorma className={css.norma} />
      console.log('DailyNorma component rendered');
      <div className={css.image}>
        console.log('Rendering picture element with responsive images');
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
        {/* <picture>
          <source
            srcSet="../../assets/images/BotleHomescreen@1x-dec-min.jpg 1x, ../../assets/images/BotleHomescreen@2x-dec-min.jpg 2x"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="../../assets/images/Frame@1x-tablet-min.jpg 1x, ../../assets/images/Frame@2x-tablet-min.jpg 2x"
            media="(min-width: 768px)"
          />
          <source
            srcSet="../../assets/images/Frame@1x-mobile-min.jpg 1x, ../../assets/images/Frame@2x-mobile-min.jpg 2x"
            media="(max-width: 768px)"
          />
          <img
            className={css.foto}
            src="../../assets/images/BotleHomescreen@1x-dec-min.jpg"
            alt="foto"
          />
        </picture> */}
      </div>
      <WaterRatioPanel />
      <TodayWaterList />
      <MonthStatsTable />
    </div>
  );
}
