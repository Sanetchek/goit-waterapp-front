import WaterConsumptionTracker from './WaterСonsumptionTracker/WaterСonsumptionTracker.jsx';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater.jsx';

import css from './Main.module.css';
export default function Main() {
  return (
    <section className={css.mainBox}>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </section>
  );
}
