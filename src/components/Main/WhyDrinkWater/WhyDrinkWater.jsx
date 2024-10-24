import css from './WhyDrinkWater.module.css';
import snippets from '../../../assets/images/snippets.svg';
export default function WhyDrinkWater() {
  return (
    <div className={css.WhyDrinkWrapper}>
      <h3 className={css.listHeader}>Why drink water</h3>
      <ul className={css.listBox}>
        <li className={css.listItem}>
          <svg className={css.iconSvg} width="8" height="8">
            <use href={`${snippets}#icon-circle`}></use>
          </svg>
          <p className={css.itemText}>Supply of nutrients to all organs</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.iconSvg} width="8" height="8">
            <use href={`${snippets}#icon-circle`}></use>
          </svg>
          <p className={css.itemText}>Providing oxygen to the lungs</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.iconSvg} width="8" height="8">
            <use href={`${snippets}#icon-circle`}></use>
          </svg>
          <p className={css.itemText}>Maintaining the work of the heart</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.iconSvg} width="8" height="8">
            <use href={`${snippets}#icon-circle`}></use>
          </svg>
          <p className={css.itemText}>Release of processed substances</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.iconSvg} width="8" height="8">
            <use href={`${snippets}#icon-circle`}></use>
          </svg>
          <p className={css.itemText}>
            Ensuring the stability of the internal environment
          </p>
        </li>
        <li className={css.listItem}>
          <svg className={css.iconSvg} width="8" height="8">
            <use href={`${snippets}#icon-circle`}></use>
          </svg>
          <p className={css.itemText}>
            Maintaining within the normal temperature
          </p>
        </li>
        <li className={css.listItem}>
          <svg className={css.iconSvg} width="8" height="8">
            <use href={`${snippets}#icon-circle`}></use>
          </svg>
          <p className={css.itemText}>
            Maintaining an immune system capable of resisting disease
          </p>
        </li>
      </ul>
    </div>
  );
}
