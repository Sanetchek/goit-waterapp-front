import React from 'react';
import DailyNorma from './components/DailyNorma';
import WaterRatioPanel from './components/WaterRatioPanel';
import TodayWaterList from './components/TodayWaterList';
import MonthStatsTable from './components/MonthStatsTable';

export default function HomePage(params) {
  return (
    <div>
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
