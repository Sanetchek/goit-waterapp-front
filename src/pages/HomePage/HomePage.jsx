import React from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import css from './HomePage.module.css';
import botleImage1x from '../../assets/images/desktop/botle_home_screen.png';
import botleImage2x from '../../assets/images/desktop/botle_home_screen@2x.png';
import tabletImage1x from '../../assets/images/tablet/bottle_home_screen_tablet.png';
import tabletImage2x from '../../assets/images/tablet/bottle_home_screen_tablet@2x.png';
import mobileImage1x from '../../assets/images/mob/bottle_home_screen_mob.png';
import mobileImage2x from '../../assets/images/mob/bottle_home_screen_mob@2x.png';
import WaterListWithCalendar from '../../components/WaterListWithCalendar/WaterListWithCalendar.jsx';

export default function HomePage() {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // if (!isAuthenticated) {
  //   return <h2>You must be logged in to view this page.</h2>;
  // }

  return (
    <section id="homePage" className={css.pageBackground}>
      <div className={`${css.container} mainContainer`}>
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
          <WaterRatioPanel />
        </div>

        <WaterListWithCalendar />
      </div>
    </section>
  );
}
