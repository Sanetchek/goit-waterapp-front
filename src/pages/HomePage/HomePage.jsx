import React from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma.jsx';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList.jsx';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable.jsx';
import './HomePage.css';

export default function HomePage(params) {
  return (
    <div className={css.homePage}>
      HomePage
      <DailyNorma />
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
