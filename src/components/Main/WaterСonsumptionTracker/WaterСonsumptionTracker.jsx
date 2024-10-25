import React from 'react';
import { Link } from 'react-router-dom';
import css from './WaterСonsumptionTracker.module.css';
import snippets from '../../../assets/images/snippets.svg';

export default function WaterConsumptionTracker() {
  return (
    <div className={css.boxComsamption}>
      <div className={css.headerWrapper}>
        <h1 className={css.header}>Water consumption tracker</h1>
        <h2 className={css.subHeader}>Record daily water intake and track</h2>
      </div>
      <div className={css.trackerBenefitsBox}>
        <h3 className={css.benefitsSubHeader}>Tracker Benefits</h3>
        <ul className={css.benefitsList}>
          <li className={css.benefitItem}>
            <svg className={css.benefitIcon}>
              <use href={`${snippets}#icon-calendar`}></use>
            </svg>
            <p className={css.benefitText}>Habit drive</p>
          </li>
          <li className={css.benefitItem}>
            <svg className={css.benefitIcon}>
              <use href={`${snippets}#icon-presentation`}></use>
            </svg>
            <p className={css.benefitText}>View statistics</p>
          </li>
          <li className={css.benefitItem}>
            <svg className={css.benefitIcon}>
              <use href={`${snippets}#icon-wrench`}></use>
            </svg>
            <p className={css.benefitText}>Personal rate setting</p>
          </li>
        </ul>
      </div>
      <Link to="/signup" className={css.tryBtn}>
        Try tracker
      </Link>
    </div>
  );
}
