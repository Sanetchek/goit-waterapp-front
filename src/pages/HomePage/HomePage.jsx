import React from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList.jsx';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable.jsx';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      HomePage
      <DailyNorma />
      <div className={css.image}>
        <picture>
          <source
            srcset="../../img/BotleHomescreen@1x-dec-min.jpg 1x, ../../img/Botle Home screen@2x-dec-min.jpg 2x"
            media="(min-width: 1280px)"
          />
          <source
            srcset="../../img/Frame@1x-tablet-min.jpg 1x, ../../img/Frame@2x-tablet-min.jpg 2x"
            media="(min-width: 768px)"
          />
          <source
            srcset="../../img/Frame@1x-mobile-min.jpg 1x, ../../img/Frame@2x-mobile-min.jpg 2x"
            media="(max-width: 768px)"
          />
          <img
            class="foto"
            src="../../img/BotleHomescreen@1x-dec-min.jpg 1x"
            alt="foto"
          />
        </picture>
      </div>
      <WaterRatioPanel />
      <TodayWaterList />
      <MonthStatsTable />
    </div>
  );
}

// import { FcContacts } from "react-icons/fc";
// import css from "./HomePage.module.css";

// export default function Home() {
//   return (
//     <div className={css.container}>
//       <FcContacts className={css.icon} />
//       <h1 className={css.title}>Welcome to Phone book</h1>
//     </div>
//   );
// }
