import React from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList.jsx';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable.jsx';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      HomePage
      <DailyNorma />
      <div className={css.image}>
        <picture>
          <source
            srcset="./img/about-me/foto-x1.jpg 1x, ./img/about-me/foto-x2.jpg 2x"
            media="(min-width: 1280px)"
          />
          <source
            srcset="
            ./img/about-me/foto-tablet-x1.jpg 1x,
            ./img/about-me/foto-tablet-x2.jpg 2x
          "
            media="(min-width: 768px)"
          />
          <source
            srcset="
            ./img/about-me/foto-mobil-x1.jpg 1x,
            ./img/about-me/foto-mobil-x1.jpg 2x
          "
            media="(max-width: 768px)"
          />
          <img class="foto" src="./img/about-me/foto-x1.jpg" alt="foto" />
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
