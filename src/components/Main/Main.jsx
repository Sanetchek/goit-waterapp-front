import WaterConsumptionTracker from './WaterСonsumptionTracker/WaterСonsumptionTracker.jsx';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater.jsx';

import css from './Main.module.css';
export default function Main() {
  return (
    <div className={css.mainBox}>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </div>
  );
}
