import React from 'react';
import styles from './AuthContainer.module.css';
import bottle from "../../assets/images/tablet/bottle_tablet.png";
import bottlex2 from "../../assets/images/tablet/bottle_tablet@2x.png";
import darkBottle from "../../assets/images/tablet/Dark_theme_bottle.avif";
import darkBottlex2 from "../../assets/images/tablet/Dark_theme_bottle_2x.avif"


const AuthContainer = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.modal}>{children}</div>
      <picture>
        <img className={styles.frame} src={bottle} loading="lazy" alt="signin" srcSet={`${bottlex2} 2x, ${bottle} 1x`}/>
        <img className={styles.darkFrame} src={darkBottle} loading="lazy" alt="signin" srcset={`${darkBottlex2} 2x, ${darkBottle} 1x`} />
      </picture>
    </section>
  );
};

export default AuthContainer;
